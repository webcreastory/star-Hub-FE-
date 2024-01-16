import React, { useState, useEffect } from 'react';
import api from '../../api/api';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import Navbar from './Navbar';
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
      const response = await api.post(`/api/users/login`, { email, password }, {withcredentials : true});
      
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
    <StarShareMainForm style={{
      margin: '10px',
      marginTop: '100px'
    }}>
      <Navbar />
      <StarShareHeader>
        <StarShareHeaderH1>로그인</StarShareHeaderH1>
      </StarShareHeader>
      <StarShareHeaderLine />
      <div style={{
        width : '60%'
      }}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            loginButton();
          }}
        >
          <div 
          style={{
            marginTop :'10px',
            marginBottom :'10px',
            fontSize : ' 18px',
            fontWeight : 500

          }}>이메일</div>
          <input
            type="text"
            value={email}
            onChange={setEmail}
            placeholder='이메일을 입력해주세요'
            style={{
              width :'100%',
              height : '30px',
              border :'1px solid rgba(0, 0, 0, 0.1)',
              borderRadius :'5px'

            }}
          />
          <div style={{
            marginTop :'10px',
            marginBottom :'10px',
            fontSize : ' 18px',
            fontWeight : 500}}>
              비밀번호</div>
          <input
            type="password"
            value={password}
            onChange={setPassword}
            placeholder='비밀번호를 입력해주세요'
            style={{
              width :'100%',
              height : '30px',
              border :'1px solid rgba(0, 0, 0, 0.1)',
              borderRadius :'5px'

            }}
          />
          <div
            style={{
              display: 'flex',
              gap :'10px',
              marginTop :'20px',
              justifyContent: 'center',
              alignContent: 'center',
            }}
          >
            <button style={{
              width: '150px',
              height: '50px',
              backgroundColor:'black',
              color : 'white',
              border: '2px solid black',
              borderRadius: '10px',
              fontsize: '14px',
              fontweight: 500,
            }}>로그인</button>
            <button onClick={navigateToSignup}
            style={{
              width: '150px',
              height: '50px',
              backgroundColor:'white',
              color : 'black',
              border: '2px solid black',
              borderRadius: '10px',
              fontsize: '14px',
              fontweight: 500,
            }}
            >회원가입</button>
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