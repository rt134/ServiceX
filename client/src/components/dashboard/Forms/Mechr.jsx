import React, { useContext, useState } from 'react'
import axios from "axios"
import './mech.css';

function Mechr() {

    const [gname, setName] = useState();
    const [email, setEmail] = useState();
    const [contact, setContact] = useState();
    const [location, setLocation] = useState();
    const [basePrice, setBasePrice] = useState();
    const [imgUrl, setImgUrl] = useState();

    async function formPost(e) {
        e.preventDefault()
        try {
            const registerData = {
                gname,
                email,
                contact,
                location,
                basePrice,
                imgUrl
            }

            await axios.post("http://localhost:1337/api/mechanic", registerData, {
                withCredentials: true
            })


        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="form-container">
            <span className="close-btn"></span>
            <div className="form-content-left">
                <img className="form-img" src="https://i.pinimg.com/originals/89/5e/68/895e68b091756a9e1451224fe81ca5a4.png" style={{height: "auto"}}></img>
            </div>
            <div className="form-content-right">
                <form className="form" onSubmit={formPost}>
                    <h2>
                        Register As Mechanic
                    </h2>
                    <div className="form-inputs">
                        <label htmlFor="gname" className="form-label">
                            Garagename
                        </label>

                        <input id="gname" name="gname" type="text" placeholder="Enter your Garagename"
                            onChange={(e) => setName(e.target.value)}
                            value={gname}
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
                        <label htmlFor="basePrice" className="form-label">
                            BasePrice
                        </label>

                        <input id="basePrice" name="basePrice" type="number" placeholder="Enter baseprice"
                            onChange={(e) => setBasePrice(e.target.value)}
                            value={basePrice}
                        />
                    </div>

                    <div className="form-inputs">
                        <label htmlFor="imgUrl" className="form-label">
                            garageImage
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

export default Mechr
