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
    const [editingCommentIndex, setEditingCommentIndex] = useState(null);
    const [editedItem, setEditedItem] = useState({
        title: '',
        imageUrl: '',
        name: '',
        // major: '',
        date: '',
        contents: '',
        comments: '',
    });
    // StarBoard에서 전달된 값들을 받기
    const inputValue = location.state?.inputValue || {};
    const selectedItem = location.state?.selectedItem || null;

    const starHubValue = async () => {
        // const { data } = await api.get(`api/starboards/${boardId}`);
        const { data } = await api.get(`/starboards`);
        setDatas(data);
    };
    // 저장하기 버튼 함수
    const handleSaveClick = async () => {
        setIsEditing(false);
        // 입력 필드에서 최신 변경 사항을 반영하여 editedItem 상태를 업데이트합니다.
        setEditedItem((prevEditedItem) => ({
            ...prevEditedItem,
            imageUrl: editedItem.imageUrl,
            name: editedItem.name,
            title: editedItem.title,
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
    // 수정하기 버튼 함수
    const handleEditClick = () => {
        setIsEditing(true);
        setEditedItem({
            title: selectedItem.title,
            imageUrl: selectedItem.imageUrl,
            name: selectedItem.name,
            date: selectedItem.date,
            contents: selectedItem.contents,
        });
    };
    // 수정 함수(patch) 수업 내용 참고
    // const handleEditClick = async => {
    //     axios.patch('http://localhost:4000/starhub/${editedItem}', {
    //         title: contents,
    //     });
    //     setEditedItem(
    //         editedItem.map((item) => {
    //         if (item.id == editedItem) {
    //             return {...item, title:contents}
    //         } eles {
    //             return item;
    //         }
    //         })
    //     )
    // }
    // 삭제하기 버튼 함수
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
    // 댓글 저장하기 버튼 함수
    const CommentsButton = () => {
        if (comments === '') {
            alert('댓글 내용을 입력해주세요');
            return;
        }
        if (editingCommentIndex !== null) {
            // 기존 댓글 수정
        }

        // const handleSaveClick = async () => {
        //     setIsEditing(false);

        //     // 입력 필드에서 최신 변경 사항을 반영하여 editedItem 상태를 업데이트합니다.
        //     setEditedItem((prevEditedItem) => ({
        //         ...prevEditedItem,
        //         imageUrl: editedItem.imageUrl,
        //         date: editedItem.date,
        //         contents: editedItem.contents,
        //         title:editedItem.title,
        //     }));

        //     try {
        //         const response = await api.put(`/starboards/${selectedItem.id}`, editedItem);
        //         console.log('저장됨:', response.data);

        //         // 수정된 내용을 commentsList에 반영합니다.
        //         setCommentsList((prevComments) => {
        //             const updatedComments = [...prevComments];
        //             updatedComments[editingCommentIndex] = comments;
        //             return updatedComments;
        //         });
        //         setEditingCommentIndex(null); // 수정 상태 초기화
        //     } else {
        //         // 새로운 댓글 추가
        //         setCommentsList((prevComments) => [...prevComments, comments]);
        //     }
        //     setComments('');
        // };
        // 댓글 수정하기 버튼 함수
        const handleEditComment = (index) => {
            setComments(commentsList[index]); // 입력 필드에 댓글 설정
            setEditingCommentIndex(index);
        };
        // 댓글 삭제하기 버튼 함수
        const handleDeleteComment = (index) => {
            const confirmDelete = window.confirm('댓글을 정말 삭제하시겠습니까?');
            if (confirmDelete) {
                setCommentsList((prevComments) => {
                    const updatedComments = [...prevComments];
                    updatedComments.splice(index, 1); // 해당 인덱스의 댓글 제거
                    return updatedComments;
                });
                setEditingCommentIndex(null); // 수정 상태 초기화
            }
        };

        useEffect(() => {
            starHubValue();
        }, []);

        return (
            <>
                <StarHubMainForm>
                    <StarHubHeader>
                        <StarHubHeaderH1>스타허브 상세페이지</StarHubHeaderH1>
                        <StarHubHeaderH2>스타허브 내용을 자세히 확인해보세요.</StarHubHeaderH2>
                        <StarHubHeaderLine />
                    </StarHubHeader>

                    {selectedItem && (
                        <StBox w="800px" h="600px">
                            <h1>제목</h1>
                            {isEditing ? (
                                <StInput
                                    type="text"
                                    value={editedItem.title}
                                    onChange={(e) => setEditedItem({ ...editedItem, title: e.target.value })}
                                />
                            ) : (
                                <ShdHeaderH1>{selectedItem.title}</ShdHeaderH1>
                            )}
                            <StContainer>
                                <StBox w="450px" h="250px">
                                    {isEditing ? (
                                        <StInput
                                            type="text"
                                            id="imageInput" // 추가: id를 할당합니다.
                                            value={editedItem.imageUrl}
                                            onChange={(e) => setEditedItem({ ...editedItem, imageUrl: e.target.value })}
                                        />
                                    ) : (
                                        <ImageBox src={selectedItem.imageUrl} alt="썸네일 이미지" />
                                    )}
                                </StBox>

                                <div>
                                    <h1>작성자</h1>
                                    {isEditing ? (
                                        <StInput
                                            type="text"
                                            value={editedItem.name}
                                            onChange={(e) => setEditedItem({ ...editedItem, name: e.target.value })}
                                        />
                                    ) : (
                                        <h2>{selectedItem.name}</h2>
                                    )}
                                    <h1>날짜</h1>
                                    {isEditing ? (
                                        <StInput
                                            type="date"
                                            value={editedItem.date}
                                            onChange={(e) => setEditedItem({ ...editedItem, date: e.target.value })}
                                        />
                                    ) : (
                                        <h2>{selectedItem.date}</h2>
                                    )}
                                    <h1>내용</h1>
                                    {isEditing ? (
                                        <StTextarea
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
                                    {/* <StBtn w="200px" onClick={()=>handleDeleteClick(item.id)}> */}
                                    삭제하기
                                </StBtn>
                            </StContainer>

                            <div>
                                <h1>댓글</h1>
                                <StContainer>
                                    <StTextarea
                                        type="text"
                                        value={comments}
                                        onChange={(e) => {
                                            setComments(e.target.value);
                                        }}
                                        placeholder="댓글 내용을 입력해주세요(500자 이내)"
                                    ></StTextarea>
                                    <StContainer>
                                        <StBtn w="200px" onClick={CommentsButton}>
                                            댓글저장
                                        </StBtn>
                                    </StContainer>
                                </StContainer>
                                {/* Display comments */}
                                <CommentDiv fd="column">
                                    {commentsList.map((comments, index) => (
                                        <CommentDiv key={index}>
                                            {comments}
                                            <StBtn w="50px" ml="20px" onClick={() => handleEditComment(index)}>
                                                🖍
                                            </StBtn>
                                            <StBtn w="50px" onClick={() => handleDeleteComment(index)}>
                                                ✂
                                            </StBtn>
                                        </CommentDiv>
                                    ))}
                                </CommentDiv>
                            </div>
                        </StBox>
                    )}
                </StarHubMainForm>
            </>
        );
    };
}
export default StHubDetail;

// MainForm
const StarHubMainForm = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin-top: 20px;
    margin-left: 20px;
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
const ShdHeaderH1 = styled.div`
    font-size: 30px;
    font-weight: 700;
`;
const StInput = styled.input`
    box-sizing: border-box;
    height: 35px;
    width: 100%;
    outline: none;
    border-radius: 8px;
    padding: 0px 12px;
    font-size: 14px;
    border: 1px solid rgb(168, 168, 168);
`;
const CommentDiv = styled.div`
    display: flex;
    align-items: center;
    flex-direction: ${(props) => props.fd};
    justify-content: center;
    margin-right: auto;
    font-size: 15px;
    border: ${(props) => props.bd};
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
    height: 45px;
    width: ${(props) => props.w};
    border-radius: 8px;
    background-color: black;
    cursor: pointer;
    font-size: 16px;
    font-weight: 600;
    margin-top: 10px;
    margin-left: ${(props) => props.ml};
`;
const StContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
`;
const StBox = styled.div`
    color: black;
    font-size: 10px;
    width: ${(props) => props.w};
    height: ${(props) => props.h};
    padding: 20px;
`;
const ImageBox = styled.img`
    margin: 20px;
    width: 200px;
    height: 200px;
    border-radius: 10px;
`;
const StTextarea = styled.textarea`
    box-sizing: border-box;
    height: 45px;
    width: 90%;
    outline: none;
    border-radius: 8px;
    padding: 10px 0px 0px 10px;
    font-size: 14px;
    border: 1px solid rgb(168, 168, 168);
    margin-right: 5px;
    margin-top: 10px;
`;
