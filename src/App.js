/* eslint-disable */ 
import './App.css';
import Footer from './pages/footer.js'
import Mainrouter from "./router/mainRouter.js"
import React from 'react'
import { useState, createContext, useRef } from "react";
import SignIn from './pages/auth/login.js'
import SignUp from './pages/auth/register.js'
export const SignContext = createContext();
function App() {

  const [signIn, setSignIn]=useState(false)
  const [isLogin, setIsLogin]=useState(false)
  const value = { signIn, setSignIn ,isLogin, setIsLogin};

  return (
    <div>
      <SignContext.Provider value={value}>

        <Mainrouter />
        <Footer />

    </SignContext.Provider >

    </div>
  );
}
export default App;
