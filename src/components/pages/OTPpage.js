import React from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import axios from 'axios'
import '../../App.css'
import videoBg from '../../assets/amrita.mp4'
import  { useState } from "react";

export default function OTPPage() {
    const [otp, setOtp] = useState("");
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault()
        
        let data = {
            otp            
        }
        axios
            .post("http://192.168.6.17:8080/api/auth/signin", data)
            .then((response) => {
                console.log(response);
                navigate("/reset")
            })
            .catch(function (error) {
                console.log(error);
            });
        console.log("api data", data)
    }
    return (
        
        <div className="text-center m-5-auto" >
            <h2>Reset your password</h2>
            <h5>Enter your email address and we will send you a new password</h5>
            <form method="post" onSubmit={(e)=> handleSubmit(e)}>
                <p>
                    <label>Email address</label><br />
                    <input type="number" name="otp"
                        onChange={(e) => setOtp(e.target.value)}
                        required />
                </p>
                <p>
                    <button id="sub_btn" type="submit" >Send OTP</button>
                </p>
            </form>
            <div className="vbg" >
                <video src={videoBg} autoPlay loop muted id="myVideo"/>
            </div>
            <footer>
                <p>First time? <Link to="/register">Create an account</Link>.</p>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )
}