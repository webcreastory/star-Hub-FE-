import React from 'react'
import { useMutation,useQueryClient } from 'react-query'
import { postDatas } from '../../api/auth'
import styled from 'styled-components'
import useInput from './hooks/useInput'


function StShrModal({ handlerModalState }) {

  const queryClient = useQueryClient();
  const mutation = useMutation(postDatas, {
    onSuccess: () => {
      queryClient.invalidateQueries("getDatas")
    }
  })

  const [title, InputTitleValue] = useInput()
  const [name, InputNameValue] = useInput()
  const [contents, InputContentsValue] = useInput()
  const [url, InputUrlValue] = useInput()

  const addStarShare = () => {
    const newStarShare = {
      title,
      name: "최우식",
      contents,
      url,
      major: "R반"
    }
    mutation.mutate(newStarShare)
    handlerModalState()
    
  }

  return (
    <>
      <StarShareModalBack onClick={handlerModalState}>
      </StarShareModalBack>

      <StarShareModalForm>
        <StarShareModalContents>
          <StarShareModalHeader>
            스타쉐어 추가하기
          </StarShareModalHeader>

          <StarShareModalInputBox>
            <StarShareModalInputBoxText>
              제목
            </StarShareModalInputBoxText>
            <StarShareModalInput
              type="text"
              placeholder='제목을 입력해주세요'
              value={title}
              onChange={InputTitleValue}
            />
          </StarShareModalInputBox>

          <StarShareModalInputBox>
            <StarShareModalInputBoxText>
              내용
            </StarShareModalInputBoxText>
            <StarShareModalInput2
              type="text"
              placeholder='내용을 입력해주세요'
              value={contents}
              onChange={InputContentsValue}
            />
          </StarShareModalInputBox>

          <StarShareModalInputBox>
            <StarShareModalInputBoxText>
              링크
            </StarShareModalInputBoxText>
            <StarShareModalInput
              type="text"
              placeholder='링크를 입력해주세요'
              value={url}
              onChange={InputUrlValue}
            />
          </StarShareModalInputBox>

          <StarShareModalButton onClick={addStarShare}>
            저장하기
          </StarShareModalButton>
        </StarShareModalContents>
      </StarShareModalForm>
    </>
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
  position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`
const StarShareModalContents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

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
  border: 1px solid gray;
  border-radius: 10px;
`

const StarShareModalInput2 = styled.textarea`
  margin-top: 5px;
  width: 100%;
  height: 200px;
  max-width: 100%;
  min-width: 100%;
  min-height: 200px;

  max-height: 200px;
  border: 1px solid gray;
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