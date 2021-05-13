import { PositionOptions } from 'mapbox-gl';
import React, {useContext, useState} from 'react'
import axios from "axios"
import '../../App.css'
import { useHistory } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';

function SignIn() {

    const { getLoggedIn } = useContext(AuthContext)

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const history = useHistory();
    const {loggedIn} = useContext(AuthContext)

    async function signIn(e){
        e.preventDefault()
        try{
            const logInData = {
                email,
                password,
            }

            await axios.post("http://localhost:1337/auth/login", logInData,{
                withCredentials: true
            })
            await getLoggedIn()

            history.push("/")   
        }catch(err){
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
                <form className="form" onSubmit={signIn}>
                    <h1>
                        Sign in your account
                    </h1>
                    <div className="form-inputs">
                        <label htmlFor="email" className="form-label">
                            Email
                        </label>

                        <input id="email" name="email" type="text" placeholder="Enter your email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
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

                   
                    <button className="form-input-btn" type="submit">Sign in</button>
                    

                </form>
            </div>
        </div>




     

    )
}

export default SignIn
