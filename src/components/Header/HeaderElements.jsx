import styled from 'styled-components'


export const HeaderContainer = styled.div`
position: relative;
background-color: rgba(0,0,0,0.05);
top: 0;
width: 100%;
padding: 12px 10px;
max-width: 100%;
`

export const HeaderWrapper = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
justify-content: center;
padding-left: 5rem;
padding-right: 3rem;
grid-gap: 70%;
`

export const HeaderLogo = styled.div`
max-width: 200px;
font-size: 16px;
padding-top: 5px;
font-weight: 500;
letter-spacing: 3px;
`
export const HeaderButton = styled.button`
width: 90px;
border-radius: 5px;
font-size: 12px;
background-color: #000;
color: #fff;
text-align: center;
cursor: pointer;
padding: 10px 0 10px 0;
border: none;

&:hover {
    color: #000;
    background-color: #fff;
}
`