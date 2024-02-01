import React from "react"
import styled from "styled-components"
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ExploreIcon from '@mui/icons-material/Explore';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ChatIcon from '@mui/icons-material/Chat';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { Link } from "react-router-dom";

const OptionDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 30px;
    padding-top: 70px;
`;

const Info = styled.div`
    display: flex;
    width: 100%;
    flex-basis: 70px;
    gap: 10px;
    align-items: center;
    justify-content: flex-start;
    &:hover{
        cursor: pointer;
        //background-color: #e3e0e0;
        background-color: #C5E2F5;
    }
`;

const Title = styled.p`
    font-size: 15x;
    font-weight: 500;
`;

const Hr = styled.hr`
    margin: 15px 0;
    border: 0.5px solid lightgray;
    width: 80%;
    //margin-right: 50px;

`;

const Out = styled.div`
    height: 100px;
    display: flex;
    gap: 20px;
`;

const Button = styled.button`
    border-radius: 30px;
    width: 90px;
    height: 40px;
    border: 2.5px solid #3498db;
    background-color: #E2F0FA;
    color: #3498db;
    font-weight: 700;
    font-size: 14px;
    margin-left: 7px;
    //background-image: linear-gradient(to right, #fa709a 0%, #fee140 100%);
    background-color: white;
    margin-top: 15px;
    &:hover{
        cursor: pointer;
        background-color: #3498db;
        color: white;
    }
`;

const Options = () => {

    return (
        
        <OptionDiv>
            
         
            

            <Link to="/liked" style={{textDecoration: "none", color: "black"}}>
                <Info>
                    <ThumbUpIcon fontSize="large"
                        color="action"
                        style={{marginTop: "5px"}}/>
                    <Title>Liked posts</Title>
                </Info>               
            </Link>

            <Info>
                <ExploreIcon fontSize="large"
                    color="action"
                    style={{marginTop: "5px"}}/>
                <Title>Explore</Title>
            </Info>
            <Hr />
            <Out>
                <AccountCircleIcon sx={{fontSize: "60px"}}
                    color="action"
                    style={{marginTop: "5px"}} />
                <Link to='/' style={{textDecoration: "none"}}><Button>Signout</Button></Link>
            </Out>
            <Hr />
            <Link to='/chat' style={{textDecoration: "none", color: "black"}}>
                <Info>
                    <ChatIcon fontSize="large"
                        color="action"
                        style={{marginTop: "5px"}}/>
                    <Title>Chat</Title>
                </Info>
            </Link>

            <Info>
                <WhatshotIcon fontSize="large"
                    color="action"
                    style={{marginTop: "5px"}}/>
                <Title>Trending</Title>
            </Info>
            <Info>
                <DarkModeIcon fontSize="large"
                        color="action"
                        style={{marginTop: "5px"}}/>
                    <Title>Dark Mode</Title>
            </Info>

        </OptionDiv>
        
    );
}

export default Options