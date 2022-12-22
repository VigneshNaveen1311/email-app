import React from 'react'
import { Link } from 'react-router-dom'
import videoBg from '../../assets/amrita.mp4'
 

export default function HomePage() {
    return (
        <div className="text-center" style={ HeaderStyle }>
            <h1 className="main-title home-page-title">welcome to our app</h1>
            <Link to="/">
                <button className="primary-button">Log out</button>
            </Link>
        </div>
    )
}
const HeaderStyle = {
    width: "100%",
    height: "100vh",
    background: `url(${videoBg})`,
    backgroundPosition: "top",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}

// data.map()