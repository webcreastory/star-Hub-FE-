import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import useInput from './hooks/useInput'
import { useNavigate, useParams } from 'react-router-dom'
import { putDatas, getDatas, deleteDatas } from '../../api/auth'
import { StarShareContentsBoxImg2 } from './StarShare'

function StShrDetail() {

  // 서버 데이터 불러오기
  const { isLoading, isError, data } = useQuery("getDatas", getDatas);

  //nav
  const navigate = useNavigate();


  // 인풋 벨류 핸들
  const [title, InputTitleValue, setTitleValue] = useInput()
  const [contents, InputContentsValue, setContentsValue] = useInput()
  const [url, InputUrlValue, setUrlValue] = useInput()

  // id 맞는 값 불러오기
  const params = useParams();

  const foundData = data && data.find((item) => {
    console.log(item.id)
    console.log(data)
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
          name: "최우식",
          contents,
          url,
          major: "R반",
          title,
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
          <StarShareHeaderH1 onClick = {()=> {
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
              <StarShareContentsBoxImg2/>
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
  cursor: pointer;
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


// StarShareContents

const StarShareContentsBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  margin-top: 30px;

  width: 70%;
  min-width: 800px;
  height: 500px;
  padding: 15px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`
const StarShareContentsBox2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;

  border: 1px solid rgba(0, 0, 0, 0.1);
`

const StarShareContentsBoxImg = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  
  min-width:400px;
  height: 400px;
`


// text

const StarShareContentsBoxtext = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width:100%;
  min-width:350px;
  margin: 0px 15px ;

`

// inner box

const StarShareModalInputBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
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
// 버튼 박스

const StarShareContentsBox3 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`

const StarShareContentsBoxtext2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  width: 150px;
  height: 50px;
  margin-top: 30px;

  background-color: white;
  border-radius: 10px;

  font-size: 21px;
  font-weight: 600;
  margin-right: 30px;
`


const StarShareModalButton = styled.button`
  width: 150px;
  height: 50px;
  margin-top: 30px;

  background-color: white;
  border: 2px solid rgba(0, 0, 0, 0.5);
  border-radius: 10px;

  font-size: 14px;
  font-weight: 500;
  margin-right: 10px;
  margin-left: auto;

  cursor: pointer;
`
const StarShareModalButton2 = styled.button`
  width: 150px;
  height: 50px;
  margin-top: 30px;

  background-color: white;
  border: 2px solid rgba(0, 0, 0, 0.5);
  border-radius: 10px;

  font-size: 14px;
  font-weight: 500;
  margin-right: 10px;

  cursor: pointer;
`