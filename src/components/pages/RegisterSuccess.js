import React from 'react'
import { Link } from 'react-router-dom'
import videoBg from '../../assets/amrita.mp4'
 

export default function RegSuccess() {
    return (
        <div className="text-center" style={ HeaderStyle }>
            <h1 className="main-title home-page-title">Success!</h1>
            <Link to="/">
                <button className="primary-button" style={ButtonStyle}>Continue to Login</button>
            </Link>
            <div className="vbg" style={myStyle}>
                <video src={videoBg} autoPlay loop muted id="myVideo"/>
            </div>
        </div>

        
    )
}

const myStyle={
    background: `url(${videoBg})`,
    height:'100vh',
    marginTop:'-70px',
    fontSize:'50px',
    backgroundSize: 'cover',
    
};

const HeaderStyle = {
    width: "100%",
    height: "100vh",    
    position:"absolute"
}

const ButtonStyle={
    opacity: 0.7
}