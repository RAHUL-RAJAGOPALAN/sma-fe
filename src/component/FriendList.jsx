import React, { Fragment, useContext, useEffect } from "react";
import styled from "styled-components"
import Friend from "./Friend";
import { FriendContext, RequestContext } from "./context/Context";

const Container = styled.div`
    height: 100vh;
    width: 100%;
`;

const ListDiv = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: 200px;
    width: 100%;
    padding: 30px;
    overflow: auto;
    overflow-y: scroll;
`;

const RequestDiv = styled.div`
    display: flex;
    flex-direction: column;
    //flex: 1;
    
    width: 100%;
    padding: 30px;
    padding-bottom: 0;
`;

const Hr = styled.hr`
    margin: 15px 0;
    border: 0.5px solid lightgray;
    width: 100%;
`;

const FriendList = () => {

    const {friend, setFriend} = useContext(FriendContext)
    const {request, setRequest} = useContext(RequestContext);

    // useEffect(() => {
    //     const InitialList = [
    //         "John",
    //        " Paul",
    //         "Jacob"
    //     ]
    //     setFriend(InitialList)
    // }, [])

    useEffect(() => {
        const InitialList = [
            "User1",
            "User2",
            "User3"
        ]
        setRequest(InitialList)
    }, [])

    return (
        <Fragment>
            <Container>
                <RequestDiv>
                    <h3>Requests</h3>
                    {
                        request.map((fr) => {
                            return <Friend buttonText={"Accept"} Name={fr} />
                        })
                    }
                </RequestDiv>
                <ListDiv>
                    <h3>Friends</h3>
                    {
                        friend.map((fr) => {
                            return <Friend buttonText={"Unfriend"} Name={fr} />
                        })
                    }

                </ListDiv>
            </Container>
          
        </Fragment>
    );
}

export default FriendList;