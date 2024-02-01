import React, {useState, useContext} from 'react'
import styled from 'styled-components'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import { LikedPostContext } from './context/Context';

const Container = styled.div`
    width: 80%;
    
    min-height: 130px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border-radius: 10px;
    background-color: white;
    margin-top: 20px;
    margin-left: 150px;

`;

const User = styled.div`
    display: flex;
    gap: 7px;
    width: 100%;
    align-items: flex-start;
`;

const Content = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow: auto;
`;

const Comment = styled.p`
    margin-left: 40px;
    font-size: 18px;
`;

const UserFeed = ({UserData, CommentData}) => {

    const {likedPost, setLikedPost} = useContext(LikedPostContext)

    return (


        <Container>
            <User>
                <AccountCircleIcon color="action" style={{width: "40px", height: "40px", marginLeft: "20px", marginTop: "10px"}}/>
                <h2>{UserData}</h2>
            </User>
            <Content>

                <Comment>{CommentData}</Comment>
                <div style={{display: "flex", gap: "5px", alignItems: "baseline"}}>
                    <div>
                        <ThumbUpOffAltIcon fontSize='small' style={{marginLeft: "40px",display: "inline", cursor: "pointer"}}
                            onClick = {
                                () => {
                                    const obj = {UserData, CommentData}
                                    const newList = [obj]
                                    setLikedPost(newList)
                                    console.log(likedPost)
                                }
                            }
                        />
                        {/* <p style={{display: "inline", marginLeft: "2px"}}>123</p> */}
                    </div>
                    
                    
                </div>

            </Content>
        </Container>
    )
}

export default UserFeed