import React from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
  const Navigate = useNavigate()

  return (
    <div>Login
      <br />
      <button onClick={()=>{
        Navigate('/signup')
      }}>가입하기</button>
    </div>
  )
}

export default Login
// 로그인 페이지