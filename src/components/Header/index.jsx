import React from 'react'
import {HeaderContainer, HeaderWrapper, HeaderLogo, HeaderButton} from './HeaderElements'

const Header = () => {
  return (
    <HeaderContainer>
        <HeaderWrapper>
            <HeaderLogo> linetech </HeaderLogo>
            <HeaderButton to='/Dashboard'>Sign Up</HeaderButton>
        </HeaderWrapper>    
    </HeaderContainer>
  )
}

export default Header