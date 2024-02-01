import React, {useContext, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import styled from 'styled-components';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';
import { RegisteredContext } from '../component/context/Context'; 

const Background = styled.div`
    background-color: #3498db;
    height: 100vh;
    width: 100vw;
`; 

const Layer = styled.div`
    height: 75%;
    width: 100%;
    margin-top: 120px;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

const Credentials = styled.div`
    background-color: white;
    border-radius: 10px;
    height: 100%;
    width: 500px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    gap: 50px;
`;

const Title = styled.p`
    flex-basis: 50px;
    font-weight: 800px;
    font-size: 35px;
    color: black;
    padding: 10px 10px;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-family: 'Teko';
`;

const Field = styled.div`
    display: flex;
    align-items: center;
    background: #F8F8F8;
    width: 70%;
    padding: 10px 30px;
    border-radius: 10px;
    font-size: 14px;
    //margin-left: 30px;
    align-self: center;
`;

const Input = styled.input.attrs(props => ({
    type: props.ty,
    placeholder: props.ph,
    value: props.Value
}))`
    padding: 6px;
    border: 0;
    outline: 0;
    width: 90%;
    font-size: 14px;
    background-color: #F8F8F8;
`;

const Button = styled.button`
    border-radius: 5px;
    width: 80px;
    height: 25px;
    border: none;
    color: white;
    margin-left: 7px;
    align-self: center;
    //background-image: linear-gradient(to right, #fa709a 0%, #fee140 100%);
    background-color: #3498db;
    &:hover{
        cursor: pointer;
    }
    &::-ms-reveal,
    &::-ms-clear{
        display: none
    }

`;

const Signin = () => {

  const navigate = useNavigate()

  const {registeredUser, setRegisteredUser} = useContext(RegisteredContext)
  const [text, setText] = useState("")
  const [uname, setUname] = useState("")
  const [email, setEmail] = useState("")
  const [pwd, setPwd] = useState("")
 
  return (
    <Background>
        <Layer>
            <Credentials>
                <Title>LOGIN</Title>
                <Field>
                    <AccountCircleIcon />
                    <Input ph="Username" ty="text"/>
                </Field>
                <Field>
                    <LockIcon />
                    <Input ph="Password"  ty="password"/>
                </Field>
                <Button>LOGIN</Button>
            </Credentials>
            <Credentials>
                <Title>REGISTER</Title>
                <Field>
                    <AccountCircleIcon />
                    <Input ph="Username"  ty="text"
                        onChange={
                            (event) => {
                                setUname(event.target.value)
                            }
                        }/>
                </Field>
                <Field>
                    <EmailIcon />
                    <Input ph="Email"  ty="email"
                    onChange={
                        (event) => {
                            setEmail(event.target.value)
                        }
                    }                    
                    />
                </Field>
                <Field>
                    <LockIcon />
                    <Input ph="Password"  ty="password"
                    onChange={
                        (event) => {
                            setPwd(event.target.value)
                        }
                    }                    
                    />
                </Field>
                <Button
                    onClick={
                        () => {
                            const regCred = {
                                username: uname,
                                email: email,
                                password: pwd
                            }
                            
                            setRegisteredUser([regCred, ...registeredUser])
                            navigate('/home')
                        }
                    }
                >REGISTER</Button>
            </Credentials>
        </Layer>
    </Background>
  )
}

export default Signin
