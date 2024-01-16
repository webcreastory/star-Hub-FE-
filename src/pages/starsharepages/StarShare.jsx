import React, { useState } from 'react'
import styled from 'styled-components'
import { ModalPotal } from './Potal'
import StShrModal from './StShrModal'


// modal state (potal component 인자 modal, index.html target)
function StarShare() {
  const [modal, setModal] = useState(false)

  const handlerModalState = () => {
    modal === false ? setModal(true) : setModal(false)
  }

  return (
    <>
      <StarShareMainForm>
        <StarShareHeader>
          <StarShareHeaderH1>
            스타쉐어
          </StarShareHeaderH1>
          <StarShareHeaderH2>
            다양한 정보를 공유해 봅시다.
          </StarShareHeaderH2>
          <StarShareHeaderLine />
          <div>
            <StarShareHeaderButton onClick = {handlerModalState}>
              스타허브 작성하기
            </StarShareHeaderButton>
          </div>
        </StarShareHeader>
        
        <StarShareContentsBox>
          <StarShareContentsBoxImg>
            <span>링크 대표이미지</span>
          </StarShareContentsBoxImg>
          <StarShareContentsBoxtext>
            <StarShareContentsBoxtextH2>인재현(R반)</StarShareContentsBoxtextH2>
            <StarShareContentsBoxtextH1>변수명 만들어 주는 사이트 공유</StarShareContentsBoxtextH1>
          </StarShareContentsBoxtext>
        </StarShareContentsBox>
      </StarShareMainForm>
      {modal &&(
        <ModalPotal>
          <StShrModal handlerModalState ={handlerModalState}/>
        </ModalPotal>
      )

      }
    </>
  )
}

export default StarShare


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