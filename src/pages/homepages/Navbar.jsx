import React from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

function Navbar() {

const navigate = useNavigate();

  const navigateToMain = () => {
    navigate('/');
  };

  const navigateToLogin = () => {
    navigate('/');
  };

  const navigateToMyPage = () => {
    navigate(`/mypage`);
  };

  const navigateToSignup = () => {
    navigate('/signup');
  };

  const navigateToStarHub = () => {
    navigate('/starhub');
  };

  const navigateToStarShare = () => {
    navigate('/starShare');
  };

  const logout = () => {
    Cookies.remove('token');
    navigate('/');
  };

  const isLoggedIn = !!Cookies.get('token');

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
    }}>
      <header style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: '1px solid black',
        backgroundColor :'white',
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          marginLeft: '10px'
        }}>
          <img
            src="https://private-user-images.githubusercontent.com/39895634/296419976-c2fcce3e-2dd7-4c90-983e-fd730088ee70.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDUxNDA4NzIsIm5iZiI6MTcwNTE0MDU3MiwicGF0aCI6Ii8zOTg5NTYzNC8yOTY0MTk5NzYtYzJmY2NlM2UtMmRkNy00YzkwLTk4M2UtZmQ3MzAwODhlZTcwLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAxMTMlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMTEzVDEwMDkzMlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWQ3MzdmNzkyM2I3ZDQ4OTcwNGY0MWNiODY3YWUxMGY3ZDdiMTJkYjUzMDk1NDMwYjg5NGJiMGQ5YmVhNmJmZjcmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.e1nP-E_5dlok1BVW8spL_V-b0NYptbZAYAB0saOWR_8"
            style={{
              width: '50px',
              height: '50px',
            }}
            alt="Home"
            onClick={navigateToMain}
          />
          <h1 style={{ marginLeft: '10px' }}>Welcome to STARBOARD</h1>
        </div>
        <div style={{
          display: 'flex',
          marginRight: '20px',
          gap: '10px'
        }}>
          {isLoggedIn ? (
            <>
              <a style={{ textDecoration: 'none', color: 'black', cursor: 'pointer' }} onClick={navigateToMyPage}>마이페이지</a>
              <a style={{ textDecoration: 'none', color: 'black', cursor: 'pointer' }} onClick={navigateToStarHub}>스타허브</a>
              <a style={{ textDecoration: 'none', color: 'black', cursor: 'pointer' }} onClick={navigateToStarShare}>스타쉐어</a>
              <a style={{ textDecoration: 'none', color: 'black', cursor: 'pointer' }} onClick={logout}>로그아웃</a>
            </>
          ) : (
            <>
              <a style={{ textDecoration: 'none', color: 'black', cursor: 'pointer' }} onClick={navigateToSignup}>회원가입</a>
              <a style={{ textDecoration: 'none', color: 'black', cursor: 'pointer' }} onClick={navigateToLogin}>로그인</a>
            </>
          )}
        </div>
      </header>
    </div>
  );
}

export default Navbar;
