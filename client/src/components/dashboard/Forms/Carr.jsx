import React, { useContext, useState } from 'react'
import axios from "axios"
import './carr.css';

function Carr() {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [contact, setContact] = useState();
    const [location, setLocation] = useState();
    const [carName, setCarname] = useState();
    const [costPerDay, setCostPerday] = useState();
    const [imgUrl, setImgUrl] = useState();

    async function formPost(e) {
        e.preventDefault()
        try {
            const registerData = {
                name,
                email,
                contact,
                location,
                carName,
                costPerDay,
                imgUrl
            }

            await axios.post("http://localhost:1337/api/cars", registerData, {
                withCredentials: true
            })
            console.log("Success")


        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="form-container">
            <span className="close-btn"></span>
            <div className="form-content-left">
                <img className="form-img" src="https://images.financialexpress.com/2020/11/car-rental-1.jpg?w=692" style={{height: "auto"}}></img>
            </div>
            <div className="form-content-right">
                <form className="form" onSubmit={formPost}>
                    <h2>
                        Register your Car
                    </h2>
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
                        <label htmlFor="contact" className="form-label">
                            Contact
                    </label>

                        <input id="contact" name="contact" type="text" placeholder="Enter Contact"
                            onChange={(e) => setContact(e.target.value)}
                            value={contact}
                        />
                    </div>

                    <div className="form-inputs">
                        <label htmlFor="location" className="form-label">
                            Location
                    </label>

                        <input id="location" name="location" type="decimal" placeholder="Location"
                            onChange={(e) => setLocation(e.target.value)}
                            value={location}
                        />
                    </div>

                    <div className="form-inputs">
                        <label htmlFor="carName" className="form-label">
                            CarName
                    </label>

                        <input id="carName" name="carName" type="text" placeholder="Enter carname"
                            onChange={(e) => setCarname(e.target.value)}
                            value={carName}
                        />
                    </div>
                    <div className="form-inputs">
                        <label htmlFor="costPerDay" className="form-label">
                            CostPerDay
                        </label>

                        <input id="costPerDay" name="costPerDay" type="number" placeholder="Enter costPerday"
                            onChange={(e) => setCostPerday(e.target.value)}
                            value={costPerDay}
                        />
                    </div>

                    <div className="form-inputs">
                        <label htmlFor="carName" className="form-label">
                            CarImage
                    </label>

                        <input id="imgUrl" name="imgUrl" type="text" placeholder=""
                            onChange={(e) => setImgUrl(e.target.value)}
                            value={imgUrl}
                        />
                    </div>
                    
                    <button className="form-input-btn" type="submit">Register</button>

                </form>
            </div>
        </div>
    )
}

export default Carr
