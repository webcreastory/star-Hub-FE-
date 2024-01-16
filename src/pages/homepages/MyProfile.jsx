/* 서버연결시 살릴부분
  useEffect(() => {
    const getProfile = async () => {
      try {
        const response = await api.get(`api/users/profile`);

        setProfileData({
          name: response.data.name,
          email: response.data.email,
          major: response.data.major,
        });
      } catch (error) {
        if (error.response) {
          const statusCode = error.response.status;
          const errorMessage = error.response.data.message;
          if (statusCode === 404) {
            alert(errorMessage);
          }
        }
      }
    };

    getProfile();
  }, []);
*/

import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import api from '../../api/api';
import styled from 'styled-components';

function MyProfile() {
  const [profileData, setProfileData] = useState({
    name: '',
    email: '',
    major: '',
  });

  const [isEditingMajor, setIsEditingMajor] = useState(false);
  const [isEditingName, setIsEditingName] = useState(false);

  // 여기서 부터 서버연결 하면 맨위 주석 처리된 코드랑 교체 
  useEffect(() => {
    const testProfileData = {
      name: '테스트 유저',
      email: 'test@example.com',
      major: 'R반',
      password: '******', 
    };

    setProfileData(testProfileData);
  }, []);
// 여기까지 서버연결 하면 맨위 주석 처리된 코드랑 교체 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData({
      ...profileData,
      [name]: value,
    });
  };

  const handleEditMajor = () => {
    setIsEditingMajor(true);
  };

  const handleEditName = () => {
    setIsEditingName(true);
  };

  const handleSaveProfile = async () => {
    setIsEditingMajor(false);
    setIsEditingName(false);

    try {
      
      await api.put(`api/users/profile`, {
        name: profileData.name,
        major: profileData.major,
      });

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
    <StarShareMainForm style={{
      margin: '10px',
      marginTop: '100px'
    }}>
      <Navbar />
      <StarShareHeader>
            <StarShareHeaderH1>마이 프로필</StarShareHeaderH1>
          </StarShareHeader>

          <StarShareHeaderLine />
          <div style={{
        width : '60%'
      }}>
          <div 
          style={{
            marginTop :'10px',
            marginBottom :'10px',
        }}>
            <p style={{
                  fontSize : ' 18px',
                  fontWeight : 500
            }}>반</p>
            <div style={{
              display:'flex',
              gap :'10px'
            }}>
            {isEditingMajor ? (
              <>
                <select
                name='major'
                  value={profileData.major}
                  onChange={handleChange}
                  style={{
                    width :'100%',
                    height : '30px',
                    border :'1px solid rgba(0, 0, 0, 0.1)',
                    borderRadius :'5px',
                    }}
                >
                  <option value="R반">R반</option>
                  <option value="S반">S반</option>
                  <option value="N반">N반</option>
                </select>
                <button onClick={handleSaveProfile}
                style={{
                  width :' 70px',
                  backgroundColor:'white',
                  color : 'black',  
                  border: '2px solid black',
                  borderRadius: '10px',
                }}
                >저장</button>
              </>
            ) : (
              <>
                <span style={{
                    width :'100%',
                    display:'block',
                    height : '30px',
                    border :'1px solid rgba(0, 0, 0, 0.1)',
                    borderRadius :'5px',
                          
                  }}>{profileData.major}</span>
                <button onClick={handleEditMajor} 
                style={{
                  width :' 70px',
                  backgroundColor:'black',
                  color : 'white',
                  border: '2px solid black',
                  borderRadius: '10px',
                }}
                >변경</button>
              </>
            )}
            </div>
            
          </div>
          <div>
            <p 
            style={{
              fontSize : ' 18px',
              fontWeight : 500
            }}
            >이름</p>
            <div style={{
              display:'flex',
              gap :'10px'
            }}>
            {isEditingName ? (
              <>
                <input
                  type="text"
                  name="name"
                  value={profileData.name}
                  onChange={handleChange}
                  style={{
                    width :'100%',
                    height : '30px',
                    border :'1px solid rgba(0, 0, 0, 0.1)',
                    borderRadius :'5px',
                    }}
                />
                <button onClick={handleSaveProfile}
                style={{
                  width :' 70px',
                  backgroundColor:'white',
                  color : 'black',  
                  border: '2px solid black',
                  borderRadius: '10px',
                }}
                >저장</button>
              </>
            ) : (
              <>
                <span style={{
                    width :'100%',
                    height : '30px',
                    border :'1px solid rgba(0, 0, 0, 0.1)',
                    borderRadius :'5px',
                    }}
                    >{profileData.name}</span>
                <button onClick={handleEditName}
                style={{
                  width :' 70px',
                  backgroundColor:'black',
                  color : 'white',
                  border: '2px solid black',
                  borderRadius: '10px',
                }}
                >변경</button>
              </>
            )}
            </div>
            
          </div>
          <div>
            <p>이메일</p>
            <input
              type="email"
              name="email"
              value={profileData.email}
              style={{
                width :'100%',
                height : '30px',
                border :'1px solid rgba(0, 0, 0, 0.1)',
                borderRadius :'5px',
                }}
              readOnly
            />
          </div>
          <div>
            <p>비밀번호</p>
            <input
              type="password"
              name="password"
              value="******"
              style={{
                width :'100%',
                height : '30px',
                border :'1px solid rgba(0, 0, 0, 0.1)',
                borderRadius :'5px',
                }}
              readOnly
            />
            
          </div>
          
          </div>
        
      
    </StarShareMainForm>
  );
}

export default MyProfile;


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