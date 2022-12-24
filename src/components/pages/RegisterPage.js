






//import React from 'react'
//import { Link } from 'react-router-dom'

import '../../App.css'

import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import axios from 'axios'
import '../../App.css'
import videoBg from '../../assets/amrita.mp4'
import { useNavigate } from 'react-router-dom'

export default function SignUpPage() {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [roles,setRole]=useState([]);
    const navigate=useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        let role = [roles]
        let data = {
            username,
            email,
            password,
            role
        }
        console.log(data);
        axios
            .post("http://192.168.6.17:8080/api/auth/signup", data)
            .then((response) => {
                console.log(response);
                // Toast(response?.data?.message);
                navigate("/regsuc")
                
            })
            .catch(function (error) {
                console.log(error);
            });
        console.log("api data", data)
    }

    return (
        <div className="text-center m-5-auto" >
            <h2 >Sign in to us</h2>

            <form method="post" onSubmit={(e) => handleSubmit(e)}>
                <p>
                    <label>Username</label><br />
                    <input type="text" name="username"
                        onChange={(e) => setUsername(e.target.value)}
                        required />
                </p>
                <p>
                    <label>email address</label><br />
                    <input type="text" name="email"
                        onChange={(e) => setEmail(e.target.value)}
                        required />
                </p>
                <p>
                    <label>Password</label>
                    <Link to="/forget-password"><label className="right-label">Forget password?</label></Link>
                    <br />
                    <input type="password" name="password"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </p>
                <label htmlFor="role">Choose a role:</label>

                <select name="role" id="role" onChange={(e) => setRole(e.target.value)}
                        required> 
                    <option value="mod">Warden</option>
                    <option value="user">Student</option>
                    
                    
                </select>

                <p>
                    <button id="sub_btn" type="submit" >Register</button>
                </p>
            </form>
            <div className="vbg" >
                <video src={videoBg} autoPlay loop muted id="myVideo" />
            </div>
            <footer>
                <p>First time? <Link to="/register">Create an account</Link>.</p>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )
}
//sda
// style={ HeaderStyle }
// const HeaderStyle = {
//     position: "absolute",
//     top: "0",
//     bottom:0,
//     left:0,
//     opacity: ".5",
//     alignSelf: "stretch",
// }
// export default function SignUpPage() {

//     return (
//         <div className="text-center m-5-auto">
//             <h2>Join us</h2>
//             <h5>Create your personal account</h5>
//             <form action="/home">
//                 <p>
//                     <label>Username</label><br/>
//                     <input type="text" name="first_name" required />
//                 </p>
//                 <p>
//                     <label>Email address</label><br/>
//                     <input type="email" name="email" required />
//                 </p>
//                 <p>
//                     <label>Password</label><br/>
//                     <input type="password" name="password" requiredc />
//                 </p>
//                 {/* <p>
//                     <input type="checkbox" name="checkbox" id="checkbox" required /> <span>I agree all statements in <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a></span>.
//                 </p> */}
//                 <select onChange={}>
//                     <option value={0}>student
//                     </option>
//                     <option value={1}>
//                         warden
//                     </option>
//                 </select>
//                 <p>
//                     <button id="sub_btn" type="submit">Register</button>
//                 </p>
//             </form>
//             <div className="vbg" style={ HeaderStyle }>
//                 <video src={videoBg} autoPlay loop muted id="myVideo"/>
//             </div>
//             <footer>
//                 <p><Link to="/">Back to Homepage</Link>.</p>
//             </footer>
//         </div>
//     )

// }
// const HeaderStyle = {
//     position: "fixed",
//     top: "0",
//     left:"0",
//     width: "100%",
//     height: "150",
//     opacity: ".7"
// }

