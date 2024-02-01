import React, { useState, Fragment, useEffect, useContext } from "react"
import { styled } from "styled-components"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Feed from "./Feed";
import { PostContext, TextContext, LikedPostContext, MyPostContext } from "./context/Context";

const InnerContainer = styled.div`
    display: flex;
    height: 30%;
    flex-direction: column;
`;

const PostComment = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    align-self: center;
`;

const TextArea = styled.textarea.attrs((props) => ({
    value: props.Value,
    placeholder: "What's on your mind",
}))`
    resize: none;
    background-color: white;
    color: black;
    border-radius: 10px;
    width: 350px;
    height: 70px;
    border: none;
    padding: 20px;
    padding-right: 30px;
    overflow: auto;
    font-size: 20px;
    &:focus{
        border: none;
        outline: none;
    }
`;

const Submit = styled.button`
    align-self: flex-end;
    border-radius: 10px;
    width: 100px;
    height: 30px;
    border: none;
    color: white;
    background-color: #3498db;
    &:hover{
        cursor: pointer;
    }
`;

const TextDiv = styled.div`
    width: 100%;
    height: 500px;
    border-radius: 10px;
    padding: 50px;
    background-color: white;
`;

const FeedData = styled.div`
    padding: 10px 30px;
    overflow: auto;
    overflow-y: scroll;
    flex: 1;
    margin-top: 20px;
    margin-bottom: 70px;
    &::-webkit-scrollbar{
        display: none;
    }
`;

const Posts = () => {

    const {post, setPost} = useContext(PostContext)
    const {text, setText} = useContext(TextContext)
    const {myPost, setMyPost} = useContext(MyPostContext)



    return (
        <Fragment>
            
                <InnerContainer>
                    <PostComment>
                        <AccountCircleIcon color="action" style={{marginLeft: "50px", marginRight: "20px", width: "50px", height: "50px"}}/>
                        <TextArea onChange={
                            (event) => {
                                setText(event.target.value)
                            }
                            } Value={text}/>
                        
                        <Submit
                         onClick={
                            () => {
                            
                                if(text !== ""){
                                    setPost(prevPost => [{UserData: "User", CommentData: text}, ...prevPost])
                                    setMyPost(prevMyPost => [{UserData: "User", CommentData: text}, ...prevMyPost])
                                    setText("")
                                    console.log(post)
                                }
                            }
                         }>Post</Submit>
                    </PostComment>
                </InnerContainer> 
                <FeedData>

                    {
                        post.map((indPost) => {
                            return <Feed UserData={indPost.UserData} CommentData={indPost.CommentData}/>
                        })
                    }

                    <Feed UserData={"John"} CommentData={"The sun shines bright"}/>
                    <Feed UserData={"Blake"} CommentData={"ABCDE"}/>
                    <Feed UserData={"Aaron"} CommentData={"FGHIJKLMNOP"}/>

                </FeedData>   
        </Fragment>


    )
}

export default Posts;