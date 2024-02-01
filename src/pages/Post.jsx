import React, {useContext} from 'react'
import styled from 'styled-components'
import UserFeed from '../component/UserFeed';
import { LikedPostContext } from '../component/context/Context';

const Container = styled.div`

    width: 100vw;
    height: 650px;
    background-color: #F0F8FC;
    display: flex;
    flex-direction: column;
    gap: 10px;
    overflow: auto;
    overflow-y: scroll;

`;

const Post = () => {

  const {likedPost, setLikedPost} = useContext(LikedPostContext)

  return (
    <Container>
        {
            likedPost.map((liked) => {
                return <UserFeed UserData={liked.UserData} CommentData={liked.CommentData}/>
            })
        }
    </Container>
  )
}

export default Post
