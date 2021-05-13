import axios from 'axios'
import React, { useContext } from 'react'
import AuthContext from '../../context/AuthContext'

function Logout() {

    const { getLoggedIn } = useContext(AuthContext)
    async function logOut(){
        await axios.get("http://localhost:1337/auth/logout")
        getLoggedIn()
    }
    return (
        <></>
    )
}

export default Logout
