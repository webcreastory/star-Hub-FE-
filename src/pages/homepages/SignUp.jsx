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
      const response = await api.post(`/api/users/signup`, { name, password, email, major });
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
    <StarShareMainForm style={{ margin: '10px', marginTop: '100px' }}>
      <Navbar />
      <StarShareHeader>
        <StarShareHeaderH1>회원가입</StarShareHeaderH1>
      </StarShareHeader>
      <StarShareHeaderLine />
      <div style={{
        width : '60%'
      }}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            signUpButton();
          }}
        >
          <div>
          <div
          style={{
            marginTop :'10px',
            marginBottom :'10px',
            fontSize : ' 18px',
            fontWeight : 500

          }}
          >반을 선택해주세요</div>
          <select value={major} onChange={setMajor}
          style={{
            width :'100%',
            height : '30px',
            border :'1px solid rgba(0, 0, 0, 0.1)',
            borderRadius :'5px'

          }}
          >
            <option value="" disabled>반을 선택해주세요</option>
            <option value="R반">R반</option>
            <option value="S반">S반</option>
            <option value="N반">N반</option>
          </select>
          <div 
          style={{
            marginTop :'10px',
            marginBottom :'10px',
            fontSize : ' 18px',
            fontWeight : 500

          }}
          >이름</div>
          <input
            type='text'
            value={name}
            onChange={setName}
            placeholder='이름을 입력해주세요'
            style={{
              width :'100%',
              height : '30px',
              border :'1px solid rgba(0, 0, 0, 0.1)',
              borderRadius :'5px'

            }}
          />
          <div
          style={{
            marginTop :'10px',
            marginBottom :'10px',
            fontSize : ' 18px',
            fontWeight : 500

          }}
          >E-mail</div>
          <input
            type='text'
            value={email}
            onChange={setEmail}
            placeholder='아이디로 사용할 E-mail을 입력해주세요'
            style={{
              width :'100%',
              height : '30px',
              border :'1px solid rgba(0, 0, 0, 0.1)',
              borderRadius :'5px'

            }}
          />
          {emailValid === null ? null : (
            emailValid ? (
              <span style={{ color: 'green' }}>사용 가능합니다</span>
            ) : (
              <span style={{ color: 'red' }}>다시 입력해주세요</span>
            )
          )}
          <div
          style={{
            marginTop :'10px',
            marginBottom :'10px',
            fontSize : ' 18px',
            fontWeight : 500

          }}
          >Password</div>
          <input
            type='password'
            value={password}
            onChange={setPassword}
            placeholder='비밀번호는 대문자/소문자/특수문자를 포함하여 8~15자 이내로 작성해주세요'
            style={{
              width :'100%',
              height : '30px',
              border :'1px solid rgba(0, 0, 0, 0.1)',
              borderRadius :'5px'

            }}
          />
          {passwordValid === null ? null : (
            passwordValid ? (
              <span style={{ color: 'green' }}>사용 가능합니다</span>
            ) : (
              <span style={{ color: 'red' }}>비밀번호는 대문자/소문자/특수문자를 포함하여 8~15자 이내로 작성해주세요</span>
            )
          )}

          <div 
          style={{
            display: 'flex',
            gap :'10px',
            marginTop :'20px',
            justifyContent: 'center',
            alignContent: 'center',
          }}>
            <button
            style={{
              width: '150px',
              height: '50px',
              backgroundColor:'white',
              color : 'black',
              border: '2px solid black',
              borderRadius: '10px',
              fontsize: '14px',
              fontweight: 500
            }}
            >회원가입</button>
          </div>
          </div>
          
        </form>
      </div>
    </StarShareMainForm>
  );
}

export default SignUp;







const StarShareMainForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 20px;
`
// StarShareHeader
const StarShareHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  width: 100%;

`
const StarShareHeaderH1 = styled.div`
  font-size: 30px;
  font-weight: 700;
`

const StarShareHeaderH2 = styled.div`
  font-size: 14px;
  font-weight: 500;
`
const StarShareHeaderLine = styled.hr`
  width: 100%;
  border: none;
  border-top: 1px solid rgba(0, 0, 0, 0.1);

  margin-top: 30px;
`

// header button

const StarShareHeaderButton = styled.button`
  width: 150px;
  height: 50px;
  background-color: white;
  border: 2px solid rgba(0, 0, 0, 0.5);
  border-radius: 10px;

  font-size: 14px;
  font-weight: 500;

  cursor: pointer;
`

// StarShareContents

const StarShareContentsBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  margin-top: 30px;

  width: 70%;
  height: 100px;
  padding: 15px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`

const StarShareContentsBoxImg = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  
  margin-right: 10px;
  width: 100px;
  height: 100px;
  background-color: rgba(0, 0, 0, 0.2);
`

const StarShareContentsBoxtext = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`

const StarShareContentsBoxtextH1 = styled.div`
  margin-top: 10px;
  font-size: 21px;
  font-weight: 700;
`
const StarShareContentsBoxtextH2 = styled.div`
  font-size: 14px;
  font-weight: 500;
`