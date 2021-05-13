import { PositionOptions } from 'mapbox-gl';
import React, { useContext, useState } from 'react'
import axios from "axios"
import '../../App.css'
import AuthContext from '../../context/AuthContext';
import { useHistory } from 'react-router-dom';
import './SignUp.css';

function SignUp() {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [phoneNumber, setPhoneNumber] = useState();
    const [drivingLicence, setDrivingLicence] = useState();
    const [password, setPassword] = useState();
    const [passwordVerify, setPasswordVerify] = useState();

    const { getLoggedIn } = useContext(AuthContext)

    const history = useHistory();

    async function signUp(e) {
        e.preventDefault()
        try {
            const registerData = {
                name,
                email,
                phoneNumber,
                drivingLicence,
                password,
                passwordVerify
            }

            await axios.post("http://localhost:1337/auth/", registerData, {
                withCredentials: true
            })
            await getLoggedIn()
            history.push("/")

        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="form-container">
            <span className="close-btn"></span>
            <div className="form-content-left">
                <img className="form-img" src="images/service.jpg" style={{height: "auto"}}></img>
            </div>
            <div className="form-content-right">
                <form className="form" onSubmit={signUp}>
                    <h1>
                        Register your account
                    </h1>
                    <div className="form-inputs">
                        <label htmlFor="username" className="form-label">
                            Username
                        </label>

                        <input id="username" name="username" type="text" placeholder="Enter your username"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                        />
                    </div>

                    <div className="form-inputs">
                        <label htmlFor="email" className="form-label">
                            Email
                    </label>

                        <input id="email" name="email" type="text" placeholder="Enter email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                    </div>

                    <div className="form-inputs">
                        <label htmlFor="driving-licence" className="form-label">
                            Driving licence
                    </label>

                        <input id="drivingLicence" name="drivingLicence" type="text" placeholder="Enter driving licence"
                            onChange={(e) => setDrivingLicence(e.target.value)}
                            value={drivingLicence}
                        />
                    </div>

                    <div className="form-inputs">
                        <label htmlFor="password" className="form-label">
                            Password
                    </label>

                        <input id="password" name="password" type="password" placeholder="Enter password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                        />
                    </div>

                    <div className="form-inputs">
                        <label htmlFor="password-verify" className="form-label">
                            Verify password
                    </label>

                        <input id="verifyPassword" name="verifyPassword" type="password" placeholder="verify you password"
                            onChange={(e) => setPasswordVerify(e.target.value)}
                            value={passwordVerify}
                        />
                    </div>
                    <button className="form-input-btn" type="submit">Sign up</button>
                    <span className='form-input-login'>
                        Already have an account? Login <a href="#">here</a>
                    </span>
                </form>
            </div>
        </div>
    )
}

export default SignUp
