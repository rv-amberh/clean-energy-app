import styled from 'styled-components'
import {Link} from 'react-router-dom'


export const ChartContainer = styled.div`
width: 100%;
min-height: 100vh;
display: flex;
justify-content: center;
align-items: center;
background-color: rgba(0,0,0,0.03);
color: #000;
border: solid 3px rbga(0,0,0,0.03);
padding: 0;
`
export const ButtonL = styled(Link)`
z-index: 22;
position: relative;
margin: 0;
top: 9rem;
left: 1.3rem;
background-color: transparent;
border-radius: 5px;
border: 2px solid grey;
padding: 8px 6px;
color: #111;
text-decoration: none;
font-size: .7rem;

&:hover {
    background-color: #000;
    color: #fff
}

@media (max-height: 600px) {
    top: 4rem;
  }

  @media (max-height: 500px) {
    top: 1rem;
  }
`
export const ChartWrapper = styled.div`
position: relative;
display: grid;
grid-template-columns: 1fr auto;
border: solid 3px rgba(0,0,0,0.3);
border-radius: 10px;
background-color: rgba(0,0,0,0.02);
width: 95vw;
height: 95vh;
`

export const Chart = styled.div`
min-width: 300px;
position: relative;
`

export const ChartMenu = styled.div`
border-left: solid 2px rgba(0,0,0,0.06);
max-width: 180px;
`

export const ChartTitle = styled.h2`
font-size: 14px;
font-weight: 500;
margin: .5rem 0;
margin-right: .5rem
`
export const ChartTop = styled.div`
display: flex;
flex-direction: row;
gap: .5rem;
justify-content: left;
align-items: center;
margin: .5rem 0;
padding-left: 1rem
`

export const ChartData = styled.h3`
font-size: 12px;
border-top: solid 2px rgba(0,0,0,0.06);
border-bottom: solid 2px rgba(0,0,0,0.06);
display: flex;
flex-direction: column;
padding-left: 1rem;
gap: 10px;
`

export const ChartCheckbox = styled.input`
`

export const ChartAppearance = styled.div`
display: flex;
flex-direction: column;
padding-left: 1rem;
gap: .6rem;
`

export const ChartDropdown = styled.select`
height: 20px;
border: none;
background-color: transparent;
color: blue;
cursor: pointer;
padding: .5rem;
width: 10px;
margin-right: .5rem;
position: relative;
right: .5rem
`

export const ChartDropdownLong = styled.select`
width: 7rem;
min-width: 2rem;
height: 2rem;
color: rgba(0,0,0,0.4);
border: none;
border-radius: 7px;
background-color: #94d8a8;
cursor: pointer;
margin-bottom: .6rem;
`

export const CheckWrapper = styled.div`
display: flex;
flex-direction: row;
gap: .7rem;
align-items: left;
justify-content: left;
margin: .4rem 0;
`

export const CheckboxText = styled.h3`
font-size: .8rem;
`