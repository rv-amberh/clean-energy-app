import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom'


export const HeroContainer = styled.div`
width: 100%;
position: relative;
height: 600px;
bottom: 4rem;
`

export const HeroWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: relative;
bottom: 11rem
`

export const HeroLogo = styled.img`
position: relative;
top: 7rem;
margin-bottom: 1rem;
animation: fadeIn 5s;
-webkit-animation: fadeIn 5s;
  -moz-animation: fadeIn 5s;
  -o-animation: fadeIn 5s;
  -ms-animation: fadeIn 5s;

  @keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
  
  @-moz-keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
  
  @-webkit-keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
  
  @-o-keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
  
  @-ms-keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
`



export const HeroButtonUsername = styled.input`
width: 260px;
height: 30px;
border-radius: 5px;
background-color: rgba(0,0,0,0.06);
text-align: left;
margin: -2rem 0 10px 0;
resize: none;
border: none;
text-align: left;
padding: 12px;
z-index: 100
`

export const HeroButtonPassword = styled.input`
width: 260px;
height: 30px;
border-radius: 5px;
background-color: rgba(0,0,0,0.06);
text-align: left;
margin: 20px 0;
resize: none;
border: none;
text-align: left;
padding: 12px;
z-index: 100

`

export const HeroCheckbox = styled.input`
display: flex;
flex-direction: column;
margin: 20px 0;
z-index: 100

`

export const HeroButtonLogIn = styled(LinkR)`
background-color: #000;
color: #fff;
border: 1px white solid;
width: 250px;
padding: 15px 0;
margin-top: 25px;
border-radius: 5px;
text-align: center;
text-decoration: none;

&:hover {
  background-color: #fff;
  color: #000;
  border: solid 1px #111;
}
`

export const ForgotPassword = styled.h3`
font-size: 12px;
margin-top: 20px;
color: rgba(0,0,0,0.5);

&:hover {
    color: red;
    cursor: pointer;
}
`

export const CheckboxText = styled.h2`
color: rgba(0,0,0,0.5);
font-size: 10px;
margin-left: 6px
`
export const CheckboxWrapper = styled.div`
display: flex;
flex-direction: row;
align-items: center;
margin-right: 170px;
`