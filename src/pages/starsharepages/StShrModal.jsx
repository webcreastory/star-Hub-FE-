import React from 'react'
import styled from 'styled-components'

function StShrModal({handlerModalState}) {
  return (
    <StarShareModalBack>
      <StarShareModalForm>
        <StarShareModalHeader>
          스타쉐어 추가하기
        </StarShareModalHeader>
        
        <StarShareModalInputBox>
          <StarShareModalInputBoxText>
          제목
          </StarShareModalInputBoxText>
          <StarShareModalInput/>
        </StarShareModalInputBox>
        
        <StarShareModalInputBox>
          <StarShareModalInputBoxText>
          작성자
          </StarShareModalInputBoxText>
          <StarShareModalInput/>
        </StarShareModalInputBox>
        
        <StarShareModalInputBox>
          <StarShareModalInputBoxText>
          내용
          </StarShareModalInputBoxText>
          <StarShareModalInput2/>
        </StarShareModalInputBox>

        <StarShareModalInputBox>
          <StarShareModalInputBoxText>
          링크
          </StarShareModalInputBoxText>
          <StarShareModalInput/>
        </StarShareModalInputBox>
        
        <StarShareModalButton onClick = {handlerModalState}>
          저장하기
        </StarShareModalButton>

      </StarShareModalForm>
    </StarShareModalBack>
  )
}

export default StShrModal

// starshare maodal

const StarShareModalBack = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(221, 221, 221, 0.8);
`

const StarShareModalForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 500px;
  padding: 30px;
  background-color: white;
`

// inner box

const StarShareModalHeader = styled.div`
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 20px;
`

const StarShareModalInputBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 80%;
  margin-bottom: 10px;

`

const StarShareModalInputBoxText = styled.div`
  margin-right: auto;
  margin-bottom: 5px;
`

const StarShareModalInput = styled.input`
  width: 100%;
  height: 30px;

  border-radius: 10px;
`

const StarShareModalInput2 = styled.input`
  margin-top: 5px;
  width: 100%;
  height: 200px;

  border-radius: 10px;
`

const StarShareModalButton = styled.button`
  width: 150px;
  height: 50px;
  margin-top: 20px;

  background-color: white;
  border: 2px solid rgba(0, 0, 0, 0.5);
  border-radius: 10px;

  font-size: 14px;
  font-weight: 500;

  cursor: pointer;
`