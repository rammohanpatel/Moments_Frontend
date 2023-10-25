import React from 'react';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth'
import {Container} from "@mui/material";
import './index.css';

// import { GoogleOAuthProvider } from '@react-oauth/google';


const App = () => (

  // <GoogleOAuthProvider clientId='851229152240-bv4dk867po17at8nsp95q303kkc5v7al.apps.googleusercontent.com'>
  <BrowserRouter>
    <Container maxWidth="lg">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/auth" element={<Auth/>} />
      </Routes> 
      
    </Container>
    </BrowserRouter>
    // {/* </GoogleOAuthProvider> */}
)
export default App
