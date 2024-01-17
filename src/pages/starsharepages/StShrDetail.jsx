import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { useInput } from './hooks/useInput'
import { useNavigate, useParams } from 'react-router-dom'
import { putDatas, getDatas, deleteDatas } from '../../api/auth'
import {
  StarShareMainForm,
  StarShareHeader,
  StarShareHeaderH1,
  StarShareHeaderH2,
  StarShareHeaderLine,
  StarShareContentsBox,
  StarShareContentsBox2,
  StarShareContentsBoxImg,
  StarShareContentsBoxImg2,
  StarShareContentsBoxtext,
  StarShareModalInputBox,
  StarShareModalInputBoxText,
  StarShareModalInput,
  StarShareModalInput2,
  StarShareContentsBox3,
  StarShareContentsBoxtext2,
  StarShareModalButton,
  StarShareModalButton2,
} from './styles/DetailStyle'

function StShrDetail() {

  // 서버 데이터 불러오기
  const { data } = useQuery("getDatas", getDatas);

  //nav
  const navigate = useNavigate();


  // 인풋 벨류 핸들
  const [title, InputTitleValue, setTitleValue] = useInput()
  const [contents, InputContentsValue, setContentsValue] = useInput()
  const [url, InputUrlValue, setUrlValue] = useInput()

  // id 맞는 값 불러오기
  const params = useParams();

  const foundData = data && data.find((item) => {
    // console.log(item.id)
    // console.log(data)
    console.log(params.id)
    return item.id === params.id
  })
  // console.log(`123123${foundData.id}`)


  //input 속성 변경


  const [isReadOnly, setisReadOnly] = useState(true);

  const titleRef = useRef()
  const contentsRef = useRef()
  const urlRef = useRef()
  // console.log(nameRef.current)

  const queryClient = useQueryClient();

  const putMutation = useMutation(putDatas, {
    onSuccess: () => {
      queryClient.invalidateQueries("getDatas")
    }
  })

  const handlerInputElements = () => {

    if (isReadOnly) {
      titleRef.current.removeAttribute("readonly");
      contentsRef.current.removeAttribute("readonly");
      urlRef.current.removeAttribute("readonly");
      setisReadOnly(false);
    } else {
      // 서버 데이터 교체해주기
      // 연결되면 id보낼 필요 없음

      const newStarShare = [
        {
          title,
          contents,
          url,
        },
        {
          id: foundData.id
        }
      ]

      putMutation.mutate(newStarShare)

      titleRef.current.setAttribute("readonly", "readonly");
      contentsRef.current.setAttribute("readonly", "readonly");
      urlRef.current.setAttribute("readonly", "readonly");
      setisReadOnly(true);
      // value reset
      // setNameValue("")
      // setContentsValue("")
      // setUrlValue("")
    }
  }
  //

  const deleteMutation = useMutation(deleteDatas, {
    onSuccess: () => {
      queryClient.invalidateQueries("getDatas")
    }
  })


  // 삭제
  const handlerDeleteStarShare = () => {
    deleteMutation.mutate(foundData.id)
    navigate("/StarShare")
  }


  return (
    <>
      <StarShareMainForm>
        <StarShareHeader>
          <StarShareHeaderH1 onClick={() => {
            navigate("/StarShare")

          }}>
            스타쉐어
          </StarShareHeaderH1>
          <StarShareHeaderH2>
            다양한 정보를 공유해 봅시다.
          </StarShareHeaderH2>
          <StarShareHeaderLine />
        </StarShareHeader>

        <StarShareContentsBox>
          <StarShareContentsBox2>
            <StarShareContentsBoxImg >
              <StarShareContentsBoxImg2 />
            </StarShareContentsBoxImg>

            <StarShareContentsBoxtext>

              <StarShareModalInputBox>
                <StarShareModalInputBoxText>
                </StarShareModalInputBoxText>
              </StarShareModalInputBox>

              <StarShareModalInputBox>
                <StarShareModalInputBoxText>
                  제목
                </StarShareModalInputBoxText>
                <StarShareModalInput
                  type="text"
                  readonly="readonly"
                  placeholder={foundData?.title}
                  value={title}
                  onChange={InputTitleValue}
                  ref={titleRef}
                />
              </StarShareModalInputBox>

              <StarShareModalInputBox>
                <StarShareModalInputBoxText>
                  내용
                </StarShareModalInputBoxText>
                <StarShareModalInput2
                  type="text"
                  readonly="readonly"
                  placeholder={foundData?.contents}
                  value={contents}
                  onChange={InputContentsValue}
                  ref={contentsRef}
                />
              </StarShareModalInputBox>

              <StarShareModalInputBox>
                <StarShareModalInputBoxText>
                  링크
                </StarShareModalInputBoxText>
                <StarShareModalInput
                  type="text"
                  readonly="readonly"
                  placeholder={foundData?.url}
                  value={url}
                  onChange={InputUrlValue}
                  ref={urlRef}
                />
              </StarShareModalInputBox>
            </StarShareContentsBoxtext>
          </StarShareContentsBox2>

          <StarShareContentsBox3>
            <StarShareContentsBoxtext>
              <StarShareContentsBoxtext2>
                {foundData ? `${foundData.name}(${foundData.major})` : ''}
              </StarShareContentsBoxtext2>
            </StarShareContentsBoxtext>

            <StarShareModalButton onClick={handlerInputElements}>
              {isReadOnly ? "수정하기" : "수정완료"}
            </StarShareModalButton>
            <StarShareModalButton2 onClick={handlerDeleteStarShare}>
              삭제하기
            </StarShareModalButton2>
          </StarShareContentsBox3>

        </StarShareContentsBox>
      </StarShareMainForm>
    </>
  )
}

export default StShrDetail
