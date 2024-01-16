import { getLinkPreview, getPreviewFromContent } from "link-preview-js";
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { ModalPotal } from './Potal'
import StShrModal from './StShrModal'
import { getDatas, getLikeDatas } from '../../api/auth'
import { useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'
import api from '../../api/api'
import axios from "axios";
import LinkPreview from "./test";


// modal state (potal component 인자 modal, index.html target)

function StarShare() {



  ///////////////////
  // const LikeQueryState = () => {
  //   const { data } = useQuery("getLikeDatas", getLikeDatas);
  //   const newRespone = {
  //     likeData: data,
  //   }
  //   return newRespone
  // }
  // console.log(LikeQueryState().likeData)

  const [imgUrl, setImgUlr] = useState('img/르탄가방.png')

  const { isLoading, isError, data } = useQuery("getDatas", getDatas);
  // console.log(data)


  const [modal, setModal] = useState(false)

  const handlerModalState = () => {
    modal === false ? setModal(true) : setModal(false)
  }

  const navigate = useNavigate()

  const hendlerDetailPage = (e) => {
    navigate(`/starshare/${e}`)
    // console.log(e)
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
            <StarShareHeaderButton onClick={handlerModalState}>
              스타쉐어 작성하기
            </StarShareHeaderButton>

            {/* <LinkPreview>
            </LinkPreview> */}

          </div>
          {modal && (
            <ModalPotal>
              <StShrModal handlerModalState={handlerModalState} />
            </ModalPotal>
          )}
        </StarShareHeader>

        {isLoading && <p> 로딩중입니다. </p>}
        {isError && <p> 에러! </p>}

        {data && (
          data.map((item) => {
            return (
              <StarShareContentsBox key={item.id}
                onClick={() => {
                  hendlerDetailPage(item.id)
                }}
              >
                <StarShareContentsBoxImg>
                  <StarShareContentsBoxImg2 imgUrl={imgUrl}/>
                </StarShareContentsBoxImg>

                <StarShareContentsBoxtext>
                  <StarShareContentsBoxtextH2>{`${item.name}(${item.major})`}</StarShareContentsBoxtextH2>
                  <StarShareContentsBoxtextH1>{item.title}</StarShareContentsBoxtextH1>
                </StarShareContentsBoxtext>
                <GoodAdd>
                  👍
                </GoodAdd>
              </StarShareContentsBox>
            )
          }))
        }
      </StarShareMainForm>

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

  cursor: pointer;
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

`
export const StarShareContentsBoxImg2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  
  width: 100%;
  height: 100%;
  background: 
  linear-gradient( 140deg,
    rgba(0, 0, 0, 0.1),
    rgba(255, 255, 255, 0)),
    url(${props => props.imgUrl});

  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
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

// 좋아요
const GoodAdd = styled.div`
  margin-left: auto;
  margin-bottom: auto;
`