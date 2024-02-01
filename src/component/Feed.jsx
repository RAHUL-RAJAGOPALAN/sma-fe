import React, {useState, useContext, useEffect} from 'react'
import styled from 'styled-components'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import { LikedPostContext } from './context/Context';

const Container = styled.div`
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border-radius: 10px;
    background-color: white;
    margin-top: 20px;
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
    
`;




const Feed = ({UserData, CommentData}) => {




    const {likedPost, setLikedPost} = useContext(LikedPostContext)

    const [isClicked, setIsClicked] = useState(false)

    const handleLike = () => {
        setIsClicked(!isClicked)
        const obj = {UserData, CommentData}
        const arr = likedPost.filter(ob => 
            ob.UserData === obj.UserData && ob.CommentData === obj.CommentData
        )
    arr.length === 0 && setLikedPost([obj, ...likedPost])
    
        // console.log(likedPost)
    }

    const handleDisLike = () => {
        setIsClicked(!isClicked)
        const obj = {UserData, CommentData}
        const newList = likedPost.filter(ob => 
            ob.UserData !== obj.UserData && ob.CommentData !== obj.CommentData
        )
        setLikedPost(newList)
        
        // console.log(likedPost)
    }

    useEffect(() => {
        console.log(isClicked)
        setIsClicked(isClicked)
    }, [])

    const custom = {marginLeft: "40px",display: "inline", cursor: "pointer"}

    return (

        

        <Container>
            <User>
                <AccountCircleIcon color="action" style={{width: "40px", height: "40px", marginLeft: "20px", marginTop: "10px"}}/>
                <h3>{UserData}</h3>
            </User>
            <Content>

                <Comment>{CommentData}</Comment>
                <div style={{display: "flex", gap: "5px", alignItems: "baseline"}}>
                    <div>
                        {
                            isClicked ?                         
                            <ThumbUpAltIcon fontSize='small' style={custom}
                            onClick = {
                                () => handleDisLike()
                            }
                        /> :
                        <ThumbUpOffAltIcon fontSize='small' style={custom}
                        onClick = {
                            () => handleLike()
                        }
                    />
                        }
                        {/* <p style={{display: "inline", marginLeft: "2px"}}>123</p> */}
                    </div>

                    
                    
                </div>

            </Content>
        
        </Container>
    )
}

export default Feed