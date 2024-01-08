import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'

export const MenuContainer = styled.div`
background-color: rgba(0,0,0,0.05);
left: 0;
position: fixed;
height: 100vh;
width: 12rem;
border-right: 2px solid rgba(0,0,0,0.1);
`

export const MenuWrapper = styled.div`
display: flex;
flex-direction: column;
gap: 1rem;
padding: 20px 0;

`

export const MenuLogo = styled.h1`
font-size: 1rem;
letter-spacing: .3rem;
text-align: center;
left: 1rem;
top: .3rem;
justify-content: center;
padding-right: 89%;
position: relative;
`
export const MenuLine = styled.div`
position: relative;
min-width: 100vw;
border: solid 1px rgba(0,0,0,0.2);
`

export const MenuCards = styled.div`
display: grid;
gap: 1rem;
flex-direction: row;
padding: 0 .6rem;
`

export const CardWrapper = styled.div`
display: flex;
flex-direction: row;
border: 2px solid rgba(0,0,0,0.2);
border-radius: 5px;
min-width: 3rem;
max-width: 100%;
min-height: 3.3rem;
justify-content: left;
align-items: center;
padding: 0 10px;
cursor: pointer;

&:hover {
    color: #000;
    background-color: #d7e0eb;
}
`

export const CardImage = styled.img`
max-width: 100%;
`
export const CardText = styled.h3`
font-size: .8rem;
font-weight: 500;
`

export const Dropdown = styled.select`
border: none;
cursor: pointer;
background-color: transparent;
color: #000;
outline: none;
width: 20px;
`

export const HorizantalMenu = styled.div`
display: fixed;
width: 100vw;
padding: 0 2rem;
`

export const RightMenu = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
position: relative;

@media screen and (max-width: 768px) {
    right: 70px;
}

@media screen and (min-width: 332px) {
    right: 120px;
}
`

export const Links = styled(LinkR)`
position: relative;
text-decoration: none;
font-size: 12px;
color: dark-green;
align-text: center;
align-self: center;
display: flex;
flex-direction: row
`

export const ButtonL = styled(LinkR)`
position: absolute;
z-index: 22;
margin: 0;
top: 35rem;
left: 2.3rem;
background-color: white;
border-radius: 5px;
border: 2px solid grey;
padding: 1rem 2rem;
color: #111;
text-decoration: none;
font-size: .7rem;

&:hover {
    background-color: #000;
    color: #fff
}
`