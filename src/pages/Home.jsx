import React, { Fragment, useState, useContext, useEffect } from 'react'
import { styled } from 'styled-components'
import Posts from '../component/Posts';
import FriendList from '../component/FriendList';
import Options from '../component/Options';
import { RegisteredContext } from '../component/context/Context';

const Whole = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`;

const Container = styled.div`
    
    /* DO NOT CHANGE!! */
    font-size: 20px;
    display: flex;
    height: 100vh;
    justify-content: space-between;
`;

const FlexItem = styled.div`
    display: flex;
    flex-direction: column;
    flex: ${(props) => props.flexSize || "1"};
    height: 100%;
    background-color: ${(props) => props.backGroundColor || "white"};
    
    
`;


const Home = () => {

    const {registeredUser} = useContext(RegisteredContext)

    useEffect(() => {
        console.log(registeredUser)
    }, [])

    return (



        // backGroundColor="#E2F0FA"
            <Fragment>
                
                    
                <Container>
                    <FlexItem flexSize="1" >
                        <Options />
                    </FlexItem>
                    <FlexItem flexSize="3" backGroundColor="#F0F8FC">
                        <Posts />
                    </FlexItem>
                    <FlexItem flexSize="1" >
                        <FriendList />
                    </FlexItem>
                </Container>
                
                

            </Fragment>

    )
    
}

export default Home;