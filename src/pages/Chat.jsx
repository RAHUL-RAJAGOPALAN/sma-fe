import React, { useState } from 'react'
import styled from 'styled-components'
import SendIcon from '@mui/icons-material/Send';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ChatWindow = styled.div`
    margin-top: 20px;
    height: 100%;
    width: 700px;
    background-color: #F0F8FC;
    display: flex;
    flex-direction: column;
    //align-items: center;
    
`;

const Display = styled.div`
    height: 65%;
    width: 100%;
    display: flex;
    flex-direction: column-reverse;
    overflow: auto;
    overflow-y: scroll;
    gap: 20px;
    &::-webkit-scrollbar{
        display: none;
    }
`;

const TextDiv = styled.div`
    width: 100%;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
`;

const TextArea = styled.textarea.attrs((props) => ({
    value: props.Value,
    placeholder: "Chat here",
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
    margin-bottom: 90px;
    
    &:focus{
        border: none;
        outline: none;
    }
`;

const Box = styled.div`
    padding: 20px;
    border-radius: 10px 0 10px 10px;
    min-height: 50px;
    width: 200px;
    /* overflow: auto; */
    background-color: #3498db;
    color: white;
    align-self: flex-end;
    margin: 10px;
`;



const Chat = () => {

  const [textval, setTextval] = useState("")
  const [history, setHistory] = useState([])

  const clickFunc = () => {
    setHistory([textval, ...history])
}


  return (
    <Container>
        <ChatWindow>
            <Display>
                {
                    history.map((his, index) => {
                        return <Box key={index}>{his}</Box>
                    })
                }
            </Display>

            <TextDiv>
                <TextArea onChange={
                    (event) => {
                        setTextval(event.target.value)
                    }
                    } Value={textval}/>

                <SendIcon style={{fontSize: "25px", color: "#3498db", cursor: "pointer"}}
                    onClick={
                        () => {
                            if(textval !== ""){
                                clickFunc()
                                console.log(history)
                                setTextval("")
                            }

                        }
                    }/>
            </TextDiv>
            
        </ChatWindow>
    </Container>
  )
}

export default Chat
