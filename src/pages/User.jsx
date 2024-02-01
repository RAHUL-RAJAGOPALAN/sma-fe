import React, {Fragment, useState, useContext} from 'react'
import styled from 'styled-components'
import AccountCircle from '@mui/icons-material/AccountCircle';
import Feed from '../component/Feed';
import Friend from '../component/Friend';
import UserFeed from '../component/UserFeed';
import { FriendContext, MyPostContext } from '../component/context/Context';

const Scrollable = styled.div`
  height: 100vh;
  width: 100vw;


  /* background-color: #E2F0FA; */
`;

const Details = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 270px;
  margin-top: 0;
  justify-content: start;
  align-items: center;
  gap: 50px;
  margin-left: 19%;
`;

const Userinfo = styled.div`
  flex-basis: 500px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Info = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  height: 100px;
  justify-content: space-around;
  align-items: flex-end;
`;

const Num = styled.div`
  height: 100%;
  width: 100px;
  display: block;
`;

const Switch = styled.div`
  width: 100vw;
  height: 100%;

  /* overflow: auto; */
  background-color: #E2F0FA;
`;

const ContentDiv = styled.div`
  width: 100%;
  height: 300px;
  //overflow-y: scroll;
  /* overflow-y: scroll; */
`;

const Toggle = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  
  /* background-color: #3498db; */
`;

const PostDiv = styled.div`
  flex: 1;
  text-align: center;
  background-color: ${props => props.bg};
  cursor: pointer;
`;

const FriendDiv = styled.div`
  flex: 1;
  text-align: center;
  cursor: pointer;
  background-color: ${props => props.bg};
`;

const FeedData = styled.div`
    padding: 20px;
    margin-bottom: 30px;
    height: 100%;
    overflow-y: scroll;
    /* overflow-y: scroll; */
    
    /* &::-webkit-scrollbar{
        display: none;
    } */
`;

const List = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    width: 100%;
    padding: 30px;
    font-size: 25px;
`;


const PostClick = () => {

  const {myPost, setMyPost} = useContext(MyPostContext)

  return (
    <FeedData>
      {
          myPost.map(mp => {
            return <UserFeed UserData={mp.UserData} CommentData={mp.CommentData}/>
          })
      }
      {/* <UserFeed UserData={"John"} CommentData={"This is a comment"}/>
      <UserFeed UserData={"John"} CommentData={"This is a comment"}/>
      <UserFeed UserData={"John"} CommentData={"This is a comment"}/>
      <UserFeed UserData={"John"} CommentData={"This is a comment"}/>
      <UserFeed UserData={"John"} CommentData={"This is a comment"}/>
      <UserFeed UserData={"John"} CommentData={"This is a comment"}/>
      <UserFeed UserData={"John"} CommentData={"This is a comment"}/>
      <UserFeed UserData={"John"} CommentData={"This is a comment"}/> */}
    </FeedData>
  )
}

const FriendClick = () => {

  const {friend, setFriend} = useContext(FriendContext)

  return (
    <List>
      {
        friend.map((fr) => {
          return <Friend buttonText={"Unfriend"} Name={fr} FontSize={"24px"}/>
        })
      }
    </List>
  )
}

const User = () => {

  const [content, setContent] = useState(<PostClick />)
  const [DivStyle1, setDivStyle1] = useState("#3498db")
  const [DivStyle2, setDivStyle2] = useState("")



  return (

    <Fragment>


      <Scrollable>
        <Details>
          <AccountCircle color='action' style={{fontSize: "250px", marginLeft: "30px"}}/>
          <Userinfo>
            <p style={{fontSize: "40px"}}>Username</p>
            <Info>
              <Num>
                <p style={{fontSize: "25px", marginBottom: "0"}}>Friends</p>
                <p style={{fontSize: "25px", marginTop: "0", marginLeft: "12px"}}>100</p>
              </Num>
              <Num>
                <p style={{fontSize: "25px", marginBottom: "0"}}>Posts</p>
                <p style={{fontSize: "25px", marginTop: "0", marginLeft: "12px"}}>10</p>
              </Num>
              
            </Info>
          </Userinfo>
        </Details>

        <Switch>
          <Toggle>
            <PostDiv bg={DivStyle1}><p style={{fontSize: "25px"}} onClick={() => {
              setContent(<PostClick />); 
              setDivStyle1("#3498db"); 
              setDivStyle2("white");
            }}>Posts</p></PostDiv>
            <FriendDiv bg={DivStyle2}><p style={{fontSize: "25px"}} onClick={() => {
              setContent(<FriendClick />); 
              setDivStyle2("#3498db"); 
              setDivStyle1("white");
            }}>Friends</p></FriendDiv>
          </Toggle>
          
          <ContentDiv>
            {content}
          </ContentDiv>
     


        </Switch>
      </Scrollable>
      

    </Fragment>
  )
}

export default User
