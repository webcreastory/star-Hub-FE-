import api from '../../api/api';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

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
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,15}$/;
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
      const response = await api.post(`/signup`, { name, password, email, major });
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
    <div style={{ margin: '10px', marginTop: '100px' }}>
      <Navbar />
      <div>
        <h1>회원가입</h1>
      </div>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            signUpButton();
          }}
        >
          <div>반을 선택해주세요</div>
          <select value={major} onChange={setMajor}>
            <option value="" disabled>반을 선택해주세요</option>
            <option value="R반">R반</option>
            <option value="S반">S반</option>
            <option value="N반">N반</option>
          </select>
          <div>이름</div>
          <input
            type='text'
            value={name}
            onChange={setName}
            placeholder='이름을 입력해주세요'
          />
          <div>E-mail</div>
          <input
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
          <input
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

          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center' }}>
            <button>회원가입</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
