import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../api/api';
import styled from 'styled-components';

function StarBoard() {
    const Navigate = useNavigate();

    const [boardid, setBoardId] = useState();
    const [date, setDate] = useState();
    const [name, setName] = useState();
    const [major, setMajor] = useState();
    const [title, setTitle] = useState();
    const [contents, setContents] = useState();
    const [imageUrl, setImageUrl] = useState('');

    const onchangeImageUpload = (e) => {
        const { files } = e.target;
        const uploadFile = files[0];
        const reader = new FileReader();
        reader.readAsDataURL(uploadFile);
        reader.onloadend = () => {
            setImageUrl(reader.result);
        };
    };

    const AddButton = async () => {
        try {
            if (date === '' || name === '' || title === '' || contents === '' || imageUrl === '') {
                alert('내용을 입력해주세요');
                return;
            }
            const response = await api.post(`/starboards`, { boardid, date, name, major, title, contents, imageUrl });
            // 스타보드 추가 후 새로운 스타보드만을 받아오기
            // const { data: newStarboard } = await api.get(`/starboards/${response.data.id}`);

            Navigate('/starhub');
        } catch (error) {
            if (error.response) {
                const statusCode = error.response.status;
                const errorMessage = error.response.data.message;
                if (statusCode === 400) {
                    alert(errorMessage);
                }
            }
        }
    };

    return (
        <>
            <StarBoardMainForm>
                <StarBoardHeader>
                    <StarBoardHeaderH1>스타보드</StarBoardHeaderH1>
                    <StarBoardHeaderH2>개발 학습내용을 정리해보세요.</StarBoardHeaderH2>
                    <StarBoardHeaderLine />
                </StarBoardHeader>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                    }}
                >
                    <StDiv2>
                        <h4>날짜</h4>
                        <StInput
                            type="date"
                            value={date}
                            onChange={(e) => {
                                setDate(e.target.value);
                            }}
                            placeholder="날짜를 입력해주세요"
                        ></StInput>
                        <h4>제목</h4>
                        <StInput
                            type="text"
                            value={title}
                            onChange={(e) => {
                                setTitle(e.target.value);
                            }}
                            placeholder="제목을 입력해주세요(20자 이내)"
                        ></StInput>
                        <h4>작성자(이름(반))</h4>
                        <StInput
                            type="text"
                            value={name} // 이름(반) name(major) 어떻게 코드 작성해야 하지?
                            onChange={(e) => {
                                setName(e.target.value);
                            }}
                            placeholder="이름(반)"
                        ></StInput>
                        <h4>내용</h4>
                        <StTextarea
                            type="text"
                            value={contents}
                            onChange={(e) => {
                                setContents(e.target.value);
                            }}
                            placeholder="학습 내용을 입력해주세요(1000자 이내)"
                        ></StTextarea>
                        <h4>이미지 업로드</h4>
                        <ImageBox src={imageUrl} img="img" placeholder="썸네일로 사용할 이미지를 업로드해주세요" />
                        <StInput type="file" accept="image/*" onChange={onchangeImageUpload} />
                        {/* <StInput
                            type="text"
                            value={imageUrl}
                            onChange={(e) => {
                                setImageUrl(e.target.value);
                            }}
                            placeholder="썸네일로 사용할 이미지를 업로드해주세요" // 파일 탐색기에서 선택  업로드
                        ></StInput> */}
                    </StDiv2>

                    <CenterDiv>
                        <br />
                        <StBtn onClick={() => Navigate('/starhub')}>스타허브</StBtn>
                        <StBtn onClick={AddButton}>저장</StBtn>
                    </CenterDiv>
                </form>
            </StarBoardMainForm>
        </>
    );
}
// MainForm
const StarBoardMainForm = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin-top: 20px;
`;
// StarBoardHeader
const StarBoardHeader = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;

    width: 100%;
`;
const StarBoardHeaderH1 = styled.div`
    font-size: 30px;
    font-weight: 700;
`;
const StarBoardHeaderH2 = styled.div`
    font-size: 14px;
    font-weight: 500;
`;
const StarBoardHeaderLine = styled.hr`
    width: 100%;
    border: none;
    border-top: 1px solid rgba(0, 0, 0, 0.1);

    margin-top: 30px;
`;
const ImageBox = styled.img`
    margin-bottom: 10px;
    width: 230px;
    height: 200px;
    border-radius: 7px;
`;
const StDiv2 = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;
const CenterDiv = styled.div`
    width: 700px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 15px;
`;
const StInput = styled.input`
    box-sizing: border-box;
    height: 40px;
    width: 100%;
    outline: none;
    border-radius: 8px;
    padding: 0px 12px;
    font-size: 14px;
    border: 1px solid rgb(168, 168, 168);
`;
const StTextarea = styled.textarea`
    box-sizing: border-box;
    height: 90px;
    width: 100%;
    outline: none;
    border-radius: 8px;
    padding: 10px 0px 0px 12px;
    font-size: 14px;
    border: 1px solid rgb(168, 168, 168);
`;
const StBtn = styled.button`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    flex-direction: row;
    flex-shrink: 0;
    border: 1px solid rgb(238, 238, 238);
    color: white;
    height: 46px;
    border-radius: 8px;
    background-color: black;
    cursor: pointer;
    width: 200px;
    font-size: 16px;
    font-weight: 600;
`;
export default StarBoard;
// 스타보드
