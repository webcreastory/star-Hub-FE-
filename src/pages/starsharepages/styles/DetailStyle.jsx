import styled from "styled-components";

export const StarShareMainForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 20px;
`
// StarShareHeader
export const StarShareHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  width: 100%;

`
export const StarShareHeaderH1 = styled.div`
  font-size: 30px;
  font-weight: 700;
  cursor: pointer;
`

export const StarShareHeaderH2 = styled.div`
  margin-top: 10px;
  font-size: 14px;
  font-weight: 500;
`
export const StarShareHeaderLine = styled.hr`
  width: 100%;
  border: none;
  border-top: 1px solid rgba(0, 0, 0, 0.1);

  margin-top: 30px;
`

// header button


// StarShareContents

export const StarShareContentsBox = styled.div`
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
export const StarShareContentsBox2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;

  border: 1px solid rgba(0, 0, 0, 0.1);
`

export const StarShareContentsBoxImg = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  
  min-width:400px;
  height: 400px;
`

export const StarShareContentsBoxImg2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  
  width: 100%;
  height: 100%;
  border-radius: 13px;
  
  background-image: url('/img/르탄가방.png');

  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`


// text

export const StarShareContentsBoxtext = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width:100%;
  min-width:350px;
  margin: 0px 15px ;

`

// inner box

export const StarShareModalInputBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
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
// 버튼 박스

export const StarShareContentsBox3 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`

export const StarShareContentsBoxtext2 = styled.div`
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


export const StarShareModalButton = styled.button`
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
export const StarShareModalButton2 = styled.button`
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