//import './App.css';
import Home from './pages/Home';
import Nav from './component/Nav';
import Signin from './pages/Signin';
import User from './pages/User';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Fragment, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Post from './pages/Post';
import Chat from './pages/Chat';

function App() {


  const [DarkMode, setDarkMode] = useState()

  return (
    
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Signin />} />
          <Route path='/home'element={
            <Fragment>
              <Nav />
              <Home />
            </Fragment>
          }></Route>
          <Route path='/user' element={
            <Fragment>
              <Nav />
              <User />
            </Fragment>
          }/>
          <Route path='/liked' element={
            <Fragment>
              <Nav />
              <Post />
            </Fragment>
          } 
          />
          <Route path='/chat' element={
            <Fragment>
              <Nav />
              <Chat />
            </Fragment>
          } />
        </Routes>
      </BrowserRouter>
    
 
  );
}

export default App;
