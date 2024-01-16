import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import api from '../../api/api';
import styled from 'styled-components';

function StHubDetail(props) {
    const { updateStarBoardData } = props;
    const Navigate = useNavigate();
    const location = useLocation();
    const [datas, setDatas] = useState(null);
    const [contents, setContents] = useState('');
    const [comments, setComments] = useState('');
    const [commentsList, setCommentsList] = useState([]);
    const [isEditing, setIsEditing] = useState(false); // Added state for editing mode
    const [editedItem, setEditedItem] = useState({
        title: '',
        imageUrl: '',
        name: '',
        major: '',
        date: '',
        contents: '',
        comments: '',
    });

    // StarBoard에서 전달된 값들을 받기
    const inputValue = location.state?.inputValue || {};
    const selectedItem = location.state?.selectedItem || null;

    const starHubValue = async () => {
        const { data } = await api.get(`/starboards`);
        console.log('++++', data);
        setDatas(data);
    };

    const CommentsButton = () => {
        if (comments === '') {
            alert('댓글 내용을 입력해주세요');
            return;
        }
        setCommentsList((prevComments) => [...prevComments, comments]);
        setComments('');
    };

    const handleEditClick = () => {
        setIsEditing(true);
        setEditedItem({
            title: selectedItem.title,
            imageUrl: selectedItem.imageUrl,
            name: selectedItem.name,
            major: selectedItem.major,
            date: selectedItem.date,
            contents: selectedItem.contents,
        });
    };

    const handleDeleteClick = async () => {
        const confirmDelete = window.confirm('정말 삭제하시겠습니까?');

        if (confirmDelete) {
            try {
                await api.delete(`/starboards/${selectedItem.id}`);
                console.log('삭제됨');

                // `updateStarBoardData` 호출 후에 페이지 이동
                updateStarBoardData(null);
                Navigate('/starhub');
            } catch (error) {
                console.error('데이터 삭제 중 오류 발생:', error);
            }
        }
    };

    const handleSaveClick = async () => {
        setIsEditing(false);

        // 입력 필드에서 최신 변경 사항을 반영하여 editedItem 상태를 업데이트합니다.
        setEditedItem((prevEditedItem) => ({
            ...prevEditedItem,
            imageUrl: editedItem.imageUrl,
            name: editedItem.name,
            major: editedItem.major,
            date: editedItem.date,
            contents: editedItem.contents,
        }));

        try {
            const response = await api.put(`/starboards/${selectedItem.id}`, editedItem);
            console.log('저장됨:', response.data);

            // 수정된 내용을 commentsList에 반영합니다.
            setCommentsList((prevComments) => {
                const updatedComments = prevComments.map((comments) =>
                    comments === selectedItem.contents ? editedItem.contents : comments
                );
                return updatedComments;
            });

            // StHub 컴포넌트의 상태를 업데이트합니다.
            props.updateStarBoardData(editedItem);

            Navigate('/starhub');
            // `updateStarBoardData` 호출 후에 페이지 이동
        } catch (error) {
            console.error('데이터 저장 중 오류 발생:', error);
        }
    };

    useEffect(() => {
        starHubValue();
    }, []);

    return (
        <>
            <StarDetailMainForm>
                <StarDetailHeader>
                    <StarDetailHeaderH1>스타허브 상세페이지</StarDetailHeaderH1>
                    <StarDetailHeaderH2>자세한 내용을 확인해보세요.</StarDetailHeaderH2>
                    <StarDetailHeaderLine />
                </StarDetailHeader>
                <StContainer>
                    {selectedItem && (
                        <StBox w="1200px" h="600px" mr="120px">
                            <CenterText>{selectedItem.title}</CenterText>
                            <StContainer>
                                <StBox w="900px" h="400px">
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            id="imageInput" // 추가: id를 할당합니다.
                                            value={editedItem.imageUrl}
                                            onChange={(e) => setEditedItem({ ...editedItem, imageUrl: e.target.value })}
                                        />
                                    ) : (
                                        <img src={selectedItem.imageUrl} alt="썸네일 이미지" />
                                    )}
                                </StBox>
                                <div>
                                    <h1>작성자</h1>
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            value={editedItem.name}
                                            // value2={editedItem.major}
                                            onChange={(e) => setEditedItem({ ...editedItem, name: e.target.value })}
                                        />
                                    ) : (
                                        <h2>{selectedItem.name}</h2>
                                    )}
                                    <h1>날짜</h1>
                                    {isEditing ? (
                                        <input
                                            type="date"
                                            value={editedItem.date}
                                            onChange={(e) => setEditedItem({ ...editedItem, date: e.target.value })}
                                        />
                                    ) : (
                                        <h2>{selectedItem.date}</h2>
                                    )}
                                    <h1>내용</h1>
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            value={editedItem.contents}
                                            onChange={(e) => setEditedItem({ ...editedItem, contents: e.target.value })}
                                        />
                                    ) : (
                                        <h2>{selectedItem.contents}</h2>
                                    )}
                                </div>
                            </StContainer>
                            <StContainer>
                                <StBtn w="200px" onClick={() => Navigate('/starhub')}>
                                    스타허브
                                </StBtn>
                                {isEditing ? (
                                    <StBtn w="200px" onClick={handleSaveClick}>
                                        저장하기
                                    </StBtn>
                                ) : (
                                    <StBtn w="200px" onClick={handleEditClick}>
                                        수정하기
                                    </StBtn>
                                )}
                                <StBtn w="200px" onClick={handleDeleteClick}>
                                    삭제하기
                                </StBtn>
                            </StContainer>
                            <div>
                                <h1>댓글</h1>
                                <StTextarea
                                    type="text"
                                    value={comments}
                                    onChange={(e) => {
                                        setComments(e.target.value);
                                    }}
                                    placeholder="댓글 내용을 입력해주세요(1000자 이내)"
                                ></StTextarea>
                                <StContainer>
                                    <StBtn w="200px" onClick={CommentsButton}>
                                        댓글달기
                                    </StBtn>
                                </StContainer>
                                {/* Display comments */}
                                <div>
                                    {commentsList.map((comments, index) => (
                                        <CommentDiv key={index}>
                                            {comments}
                                            <StBtn w="50px">🖍</StBtn>
                                            <StBtn w="50px">✂</StBtn>
                                        </CommentDiv>
                                    ))}
                                </div>
                            </div>
                        </StBox>
                    )}
                </StContainer>
            </StarDetailMainForm>
        </>
    );
}

// MainForm
const StarDetailMainForm = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin-top: 20px;
`;
// StarBoardHeader
const StarDetailHeader = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;

    width: 100%;
`;
const StarDetailHeaderH1 = styled.div`
    font-size: 30px;
    font-weight: 700;
`;
const StarDetailHeaderH2 = styled.div`
    font-size: 14px;
    font-weight: 500;
`;
const StarDetailHeaderLine = styled.hr`
    width: 100%;
    border: none;
    border-top: 1px solid rgba(0, 0, 0, 0.1);

    margin-top: 30px;
`;
const DetailImageBox = styled.img`
    margin-bottom: 10px;
    width: 230px;
    height: 200px;
    border-radius: 7px;
`;

export const StDiv1 = styled.div`
    height: 70vh;
    display: flex;
    flex-direction: column;
    gap: 30px;
    -webkit-box-pack: center;
    justify-content: center;
    padding: 0px 30px 0px 30px;
`;
const CommentDiv = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    margin-right: 25px;
`;
const CenterText = styled.div`
    text-align: center;
    font-size: 30px;
    font-weight: 700;
`;
export const StBtn = styled.button`
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
    width: ${(props) => props.w};
    border-radius: 8px;
    background-color: black;
    cursor: pointer;
    font-size: 16px;
    font-weight: 600;
`;
export const StContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
`;
export const StBox = styled.div`
    color: black;
    font-size: 10px;
    width: ${(props) => props.w};
    height: ${(props) => props.h};
    padding: 20px;
    border: none;
    border-radius: 10px;
    margin-right: ${(props) => props.mr};
`;
export const ImageBox = styled.img`
    margin: 20px;
    width: 200px;
    height: 200px;
    border-radius: 10px;
`;
export const StTextarea = styled.textarea`
    box-sizing: border-box;
    height: 129px;
    width: 100%;
    outline: none;
    border-radius: 8px;
    padding: 10px 0px 0px 12px;
    font-size: 14px;
    border: 1px solid rgb(168, 168, 168);
`;

export default StHubDetail;

// starhub 상세페이지
