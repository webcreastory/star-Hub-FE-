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
`

export const StarShareHeaderH2 = styled.div`
  margin-top: 10px;
  font-size: 14px;
  font-weight: 400;
`
export const StarShareHeaderLine = styled.hr`
  width: 100%;
  border: none;
  border-top: 1px solid rgba(0, 0, 0, 0.1);

  margin-top: 20px;
`

// header button

export const StarShareHeaderButton = styled.button`
  width: 150px;
  height: 50px;
  font-size: 14px;
  font-weight: 700;
  margin-top: 10px;

  cursor: pointer;

  background: linear-gradient( 140deg,
    #32A4FF,
    #0064FF
    );
  color: white;
  padding: 8px;
  border: none;
  border-radius: 10px;
  border-bottom: 10px solid #0064FF;
  border-right: 8px solid #0064FF;
  box-shadow: 5px 5px 5px #5c5c5c;

  &:active{
    position: relative;
    left: 3px;
    top: 3px;
    box-shadow: none;
    border: none;
  }
  
`

// StarShareContents

export const StarShareContentsBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  margin-top: 30px;

  width: 70%;
  min-height: 100px;
  padding: 15px;
  border: none;
  border-right: 10px solid #006400;
  border-bottom: 10px solid #006400;
  border-radius: 10px;
  
  background: #369F36;
  /* linear-gradient( 140deg,
    #FFC81E,
    #369F36
    ); */

  box-shadow: 5px 5px 6px #5c5c5c;
  cursor: pointer;

  &:active{
    position: relative;
    left: 4px;
    top: 5px;
    box-shadow: none;
    border: none;
    margin-bottom: 10px;
    
  }

`

export const StarShareContentsBoxImg = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  
  margin-right: 10px;
  width: 100px;
  height: 100px;
  min-width: 100px;

  background-color: #FFEB46;
  border-radius: 19px;
  border-bottom: 10px solid #FFC81E;
  border-right: 13px solid #FFC81E;
  box-shadow: 5px 5px 5px #006400;

  &:active{
    position: relative;
    left: 5px;
    top: 5px;
    box-shadow: none;
    border: none;
    margin-right: 23px;
    
  }

`
export const StarShareContentsBoxImg2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  
  width: 100%;
  height: 100%;
  border: 1px solid yellow;
  border-radius: 13px;
  
  background: 
  linear-gradient( 140deg,
    rgba(255, 255, 255, 1),
    rgba(255, 255, 255, 0)),
    url('/img/르탄가방.png');

  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`

export const StarShareContentsBoxtext = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  
`

export const StarShareContentsBoxtextH1 = styled.div`
  font-size: 21px;
  font-weight: 700;
  min-width: 80px;
  min-height: 30px;
  width: 60%;
  background: linear-gradient( 140deg,
    #FAFABE,
    #FFC81E
    );
  color: #006400;
  padding: 8px;
  border-radius: 10px;
  border-bottom: 10px solid #FFBE0A;
  border-right: 8px solid #FFBE0A;
  box-shadow: 5px 5px 5px #006400;


  &:active{
    position: relative;
    left: 3px;
    top: 3px;
    box-shadow: none;
    border: none;
    margin-top: 10px;
  }
`
export const StarShareContentsBoxtextH2 = styled.div`
  font-size: 14px;
  font-weight: 600;
  min-width: 80px;
  width: 30%;
  margin-bottom: 2px;
  color: #006400;

  padding: 8px;
  border-radius: 10px;
  background: linear-gradient( 140deg,
    #FAFABE,
    #FFC81E
    );

  border-bottom: 10px solid #FFBE0A;
  border-right: 9px solid #FFBE0A;
  box-shadow: 5px 5px 5px #006400;


  &:active{
    position: relative;
    left: 3px;
    top: 3px;
    box-shadow: none;
    border: none;
    margin-bottom: 12px;
  
    
  }

`

// 좋아요
export const GoodAdd = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-left: auto;
  margin-bottom: auto;
  min-width: 20px;
  min-height: 20px;
  

  padding: 8px 9px;
  border-radius: 10px;
  background: linear-gradient( 140deg,
    #FF7878,
    #FF0000
    );

  border-bottom: 8px solid #EB0000;
  border-right: 5px solid #EB0000;
  box-shadow: 5px 5px 5px #006400;
  

  &:active{
    position: relative;
    left: 1px;
    top: 3px;
    box-shadow: none;
    border: none;
    margin-left: 4px;
  }
`