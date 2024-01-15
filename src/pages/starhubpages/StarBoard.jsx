import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../api/api';

function StarBoard() {
    const Navigate = useNavigate();

    const [date, setDate] = useState();
    const [title, setTitle] = useState();
    const [name, setName] = useState();
    const [context, setContext] = useState();
    const [image, setImage] = useState();

    const AddButton = async () => {
        try {
            if (date === '' || title === '' || name === '' || context === '') {
                alert('내용을 입력해주세요');
                return;
            }
            const response = await api.post(`/starboards`, { date, title, name, context }); // image는 업로드 되는 이미지를 변수로
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
        <div>
            <div>
                <br />
                <h1>StarBoard-pages</h1>
                <button
                    onClick={() => {
                        Navigate('/starhub');
                    }}
                >
                    스타허브로 이동
                </button>
            </div>
            <div>
                <br />
                <h1>스타보드 추가하기</h1>
                <form onSubmit={(e) => { e.preventDefault(); AddButton(); }}>
                    <h3>날짜</h3>
                    <input
                        type="date"
                        value={date}
                        onChange={(e) => {
                            setDate(e.target.value);
                        }}
                        placeholder="날짜를 입력해주세요"
                    ></input>
                    <h3>제목</h3>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => {
                            setTitle(e.target.value);
                        }}
                        placeholder="제목을 입력해주세요(20자 이내)"
                    ></input>
                    <h3>작성자</h3>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                        placeholder="이름(반)"
                    ></input>
                    <h3>내용</h3>
                    <textarea
                        type="text"
                        value={context}
                        onChange={(e) => {
                            setContext(e.target.value);
                        }}
                        placeholder="학습 내용을 입력해주세요(1000자 이내)"
                    ></textarea>
                    <h3>이미지 업로드</h3>
                    <input
                        type="text"
                        value={image}
                        onChange={(e) => {
                            setImage(e.target.value);
                        }}
                        placeholder="썸네일로 사용할 이미지를 업로드해주세요"
                    ></input>
                    <div>
                        <br />
                        <button>저장</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default StarBoard;
// 스타보드
