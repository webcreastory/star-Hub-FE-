import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function StarHub() {
    const Navigate = useNavigate();
    const location = useLocation();

    // StarBoard에서 전달된 값들을 받기
    const inputValue = location.state?.inputValue || {};

    
    return (
        <div>
            <div>
                StarHub 페이지
                <br />
                <button
                    onClick={() => {
                        Navigate('/');
                    }}
                >
                    로그인으로 이동
                </button>
            </div>

            <div>
                <br />
                <h1>스타허브</h1>
                <h4>다른 사람들의 스타보드를 확인해 보세요.</h4>
                <button
                    onClick={() => {
                        Navigate('/starboard');
                    }}
                >
                    스타보드 작성하기
                </button>
            </div>
            <div>
                <div>
                    <img src={inputValue.image} alt="썸네일 이미지" />
                    <h4>이름: {inputValue.name}</h4>
                    <h4>제목: {inputValue.title}</h4>
                    <h4>날짜: {inputValue.date}</h4>
                </div>
            </div>
        </div>
    );
}

export default StarHub;
