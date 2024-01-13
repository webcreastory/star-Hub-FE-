import React from 'react'
import { useNavigate } from 'react-router-dom'

function SignUp() {
  const Navigate = useNavigate()

  return (
    <div>SignUp
      <br />
      <button onClick={()=>{
        Navigate('/')
      }}>로그인</button>
    </div>
  )
}

export default SignUp
// 회원가입하기