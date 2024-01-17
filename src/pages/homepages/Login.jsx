import React, { useState, useEffect } from 'react';
import api from '../../api/api';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import styled from 'styled-components';



function useInput(initialValue = '') {
  const [value, setValue] = useState(initialValue);
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return [value, handleChange];
}

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useInput("");
  const [password, setPassword] = useInput("");

  const navigateToSignup = () => {
    navigate('/signup');
  };

  const loginButton = async () => {
    try {
      if (email === '' || password === '') {
        alert('아이디와 비밀번호를 입력해주세요');
        return;
      }
      const response = await api.post('/api/user/login', {
        email: email,
        password: password
      });

      Cookies.set('token', response.data.token);
      Cookies.set('userId', response.data.userId);

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

  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      navigate('/starhub');
    }
  }, []);

  return (
    <StarShareMainForm>
      <StarShareHeader>
        <StarShareHeaderH1>로그인</StarShareHeaderH1>
      </StarShareHeader>
      <StarShareHeaderLine />
      <div style={{ width: '60%' }}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            loginButton();
          }}
        >
          <div>이메일</div>
          <StyledInput
            type="text"
            value={email}
            onChange={setEmail}
            placeholder="이메일을 입력해주세요"
          />
          <div>비밀번호</div>
          <StyledInput
            type="password"
            value={password}
            onChange={setPassword}
            placeholder="비밀번호를 입력해주세요"
          />
          <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', alignContent: 'center' }}>
            <StyledButton primary type="submit">
              로그인
            </StyledButton>
            <StyledButton onClick={navigateToSignup}>회원가입</StyledButton>
          </div>
        </form>
      </div>
    </StarShareMainForm>
  );
}

export default Login;

const StarShareMainForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const StarShareHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 100%;
`;

const StarShareHeaderH1 = styled.div`
  font-size: 30px;
  font-weight: 700;
`;

const StarShareHeaderLine = styled.hr`
  width: 100%;
  border: none;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  margin-top: 30px;
`;

const StyledInput = styled.input`
  width: 100%;
  height: 30px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 13px;
  font-weight: 500;
`;

const StyledButton = styled.button`
  width: 150px;
  height: 50px;
  background-color: ${(props) => (props.primary ? 'black' : 'white')};
  color: ${(props) => (props.primary ? 'white' : 'black')};
  border: 2px solid black;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 500;
  margin-top: 20px;
  cursor: pointer;
`;
