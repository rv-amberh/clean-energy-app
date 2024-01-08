import {useEffect} from "react";
import {MenuContainer, MenuWrapper, ButtonL, Links, RightMenu, HorizantalMenu, Dropdown, MenuLogo, MenuLine,  MenuCards, CardWrapper, CardText} from './VerticalElements'
import { useNavigate } from "react-router-dom";
import { logout } from "../../firebase";
import { auth} from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const VerticalMenu = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  

  useEffect(() => {
    if (!user) navigate("/");
  }, [user]);
  

  return (
    <MenuContainer>
      <MenuWrapper>
        <HorizantalMenu>
        <MenuLogo>linetech</MenuLogo>
        <RightMenu>
        <Links to="/">
          <p className="avatar_name">{user ? user.name : ''}</p> 
       {user && user.photoURL ? <img className="avatar" alt="" src={user.photoURL} alt="" /> : <i className="fa-solid lg fa-circle-user" to="/"></i>}
        </Links>
        <Dropdown> 
        <option value="">Logout</option>
        </Dropdown>
        </RightMenu>
        </HorizantalMenu>
        <MenuLine />
        <MenuCards>
          <CardWrapper>
          <i style={{margin: 10, }}className="fa-solid fa-calendar fa-sm"></i>            
          <CardText>Planning & Procurement</CardText>
          </CardWrapper>
          <CardWrapper>
            <i style={{margin: 10, }} className="fa-solid fa-chart-simple fa-sm"></i>
            <CardText>Delivery</CardText>
          </CardWrapper>
          <CardWrapper>
            <i style={{margin: 10, }} className="fa-solid fa-gears fa-sm"></i>
            <CardText>Optimization</CardText>
          </CardWrapper>
          <CardWrapper>
            <i style={{margin: 10, }} className="fa-solid fa-chart-line fa-sm"></i>
            <CardText>Monitoring & Reporting</CardText>
          </CardWrapper>
          <ButtonL to="/" onClick={logout}>Logout</ButtonL>
        </MenuCards>
      </MenuWrapper>
    </MenuContainer>
  );
};

export default VerticalMenu;
