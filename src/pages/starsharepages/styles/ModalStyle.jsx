import styled from "styled-components";

// starshare maodal

export const StarShareModalBack = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(221, 221, 221, 0.8);
`

export const StarShareModalForm = styled.div`
  position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`
export const StarShareModalContents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 500px;
  padding: 30px;
  background-color: white;
`

// inner box

export const StarShareModalHeader = styled.div`
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 20px;
`

export const StarShareModalInputBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 80%;
  margin-bottom: 10px;

`

export const StarShareModalInputBoxText = styled.div`
  margin-right: auto;
  margin-bottom: 5px;
`

export const StarShareModalInput = styled.input`
  width: 100%;
  height: 30px;
  border: 1px solid gray;
  border-radius: 10px;
`

export const StarShareModalInput2 = styled.textarea`
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

export const StarShareModalButton = styled.button`
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