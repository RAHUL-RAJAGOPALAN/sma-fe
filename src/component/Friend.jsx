import React, { Fragment, useContext } from "react";
import styled from "styled-components";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { FriendContext, RequestContext } from "./context/Context";

const FriendDiv = styled.div`
    display: flex;
    gap: 50px;
    width: 100%;
    flex-basis: 50px;
    
`;

const Button = styled.button`
    border-radius: 10px;
    width: 80px;
    height: 25px;
    border: none;
    color: white;
    margin-left: 7px;
    //background-image: linear-gradient(to right, #fa709a 0%, #fee140 100%);
    background-color: #3498db;
    &:hover{
        cursor: pointer;
    }
`;

const Para = styled.p`
    align-items: flex-start;
    justify-content: center;
    flex-basis: 45px;
    margin-top: 0;
    font-size:  ${props => props.FontSize || "20px"};
`;

const Hr = styled.hr`
    margin: 15px 0;
    border: 0.5px solid lightgray;
    width: 100%;
    align-self: flex-end;
    justify-content: flex-end;
`;

const Friend = ({buttonText, FontSize, Name}) => {

    const {friend, setFriend} = useContext(FriendContext)
    const {request, setRequest} = useContext(RequestContext);

    return (
        
            <FriendDiv>

                <AccountCircleIcon fontSize="medium" color="action" 
                    style={{marginLeft: "3px",
                            alignItems: "flex-start",
                            justifyContent: "center",
                            marginTop: "2px"}}
                />

                <Para FontSize={FontSize}>{Name}</Para>
                <Button style={{alignItems: "flex-start", justifyContent: "center"}}
                    onClick={() => {
                        if(buttonText === "Accept"){
                            const UpdatedRequests = request.filter(req => req !== Name)
                            setRequest(UpdatedRequests)
                            setFriend([Name, ...friend])
                            console.log(friend)
                        }else{
                            const UpdatedRequests = friend.filter(req => req !== Name)
                            setFriend(UpdatedRequests)
                        }
                    }}
                    >{buttonText}</Button>
                
            </FriendDiv>
            
        
    )
}

export default Friend;