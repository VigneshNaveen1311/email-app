import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'
import videoBg from '../../assets/amrita.mp4'

export default function OTPPage() {
    return (
        
        <div className="text-center m-5-auto" >
            <h2>Multifactor Authentication</h2>
            <h5>Enter the OTP sent to your mail</h5>
            <form action="/reset">
                <p>
                    <label id="reset_pass_lbl">One Time Password</label><br/>
                    <input type="number" name="OTP" required />
                </p>
                <p>
                    <button id="sub_btn" type="submit">Reset Password</button>
                </p>
            </form>
            <div className="vbg" >
                <video src={videoBg} autoPlay loop muted id="myVideo"/>
            </div>
            <footer>
                <p><Link to="/">Back to HomePage</Link>.</p>
            </footer>
        </div>
    )
}
// z