import React from 'react'
import { Route, Routes } from 'react-router-dom'

import LandingPage from './components/pages/LandingPage'
import LoginPage from './components/pages/LoginPage'
import RegisterPage from './components/pages/RegisterPage'
import ForgetPasswordPage from './components/pages/ForgetPasswordPage'
import HomePage from './components/pages/HomePage'
import OTPPage from './components/pages/OTPpage'
import Reset from './components/pages/Reset'

import './App.css'

export default function App() {
    return (
        // <Router>
            <div>
                <Routes>
                    <Route exact path="/" element={ <LandingPage/> } />
                    <Route path="/login" element={ <LoginPage/> } />
                    <Route path="/register" element={ <RegisterPage />} />
                    <Route path="/forget-password" element={ <ForgetPasswordPage/> } />
                    <Route path="/home" element={ <HomePage/> } />
                    <Route path="/otp" element={ <OTPPage/> } /> 
                    <Route path="/reset" element={ <Reset/> } /> 

                </Routes>
                {/* <Footer /> */}
            </div>
        // </Router>
    )
}

// const Footer = () => {
//     return (
//         <p className="text-center" style={ FooterStyle }></p>
//     )
// }



// const FooterStyle = {
//     background: "#222",
//     fontSize: ".8rem",
//     color: "#fff",
//     position: "absolute",
//     bottom: 0,
//     padding: "1rem",
//     margin: 0,
//     width: "100%",
//     opacity: ".5"
// }