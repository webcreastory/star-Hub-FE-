// styled-components
import styled from 'styled-components'


// FormButton
export const FormButton = styled.button`
    margin: 5px;
    width: 100px;
    height: 40px;
    border: none;
    border-bottom: 3px solid #b4b4b4;
    border-right: 3px solid #b4b4b4;
    border-radius: 10px;
    background: linear-gradient( 140deg , rgba(0, 0, 0, 0.1), rgba(255, 255, 255, 0));
    box-shadow:3px 3px 5px #5a5a5a;

    color: #FF5050;
    font-weight: 900;

    cursor: pointer;
    &:active {    
    position: relative;
    left:2px;
    top:2px;
    box-shadow: none;
    }
`

export const ButtonBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`


// FormCard
export const FormCard = styled.div`
    margin: 5px;
    width: 230px;
    height: 300px;
    border-radius: 10px;

    cursor: pointer;
    &:active {    
    position: relative;
    left:2px;
    top:2px;
    box-shadow: none;}
    /* background-color: red; */

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    border-bottom: 5px solid #b4b4b4;
    border-right: 5px solid #b4b4b4;
    box-shadow:5px 5px 10px #5a5a5a;
`

export const FormCardImg = styled.div`

    background: 
    linear-gradient( 140deg , rgba(0, 0, 0, 0.1),
    rgba(255, 255, 255, 0)), 
    url(${props => props.imgUrl});
    
    width: 100%;
    height: 600px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
`

export const FormCardImgIn = styled.div`

    width: 230px;
    padding-bottom: 100%;
    position: relative;
`
export const FormCardImgInimg = styled.img`
    position: absolute;
    width: 100%;
    height: 100%;
    padding-bottom: 100%;
    object-fit: cover;
`

//
export const FormCardText = styled.div`
    margin-top: 30px;
    margin-bottom: 10px;
    height: 50px;
    width: 100%;
    
    /* background-color: gray; */
`
export const FormCardTextName = styled.p`
    font-weight: 700;
    margin: 3px 10px;
    font-size: 14px;
`
export const FormCardTextTitle = styled.p`
    margin: 10px 10px;
    font-size: 18px;
    font-weight: 700;
    color: #FF5050;
`

