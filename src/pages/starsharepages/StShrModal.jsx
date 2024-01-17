import React from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { postDatas } from '../../api/auth'
import styled from 'styled-components'
import { useInput } from './hooks/useInput'
import {
  StarShareModalBack,
  StarShareModalForm,
  StarShareModalContents,
  StarShareModalHeader,
  StarShareModalInputBox,
  StarShareModalInputBoxText,
  StarShareModalInput,
  StarShareModalInput2,
  StarShareModalButton,
} from './styles/ModalStyle'


function StShrModal({ handlerModalState }) {

  const queryClient = useQueryClient();
  const mutation = useMutation(postDatas, {
    onSuccess: () => {
      queryClient.invalidateQueries("getDatas")
    }
  })

  const [title, InputTitleValue] = useInput()
  const [contents, InputContentsValue] = useInput()
  const [url, InputUrlValue] = useInput()

  const addStarShare = () => {
    const newStarShare = {
      title,
      contents,
      url,
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
