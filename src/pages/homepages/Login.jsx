import React, { useState } from 'react';
import api from '../../api/api';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import Navbar from './Navbar';

function useInput(initialValue = '') {
    const [value, setValue] = useState(initialValue);

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    return [value, handleChange];
}

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useInput('');
    const [password, setPassword] = useInput('');

    const navigateToSignup = () => {
        navigate('/signup');
    };

    const loginButton = async () => {
        try {
            if (email === '' || password === '') {
                alert('아이디와 비밀번호를 입력해주세요');
                return;
            }

            const response = await api.post(`/login`, { email, password });
            Cookies.set('token', response.data.token);
            navigate('/starhub');
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
        <div
            style={{
                margin: '10px',
                marginTop: '100px',
            }}
        >
            <Navbar />
            <div>
                <h1>로그인</h1>
            </div>
            <div>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        loginButton();
                    }}
                >
                    <div>이메일</div>
                    <input type="text" value={email} onChange={setEmail} placeholder="이메일을 입력해주세요" />
                    <div>비밀번호</div>
                    <input
                        type="password"
                        value={password}
                        onChange={setPassword}
                        placeholder="비밀번호를 입력해주세요"
                    />
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignContent: 'center',
                        }}
                    >
                        <button>로그인</button>
                        <button onClick={navigateToSignup}>회원가입</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
