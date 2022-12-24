import React from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import axios from 'axios'
import '../../App.css'
import videoBg from '../../assets/amrita.mp4'
import  { useState } from "react";

export default function OTPPage() {
    const [resetToken, setOtp] = useState("");
    const [email,setEmail]=useState("");
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault()
        
        let data = {
            email,
            resetToken           
        }
        axios
            .post("http://192.168.6.17:8080/api/auth/forgotpassword/verifyotp", data)
            .then((response) => {
                console.log(response);
                navigate("/reset")
            })
            .catch(function (error) {
                console.log(error);
            });
        console.log("api data", data)
    }//sss
    return (
        
        <div className="text-center m-5-auto" >
            <h2>Enter the received OTP</h2>
            <form method="post" onSubmit={(e)=> handleSubmit(e)}>
                <p>
                    <label>Email address</label><br />
                    <input type="email" name="email"
                        onChange={(e) => setEmail(e.target.value)}
                        required />
                </p>
                <p>
                    <label>OTP</label><br />
                    <input type="number" name="otp"
                        onChange={(e) => setOtp(e.target.value)}
                        required />
                </p>
                <p>
                    <button id="sub_btn" type="submit" >Verify</button>
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