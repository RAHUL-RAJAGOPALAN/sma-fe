import React from "react"
import styled from "styled-components"
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from "react-router-dom";

const Navbar = styled.div`
    display: flex;
    width: 100vw;
    height: 40px;
    background-color: #3498db;
    align-items: center;
    justify-content: space-between;
    padding: 15px 1%;
    flex: 1;
`;

const Search = styled.div`
    display: flex;
    align-items: center;
    background: white;
    padding: 10px 30px;
    border-radius: 50px;
    margin-left: 50px;
`;

const Ul = styled.ul`
    flex-basis: 500px;
    list-style-type: none;
    text-align: center;
    /* margin-right: 40px; */
    justify-content: flex-end;
`;

const Li = styled.li`
    display: inline-block;
    margin: 10px 20px;
    cursor: pointer;
    font-size: 18px;
    color: white;
`;

const Input = styled.input.attrs({
    type: "search",
    placeholder: "search"
})`
    padding: 6px;
    border: 0;
    outline: 0;
`;

const Nav = () => {
    return (
        <Navbar>
            <Link to='/home'><ConnectWithoutContactIcon  
            style={{color: "white", cursor: "pointer", width: "90px"}} 
            sx={{fontSize: 50}}
            /></Link>
            <Search>
                <Input />
                <SearchIcon style={{cursor: "pointer"}}/>
            </Search>
            <Ul>
                <Li>
                    <Link to='/user' style={{textDecoration: "none", color: "white"}}>
                        <AccountCircleIcon />
                    </Link>
                </Li>
                
                <Li><NotificationsIcon /></Li>
                <Li><ArrowDropDownIcon style={{marginRight: "40px", marginTop: "10px"}}/></Li>
            </Ul>
        </Navbar>
    )
}

export default Nav