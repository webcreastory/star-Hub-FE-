import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import api from '../../api/api';
import styled from 'styled-components';
import StHubDetail from './StHubDetail';

function StarHub() {
    const Navigate = useNavigate();
    const location = useLocation();
    const [datas, setDatas] = useState(null);

    // StarBoard에서 전달된 값들을 받기
    const inputValue = location.state?.inputValue || {};

    // StarHub 컴포넌트에서
    const updateStarBoardData = (updatedItem) => {
        setDatas((prevDatas) => {
            const updatedDatas = prevDatas.map((item) => (item.id === updatedItem.id ? updatedItem : item));
            return updatedDatas;
        });
    };

    // StHubDetail 컴포넌트로 콜백 함수를 전달합니다.
    const handleUpdateStarBoardData = (updatedItem) => {
        updateStarBoardData(updatedItem);
    };

    const starHubValue = async () => {
        try {
            const { data } = await api.get(`/starboards`);
            setDatas(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        // inputValue가 변경되었을 때만 데이터를 로드
        if (inputValue && inputValue.id) {
            starHubValue();
        } else {
            // inputValue가 없으면 컴포넌트가 처음 마운트된 것이므로 데이터 로드
            starHubValue();
        }
    }, [inputValue]);

    return (
        <>
            <StarHubMainForm>
                <StarHubHeader>
                    <StarHubHeaderH1>스타허브</StarHubHeaderH1>
                    <StarHubHeaderH2>다른 사람들의 스타보드를 확인해보세요.</StarHubHeaderH2>
                    <StarHubHeaderLine />
                    <div>
                        <StarHubHeaderButton
                            onClick={() => {
                                Navigate('/starboards');
                            }}
                        >
                            스타보드 작성하기
                        </StarHubHeaderButton>
                    </div>
                </StarHubHeader>

                <StarHubContainer>
                    {datas?.map((item, index) => {
                        const isDuplicate = datas.findIndex((i) => i.id === item.id) !== index;
                        if (isDuplicate) {
                            return null; // 중복된 경우 렌더링을 건너뜁니다.
                        }

                        return (
                            <StBox
                                key={index}
                                onClick={() => {
                                    Navigate('/sthubdetail', { state: { selectedItem: item } });
                                }}
                            >
                                <ImageBox src={item.imageUrl} alt="썸네일 이미지" />
                                <StarHubBoxtextH2>{item.name}</StarHubBoxtextH2>
                                {/* <h2>{item.major}</h2> */}
                                <StarHubBoxtextH1>{item.title}</StarHubBoxtextH1>
                                <StarHubBoxtextH2>{item.date}</StarHubBoxtextH2>
                                {/* <h2>{item.contents}</h2> */}
                            </StBox>
                        );
                    })}
                </StarHubContainer>
                <StHubDetail updateStarBoardData={handleUpdateStarBoardData} />
            </StarHubMainForm>
        </>
    );
}
// MainForm
const StarHubMainForm = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin-top: 20px;
`;
// StarHubHeader
const StarHubHeader = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;

    width: 100%;
`;
const StarHubHeaderH1 = styled.div`
    font-size: 30px;
    font-weight: 700;
`;

const StarHubHeaderH2 = styled.div`
    font-size: 14px;
    font-weight: 500;
`;
const StarHubHeaderLine = styled.hr`
    width: 100%;
    border: none;
    border-top: 1px solid rgba(0, 0, 0, 0.1);

    margin-top: 30px;
`;
// header button
const StarHubHeaderButton = styled.button`
    width: 150px;
    height: 50px;
    background-color: white;
    border: 2px solid rgba(0, 0, 0, 0.5);
    border-radius: 10px;

    font-size: 14px;
    font-weight: 500;
    margin-top: 10px;

    cursor: pointer;
`;
// Container
const StarHubContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 12px;

    margin-top: 20px;
    padding-left: 55px;
`;
const StBox = styled.div`
    background-color: rgb(41, 38, 38);
    color: white;
    font-size: 10px;
    width: 230px;
    height: 325px;
    padding: 20px;
    border: none;
    border-radius: 10px;
    margin: 5px;
`;
const ImageBox = styled.img`
    margin-bottom: 10px;
    width: 230px;
    height: 200px;
    border-radius: 7px;
`;
const StarHubBoxtextH1 = styled.div`
    margin-top: 10px;
    margin-left: 3px;
    font-size: 21px;
    font-weight: 700;
`;
const StarHubBoxtextH2 = styled.div`
    margin-top: 13px;
    margin-left: 3px;
    font-size: 14px;
    font-weight: 500;
`;

// =====================================
// export const HomeContainer = styled.div`
//     width: 1200px;
//     margin: 0px auto 0px auto;
// `;

// export const StDiv1 = styled.div`
//     height: 70vh;
//     display: flex;
//     flex-direction: column;
//     gap: 30px;
//     -webkit-box-pack: center;
//     justify-content: center;
//     padding: 0px 30px 0px 30px;
// `;
// export const CenterDiv = styled.div`
//     display: flex;
//     align-items: center;
//     flex-direction: column;
//     justify-content: center;
//     margin-top: 25px;
// `;
// export const CenterText = styled.div`
//     text-align: center;
// `;
// export const StBtn = styled.button`
//     display: flex;
//     -webkit-box-align: center;
//     align-items: center;
//     -webkit-box-pack: center;
//     justify-content: center;
//     flex-direction: row;
//     flex-shrink: 0;
//     border: 1px solid rgb(238, 238, 238);
//     color: white;
//     height: 46px;
//     border-radius: 8px;
//     background-color: black;
//     cursor: pointer;
//     width: 200px;
//     font-size: 16px;
//     font-weight: 600;
// `;

export default StarHub;
