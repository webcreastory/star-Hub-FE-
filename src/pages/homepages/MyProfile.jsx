/*  useEffect(() => {
    const testProfileData = {
      name: '테스트 유저',
      email: 'test@example.com',
      major: 'R반',
      password: '******', 
    };

    setProfileData(testProfileData);
  }, []);

*/

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import api from '../../api/api';




function MyProfile() {
  const [profileData, setProfileData] = useState({
    name: '',
    email: '',
    major: '',
  });
  

  const [isEditingMajor, setIsEditingMajor] = useState(false);
  const [isEditingName, setIsEditingName] = useState(false);

  const getProfile = async () => {
      
    try {
      const response = await api.get(`/api/user/profile`);
      
      setProfileData({
        name: response.data.name,
        email: response.data.email,
        major: response.data.major
      })
      
      
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

  
   useEffect(() => {
    getProfile();
  }, []);
  


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
      
      await api.put(`/api/user/profile`, {
        name: profileData.name,
        major: profileData.major
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
    <StarShareMainForm >
      
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

const StarShareHeaderLine = styled.hr`
  width: 100%;
  border: none;
  border-top: 1px solid rgba(0, 0, 0, 0.1);

  margin-top: 30px;
`
