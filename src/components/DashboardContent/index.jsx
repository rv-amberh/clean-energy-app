import {useState, useEffect} from 'react'
import {DashboardWrapper, Cards, DashBoard, DashboardContainer, CardHolder, CardText, CardButton, Title} from './DashboardElements'
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db, logout } from "../../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";

const DashboardElements = () => {
   
  return (
    <DashBoard>
    <DashboardWrapper>
        <Title>Lorem ipsum dolo sit amet, consectetur adipicscign elit.</Title>
        <DashboardContainer>
            <Cards>
            <CardHolder>
            <i className="fa-solid fa-chart-area fa-xl"></i>
                <CardText>{`Goal Setting & Portfolio Design`}</CardText>
                <CardButton disabled to="/CarbonData">Set Up</CardButton>
            </CardHolder>
            <CardHolder>
            <i className="fa-solid fa-chart-area fa-xl"></i>
                <CardText>RFO Administration</CardText>
                <CardButton disabled to="/CarbonData" >Set Up</CardButton>
            </CardHolder>
            <CardHolder>
            <i className="fa-solid fa-chart-area fa-xl"></i>
                <CardText>Commerical Structuring</CardText>
                <CardButton disabled to="/CarbonData" >Set Up</CardButton>
            </CardHolder>
            <CardHolder>
            <i className="fa-solid fa-chart-area fa-xl"></i>
                <CardText>Carbon Intensity</CardText>
                <CardButton to="/CarbonData" >Set Up</CardButton>
            </CardHolder>
            </Cards>
        </DashboardContainer>
    </DashboardWrapper>
    </DashBoard>
  )
}

export default DashboardElements