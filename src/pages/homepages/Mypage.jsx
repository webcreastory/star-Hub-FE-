import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';
import api from '../../api/api';
import styled from 'styled-components';



function Mypage() {
  const navigate = useNavigate();
  const userId = Cookies.get("userId");
  const [userProfile, setUserProfile] = useState({ boardList: [], shareList: [] });

  useEffect(() => {
    getList();
  }, []);

  const getList = async () => {
    try {
      const response = await api.get(`/api/mypages/${userId}`);
      setUserProfile(response.data);
      
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
    <>
      <StarShareMainForm>
        <StarShareHeader>
          <StarShareHeaderH1>마이페이지</StarShareHeaderH1>
          <StarShareHeaderH2>내 프로필과 내 스타들을 확인 할 수 있습니다.</StarShareHeaderH2>
          <StarShareHeaderLine />
          <div>
            <StarShareHeaderButton onClick={() => { navigate('/myprofile') }}>
              프로필 수정하기
            </StarShareHeaderButton>
          </div>
        </StarShareHeader>
      </StarShareMainForm>
      <div style={{
        margin: '10px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}>
        <h1 style={{
          marginLeft: '50px',
          marginBottom: '5px'
        }}>내 스타보드</h1>
        <div style={{
          width: '90%',
          display: 'flex',
          flexDirection: 'column',
          overflowY: 'auto',
          maxHeight: '400px'
        }}>
          {userProfile.boardList.map((board) => (
            <Link key={board.boardId} to={`/sthubdetail/${board.boardId}`}
              style={{ color: 'black', textDecoration: 'none' }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                border: '1px solid rgba(0, 0, 0, 0.1)',
                borderRadius: '10px',
                margin: '10px',
                padding: '10px',
                height: "100px",
              }}>
                <div style={{
                  padding: '10px'
                }}>
                  <StarShareContentsBoxImg>
                    <img src={board.imageUrl} alt={'그림 없음!'} style={{
                      width: "80px",
                      height: "80px",
                    }} />
                  </StarShareContentsBoxImg>
                </div>
                <div>
                  <p style={{ margin: '0' }}>{board.name}({board.major})</p>
                  <h2 style={{ margin: '0' }}>{board.title}</h2>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div style={{
        margin: '10px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}>
        <br />
        <br />
        <h1 style={{
          marginLeft: '50px',
          marginBottom: '5px'
        }}>내 스타쉐어</h1>
        <div style={{
          width: '90%',
          display: 'flex',
          flexDirection: 'column',
          overflowY: 'auto',
          maxHeight: '400px'
        }}>
          {userProfile.shareList.map((share) => (
            <Link key={share.shareId} to={`/stshrdetail/${share.shareId}`}
              style={{ color: 'black', textDecoration: 'none' }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                border: '1px solid rgba(0, 0, 0, 0.1)',
                borderRadius: '10px',
                margin: '10px',
                padding: '10px',
                height: "100px",
              }}>
                <div style={{
                  padding: '10px'
                }}>
                  <StarShareContentsBoxImg>
                    <img src={share.url} alt={'그림없음!'} style={{
                      width: "50px",
                      height: "50px",
                    }} />
                  </StarShareContentsBoxImg>
                </div>
                <div>
                  <p style={{ margin: '0' }}>{share.name}({share.major})</p>
                  <h2 style={{ margin: '0' }}>{share.title}</h2>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}

export default Mypage;


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

const StarShareHeaderH2 = styled.div`
  font-size: 14px;
  font-weight: 500;
`;

const StarShareHeaderLine = styled.hr`
  width: 100%;
  border: none;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  margin-top: 30px;
`;

const StarShareHeaderButton = styled.button`
  width: 150px;
  height: 50px;
  background-color: white;
  border: 2px solid rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
`;

const StarShareContentsBoxImg = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-right: 10px;
  width: 100px;
  height: 100px;
  background-color: rgba(255, 255, 255, 0.2);
`;