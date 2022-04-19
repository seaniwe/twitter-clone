import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import styles from './Auth.scss'


import RegisterModal from "./modal/register";
import LoginModal from "./modal/login";

function LogIn() {
    const navigate = useNavigate();

    function toRegister() {
        navigate('register')
    }

    function toLogin() {
        navigate('login')
    }

    return (
        <div id="Auth">
            <div className="left-content">
                <div className="text">
                    <div className="item">Read what interests you</div>
                    <div className="item">Find out what the world is talking about</div>
                    <div className="item">Join the conversation</div>
                </div>
            </div>
            <div className="right-content">
               <div className="btns">
                    <div className="btn register" onClick={toRegister}>Create account</div>
                    <div className="btn login" onClick={toLogin}>I have a account</div>
               </div>
            </div>

            <Routes>
                <Route path="register" element={<RegisterModal />} />
                <Route path="login" element={<LoginModal />} />
            </Routes>
        </div>  
    );
}

export default LogIn;