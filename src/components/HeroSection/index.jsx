import {useState, useEffect} from 'react'
import {HeroContainer, HeroWrapper, HeroLogo, HeroButtonUsername, CheckboxWrapper, CheckboxText, HeroButtonPassword, HeroCheckbox, HeroButtonLogIn, ForgotPassword} from './HeroElements';
import logo from '../../images/linetech-logo.svg'
import { Link, useNavigate } from "react-router-dom";
import { auth, signInWithEmailAndPassword, registerWithEmailAndPassword, signInWithGoogle} from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Tooltip } from 'react-tooltip'


const Hero = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const re = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

  const register = () => {
    if (!email) alert("Please enter email!");
    registerWithEmailAndPassword(email, password);
  };
 
  useEffect(() => {
   if (loading) {
     return;
   }
   if (user) navigate("/dashboard");
 }, [user]);

  return (
    <>
    <HeroContainer>
        <HeroWrapper>
            <HeroLogo src={logo} />
            <Tooltip id="registerPass" place="top" effect="solid" />
            <Tooltip id="registerEmail" place="top" effect="solid" />
                <HeroButtonUsername value={email} rows={2} multiline={true} data-tooltip-content={re.test(email) ? "" : 'Enter valid email'}  data-tooltip-place="right" effect="solid" data-tooltip-id="registerPass" onChange={(e) => setEmail(e.target.value)} placeholder={`Enter your email `} type="text" />
                    <HeroButtonPassword  data-tooltip-place="right" effect="solid" data-tooltip-id="registerPass" data-tooltip-content={password.length < 6 ? 'Password must be longer than 6 characters' : ''} value={password}  onChange={(e) => setPassword(e.target.value)} rows={2} multiline={true} placeholder={`Enter your password `} type="text" />
                      <CheckboxWrapper>
                        <HeroCheckbox type="checkbox" />
                        <CheckboxText>Remember Me</CheckboxText>
                      </CheckboxWrapper>
                    <HeroButtonLogIn onClick={register}>Log In</HeroButtonLogIn>
                    <button className="login__btn login__google" onClick={signInWithGoogle}> Login with Google </button>
                <ForgotPassword>Forgot Password?</ForgotPassword>  
        </HeroWrapper>
    </HeroContainer>
    </>
  )
}

export default Hero