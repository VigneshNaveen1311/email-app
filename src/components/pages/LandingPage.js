import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'
import videoBg from '../../assets/amrita.mp4'

export default function LandingPage() {
    return (
        <header>
            {/* <h1 className="main-title text-center">login / register page</h1> */}
            {/* <p className="main-para text-center">join us now and don't waste time</p> */}
            <div className="vbg" style={ Style }>
                <video src={videoBg} autoPlay loop muted id="myVideo"/>
            </div>
            <div className="buttons_text_right" >
                <Link to="/login" >
                    {/* <button className="primary-button">log in</button> */}
                    <button className="primary-button" id="reg_btn"><span>Login</span></button>

                </Link>
                <Link to="/register">
                    <button className="primary-button" id="reg_btn"><span>Register</span></button>
                </Link>
            </div>
            
            
            
        </header>
        
    )
}
//ss
const Style = {
    width: "100%",
    height: "100%",
    objectfit: "cover",
    // background: "#232a34"
}
// const ButtonStyle = {
//     top: 1500,
//     left:100,
//     width: "100%",
//     height: "100%"
// }