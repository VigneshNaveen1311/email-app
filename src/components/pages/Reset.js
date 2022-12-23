import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import '../../App.css'
import videoBg from '../../assets/amrita.mp4'

export default function ResetPage() {
    const [newpassword,setNewpassword] = useState("");
    const [email,setEmail]=useState("");
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault()
        
        let data = {
            email,
            newpassword            
        }
        axios
            .post("http://192.168.6.17:8080/api/auth/forgotpassword/verifyotp/resetpassword", data)
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
        <div className="text-center m-5-auto">
            <h2>Update Password</h2>
            <form method="post"  onSubmit={(e)=> handleSubmit(e)}>
            <p>
                    <label>Username or email address</label><br />
                    <input type="text" name="email"
                        onChange={(e) => setEmail(e.target.value)}
                        required />
                </p>
                <p>
                    <label>Email address</label><br />
                    <input type="number" name="otp"
                        onChange={(e) => setNewpassword(e.target.value)}
                        required />
                </p>
                <p>
                    <button id="sub_btn" type="submit" >Send OTP</button>
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