import api from '../../api/api';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import styled from 'styled-components';


function useInput(initialValue = '') {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return [value, handleChange];
}


function SignUp() {
  const [email, setEmail] = useInput('');
  const [password, setPassword] = useInput('');
  const [name, setName] = useInput('');
  const [major, setMajor] = useInput('');
  const navigate = useNavigate();
  const [emailValid, setEmailValid] = useState(null);
  const [passwordValid, setPasswordValid] = useState(null);

  useEffect(() => {
    if (email !== '') {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      setEmailValid(emailRegex.test(email));
    } else {
      setEmailValid(null);
    }

    if (password !== '') {
      const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/;
      setPasswordValid(passwordRegex.test(password));
    } else {
      setPasswordValid(null);
    }
  }, [email, password]);

  const navigateToLogin = () => {
    navigate('/');
  };

  const signUpButton = async () => {
    if (email === '' || password === '' || name === '' || major === '') {
      alert("빈칸을 모두 작성해주세요");
      return;
    }

    if (!emailValid || !passwordValid) {
      alert("입력한 정보를 다시 확인해주세요");
      return;
    }

    try {
      const response = await api.post(`/api/user/signup`,{ 
        name : name,
        email : email,
        password : password,
        major : major
        });
        
     
      if (response.status === 201) {
        alert("회원가입에 성공했습니다.");
        navigateToLogin();
      }
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
    <StarShareMainForm>
      <Navbar />
      <StarShareHeader>
        <StarShareHeaderH1>회원가입</StarShareHeaderH1>
      </StarShareHeader>
      <StarShareHeaderLine />
      <div style={{ width: '60%' }}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            signUpButton();
          }}
        >
          <div>
            <div>반을 선택해주세요</div>
            <StyledSelect value={major} onChange={setMajor}>
              <option value="" disabled>반을 선택해주세요</option>
              <option value="R반">R반</option>
              <option value="S반">S반</option>
              <option value="N반">N반</option>
            </StyledSelect>
            <div>이름</div>
            <StyledInput
              type='text'
              value={name}
              onChange={setName}
              placeholder='이름을 입력해주세요'
            />
            <div>E-mail</div>
            <StyledInput
              type='text'
              value={email}
              onChange={setEmail}
              placeholder='아이디로 사용할 E-mail을 입력해주세요'
            />
            {emailValid === null ? null : (
              emailValid ? (
                <span style={{ color: 'green' }}>사용 가능합니다</span>
              ) : (
                <span style={{ color: 'red' }}>다시 입력해주세요</span>
              )
            )}
            <div>Password</div>
            <StyledInput
              type='password'
              value={password}
              onChange={setPassword}
              placeholder='비밀번호는 대문자/소문자/특수문자를 포함하여 8~15자 이내로 작성해주세요'
            />
            {passwordValid === null ? null : (
              passwordValid ? (
                <span style={{ color: 'green' }}>사용 가능합니다</span>
              ) : (
                <span style={{ color: 'red' }}>비밀번호는 대문자/소문자/특수문자를 포함하여 8~15자 이내로 작성해주세요</span>
              )
            )}
            <div style={{ display: 'flex', gap: '10px', marginTop: '20px', justifyContent: 'center', alignContent: 'center' }}>
              <StyledButton primary type="submit">
                회원가입
              </StyledButton>
            </div>
          </div>
        </form>
      </div>
    </StarShareMainForm>
  );
}

export default SignUp;


// 스타일드 컴포넌트를 사용하여 스타일 정의
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

const StyledSelect = styled.select`
  width: 100%;
  height: 30px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 13px;
  font-weight: 500;
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