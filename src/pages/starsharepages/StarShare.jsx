import { getLinkPreview, getPreviewFromContent } from "link-preview-js";
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { ModalPotal } from './Potal'
import StShrModal from './StShrModal'
import { getDatas, getLikeDatas } from '../../api/auth'
import { useQuery, useQueryClient } from 'react-query'
import { useNavigate } from 'react-router-dom'
import api from '../../api/api'
import axios from "axios";
import { useHover } from "./hooks/useInput";
import {
  StarShareMainForm,
  StarShareHeader,
  StarShareHeaderH1,
  StarShareHeaderH2,
  StarShareHeaderLine,
  StarShareHeaderButton,
  StarShareContentsBox,
  StarShareContentsBoxImg,
  StarShareContentsBoxImg2,
  StarShareContentsBoxtext,
  StarShareContentsBoxtextH1,
  StarShareContentsBoxtextH2,
  GoodAdd,

} from "./styles/ShareStyle";


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



  // const a = async() => {
  //   const respone = await axios.get('http://3.37.123.243:8080/api/starshare')
  //   return console.log(respone)
  // }
  // useEffect(()=>{
  //   a()
  // },[])

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
                onClick={() => { }}
              >
                <StarShareContentsBoxImg onClick={() => { hendlerDetailPage(item.id) }}>
                  <StarShareContentsBoxImg2 />
                </StarShareContentsBoxImg>

                <StarShareContentsBoxtext>
                  <StarShareContentsBoxtextH2
                    onClick={() => { }}
                  >
                    {`${item.name}(${item.major})`}
                  </StarShareContentsBoxtextH2>
                  <StarShareContentsBoxtextH1
                    onClick={() => { }}
                  >{item.title}
                  </StarShareContentsBoxtextH1>
                </StarShareContentsBoxtext>
                <GoodAdd
                  onClick={() => { }}
                >
                  <div>👍</div>
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


