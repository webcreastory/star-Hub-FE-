import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import { useEffect } from 'react';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';
import api from '../../api/api';
import styled from 'styled-components'



function Mypage() {

  const navigate = useNavigate();
  
  const userId = Cookies.get("userId")
  
  useEffect(()=>{
    getList()
  }, [])

  const getList = async () => {
    try {
      const response = await api.get(`mypage/${userId}`);
        
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

const me = {
  usrtId:1,
  boardList: [
    {
       "boardId" : 1,
        "date" : "2024-01-15",
        "name" : "인재현", 
        "major" : "R반",
        "title" : "리액트를 배워봅시다 1",
        "contents" : "리액트를 배워봅시다 1",
        "imageUrl" : "https://private-user-images.githubusercontent.com/39895634/296419976-c2fcce3e-2dd7-4c90-983e-fd730088ee70.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDUxNDA4NzIsIm5iZiI6MTcwNTE0MDU3MiwicGF0aCI6Ii8zOTg5NTYzNC8yOTY0MTk5NzYtYzJmY2NlM2UtMmRkNy00YzkwLTk4M2UtZmQ3MzAwODhlZTcwLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAxMTMlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMTEzVDEwMDkzMlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWQ3MzdmNzkyM2I3ZDQ4OTcwNGY0MWNiODY3YWUxMGY3ZDdiMTJkYjUzMDk1NDMwYjg5NGJiMGQ5YmVhNmJmZjcmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.e1nP-E_5dlok1BVW8spL_V-b0NYptbZAYAB0saOWR_8"
    },
    {
      "boardId" : 2,
       "date" : "2024-01-15",
       "name" : "인재현", 
       "major" : "R반",
       "title" : "리액트를 배워봅시다 2",
       "contents" : "리액트를 배워봅시다 2",
       "imageUrl" : "https://private-user-images.githubusercontent.com/39895634/296419976-c2fcce3e-2dd7-4c90-983e-fd730088ee70.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDUxNDA4NzIsIm5iZiI6MTcwNTE0MDU3MiwicGF0aCI6Ii8zOTg5NTYzNC8yOTY0MTk5NzYtYzJmY2NlM2UtMmRkNy00YzkwLTk4M2UtZmQ3MzAwODhlZTcwLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAxMTMlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMTEzVDEwMDkzMlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWQ3MzdmNzkyM2I3ZDQ4OTcwNGY0MWNiODY3YWUxMGY3ZDdiMTJkYjUzMDk1NDMwYjg5NGJiMGQ5YmVhNmJmZjcmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.e1nP-E_5dlok1BVW8spL_V-b0NYptbZAYAB0saOWR_8"
   },
   {
    "boardId" : 3,
     "date" : "2024-01-15",
     "name" : "인재현", 
     "major" : "R반",
     "title" : "리액트를 배워봅시다 3",
     "contents" : "리액트를 배워봅시다 3",
     "imageUrl" : "https://private-user-images.githubusercontent.com/39895634/296419976-c2fcce3e-2dd7-4c90-983e-fd730088ee70.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDUxNDA4NzIsIm5iZiI6MTcwNTE0MDU3MiwicGF0aCI6Ii8zOTg5NTYzNC8yOTY0MTk5NzYtYzJmY2NlM2UtMmRkNy00YzkwLTk4M2UtZmQ3MzAwODhlZTcwLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAxMTMlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMTEzVDEwMDkzMlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWQ3MzdmNzkyM2I3ZDQ4OTcwNGY0MWNiODY3YWUxMGY3ZDdiMTJkYjUzMDk1NDMwYjg5NGJiMGQ5YmVhNmJmZjcmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.e1nP-E_5dlok1BVW8spL_V-b0NYptbZAYAB0saOWR_8"
 },
 {
  "boardId" : 4,
   "date" : "2024-01-15",
   "name" : "인재현", 
   "major" : "R반",
   "title" : "리액트를 배워봅시다 4",
   "contents" : "리액트를 배워봅시다 4",
   "imageUrl" : "https://private-user-images.githubusercontent.com/39895634/296419976-c2fcce3e-2dd7-4c90-983e-fd730088ee70.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDUxNDA4NzIsIm5iZiI6MTcwNTE0MDU3MiwicGF0aCI6Ii8zOTg5NTYzNC8yOTY0MTk5NzYtYzJmY2NlM2UtMmRkNy00YzkwLTk4M2UtZmQ3MzAwODhlZTcwLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAxMTMlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMTEzVDEwMDkzMlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWQ3MzdmNzkyM2I3ZDQ4OTcwNGY0MWNiODY3YWUxMGY3ZDdiMTJkYjUzMDk1NDMwYjg5NGJiMGQ5YmVhNmJmZjcmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.e1nP-E_5dlok1BVW8spL_V-b0NYptbZAYAB0saOWR_8"
}
],

shareList: [
    {
        "shareId" : 1,
        "name" : "인재현",  
        "major" : "R반",
        "title" : "리액트를 공유해봅시다 1",
        "contents" : "리액트를 공유해봅시다 1",
        "url" : "www.naver.com"
    },
    {
      "shareId" : 2,
      "name" : "인재현",  
      "major" : "R반",
      "title" : "리액트를 공유해봅시다 2",
      "contents" : "리액트를 공유해봅시다 2",
      "url" : "www.naver.com"
  },
    {
      "shareId" : 3,
      "name" : "인재현",  
      "major" : "R반",
      "title" : "리액트를 공유해봅시다 3",
      "contents" : "리액트를 공유해봅시다 3",
      "url" : "www.naver.com"
  },
  {
    "shareId" : 4,
    "name" : "인재현",  
    "major" : "R반",
    "title" : "리액트를 공유해봅시다 4",
    "contents" : "리액트를 공유해봅시다 4",
    "url" : "www.naver.com"
},
     ]
}

   
  return (
    <>
    <StarShareMainForm>
    <Navbar />
    <StarShareHeader style={{
      margin: '10px',
      marginTop: '100px'
    }}>
      
        <StarShareHeaderH1>마이페이지</StarShareHeaderH1>
        <StarShareHeaderH2>내 프로필과 내 스타들을 확인 할 수 있습니다. </StarShareHeaderH2>
        <StarShareHeaderLine />
        <div>
        <StarShareHeaderButton onClick={()=>{navigate('/myprofile')}}>
          프로필 수정하기
          </StarShareHeaderButton>
        </div>
        </StarShareHeader>
        </StarShareMainForm>
    <div style={{
      margin:'10px',
      display : 'flex',
      flexDirection:'column',
      justifyContent :'center'
    }}>
      <h1 style={{
        marginLeft:'50px',
        marginBottom : '5px'
      }}>내 스타보드</h1>
    <div style={{
      width: '90%',
      display :'flex',
      flexDirection:'column',
      
    overflowY: 'auto', 
    maxHeight: '400px'
  }}>
     {me.boardList.map((board) => (
            <Link key={board.boardId} to={`/sthubdetail/`}
            style={{ color: 'black', textDecoration: 'none' }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                border: '1px solid rgba(0, 0, 0, 0.1)',
                borderRadius :'10px',
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
      margin:'10px',
      display : 'flex',
      flexDirection:'column',
      justifyContent :'center'
    }}>
      <br />
      <br />
      <h1 style={{
        marginLeft:'50px',
        marginBottom : '5px'
      }}>내 스타쉐어</h1>
      <div style={{
      width: '90%',
      display :'flex',
      flexDirection:'column',
      
    overflowY: 'auto', 
    maxHeight: '400px'
  }}>
    {me.shareList.map((share) => (
      <Link key={share.shareId} to={`/stshrdetail/`}
      style={{ color: 'black', textDecoration: 'none' }}
      >
            <div  style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                border: '1px solid rgba(0, 0, 0, 0.1)',
                borderRadius :'10px',
                margin: '10px',
                padding: '10px',
                height: "100px",
                
              }}>
              <div style={{
                padding:'10px'
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
export default Mypage





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
  background-color: rgba(255, 255, 255, 0.2);
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