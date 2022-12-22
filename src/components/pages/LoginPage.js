import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'
import videoBg from '../../assets/amrita.mp4'

export default function SignInPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = () => {
        let data = {
            email,
            password
        }
        console.log("api data",data)
    }

    return (
        <div className="text-center m-5-auto" >
            <h2 >Sign in to us</h2>

            <form>
                <p>
                    <label>Username or email address</label><br />
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
                <p>
                    <button id="sub_btn" type="submit" onSubmit={handleSubmit}>Login</button>
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

// style={ HeaderStyle }
// const HeaderStyle = {
//     position: "absolute",
//     top: "0",
//     bottom:0,
//     left:0,
//     opacity: ".5",
//     alignSelf: "stretch",
// }