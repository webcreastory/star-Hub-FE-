import React from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const Navigate = useNavigate();

    return (
        <div>
            Login
            <br />
            <button
                onClick={() => {
                    Navigate('/starboards');
                }}
            >
                스타보드
            </button>
        </div>
    );
}

export default Login;
// 로그인 페이지
