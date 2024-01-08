import styled from 'styled-components'
import {Link} from  'react-router-dom'


export const DashBoard = styled.div`
width: 100%;
min-height: 100%;
max-width: 100%;
margin-top: 3rem;
margin-left: 12rem;
`


export const DashboardWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

export const DashboardContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 80%;
`


export const Title = styled.h2`
font-size: .7rem;
margin: 35px 0;

@media screen and (max-width: 768px) {
    font-size: .6rem;
}
`


export const Cards = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-gap: 17px;

@media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
}
`

export const CardHolder = styled.div`
display: flex;
flex-direction: column;
background-color: rgba(0,0,0,0.08);
justify-content: center;
align-items: center;
max-width: 200px;
max-height: 300px;
height: 150px;
border-radius: 10px;
padding: 29px 0;
min-height: 250px;

&:hover {
    background-color: #d7e0eb;
}

`

export const CardText = styled.h3`
font-size: .8rem;
padding: 0 30px;
text-align: center;
font-weight: 600;
margin-top: 40px;
color: rgba(0,0,0,0.8)
`
export const CardButton = styled(Link)`
width: 80px;
border-radius: 10px;
font-size: 10px;
padding: 6px 7px;
font-weight: 500;
background-color: rgba(0,0,0,0.08);
border: none;
color: #000;
margin-top: 40px;
cursor: pointer;
text-align: center;
text-decoration: none;

&:hover {
    background-color: #000;
    color: #fff
}
`
export const Links = styled(Link)`
position: relative;
`