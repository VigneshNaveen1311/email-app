import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'
import videoBg from '../../assets/amrita.mp4'

export default function ResetPage() {

    return (
        <div className="text-center m-5-auto">
            <h2>Update Password</h2>
            <form action="/home">
                <p>
                    <label>Email address</label><br/>
                    <input type="email" name="email" required />
                </p>
                <p>
                    <label>Password</label><br/>
                    <input type="password" name="password" requiredc />
                </p>
                <p>
                    <label>Confirm Password</label><br/>
                    <input type="password" name="confirm password" requiredc />
                </p>
                <p>
                    <button id="sub_btn" type="submit">Update Password</button>
                </p>
            </form>
            <div className="vbg" style={ HeaderStyle }>
                <video src={videoBg} autoPlay loop muted id="myVideo"/>
            </div>
            <footer>
                <p><Link to="/login">Back to Login</Link>.</p>
            </footer>
        </div>
    )

}
const HeaderStyle = {
    position: "fixed",
    top: "0",
    left:"0",
    width: "100%",
    height: "150",
    opacity: ".7"
}