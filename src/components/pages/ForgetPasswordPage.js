import React from 'react'
import { Link , useNavigate  }from 'react-router-dom'
import axios from 'axios'
import '../../App.css'
import videoBg from '../../assets/amrita.mp4'
import  { useState } from "react";
// import { useNavigate } from "react-router-dom";

export default function ForgetPasswordPage() {
    const [email, setEmail] = useState("");
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault()
        
        let data = {
            email            
        }
        axios
            .post("http://192.168.6.17:8080/api/auth/forgotpassword", data)
            .then((response) => {
                console.log(response);
                navigate("/otp")
            })
            .catch(function (error) {
                console.log(error);
            });
        console.log("api data", data)
    }
    //dsafa
    return (
        
        <div className="text-center m-5-auto" >
            <h2>Reset your password</h2>
            <h5>Enter your email address and we will send you an OTP</h5>
            <form method="post" action="/otp" onSubmit={(e)=> handleSubmit(e)}>
                <p>
                    <label>Email address</label><br />
                    <input type="email" name="email"
                        onChange={(e) => setEmail(e.target.value)}
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

// export default function SignInPage() {
//     const [email, setEmail] = useState("");
//     //const [password, setPassword] = useState("");

//     const handleSubmit = (e) => {
//         e.preventDefault()
//         let data = {
//             username:email,
//             // email,
            
//         }
//         axios
//             .post("http://10.11.139.134:8080/api/auth/signin", data)
//             .then((response) => {
//                 console.log(response);
//                 // Toast(response?.data?.message);
//             })
//             .catch(function (error) {
//                 console.log(error);
//             });
//         console.log("api data", data)
//     }

//     return (
//         <div className="text-center m-5-auto" >
//             <h2 >Sign in to us</h2>

//             <form method="post" onSubmit={(e)=> handleSubmit(e)}>
//                 <p>
//                     <label>Username or email address</label><br />
//                     <input type="text" name="email"
//                         onChange={(e) => setEmail(e.target.value)}
//                         required />
//                 </p>
//                 <p>
//                     <label>Password</label>
//                     <Link to="/forget-password"><label className="right-label">Forget password?</label></Link>
//                     <br />
//                     <input type="password" name="password"
//                         onChange={(e) => setPassword(e.target.value)}
//                         required
//                     />
//                 </p>
//                 <p>
//                     <button id="sub_btn" type="submit" onClick={(e)=> handleSubmit(e)} >Login</button>
//                 </p>
//             </form>
//             <div className="vbg" >
//                 <video src={videoBg} autoPlay loop muted id="myVideo" />
//             </div>
//             <footer>
//                 <p>First time? <Link to="/register">Create an account</Link>.</p>
//                 <p><Link to="/">Back to Homepage</Link>.</p>
//             </footer>
//         </div>
//     )
// }
// // z