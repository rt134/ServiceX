
import axios from 'axios'
import React, {useContext, useState} from 'react'
import {Link} from 'react-router-dom'
import AuthContext from '../context/AuthContext'
import './Navbar.css'

function Navbar() {
    const [click,setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false);

    const {loggedIn} = useContext(AuthContext)
    const { getLoggedIn } = useContext(AuthContext)
    async function logOut(){
        await axios.get("http://localhost:1337/auth/logout")
        await getLoggedIn()
    }
    return (
        <>
            <nav className="navbars">
               <div className="navbar-containers">
                <Link to='/' className="navbar-logos">
                    ServiceX <i className='fas fa-wrench' />
                </Link>
                <div className='menus-icons' onClick={handleClick}>
                    <i className={ click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                    <ul className={click ? 'nav-menus active': 'nav-menus' }>
                        <li className='navs-items'>
                            <Link to='/' className='navs-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        { loggedIn === false &&
                        <li className='navs-items'>
                        <Link to='/services' className='navs-links' onClick={closeMobileMenu}>
                                Services
                        </Link>
                        </li>
                        }
                        { loggedIn===false&&
                        <li className='navs-items'>
                           <Link to='/dashboard' className='navs-links' onClick={closeMobileMenu}>
                                Dashboad
                            </Link>
                        </li>
                        }   
                        { loggedIn===true&&
                        <li className='navs-items'>
                            <Link to='/map' className='navs-links' onClick={closeMobileMenu}>
                                Car Booking
                            </Link>
                        
                        </li>
                        }
                         { loggedIn&&
                        <li className='navs-items'>
                           <Link to='/mechanic' className='navs-links' onClick={closeMobileMenu}>
                                Mechanic Booking
                            </Link>
                        </li>
                            }
                            {loggedIn&&
                            <li className='navs-items'>
                                <Link to='/' className='navs-links' onClick={logOut}>
                                        Sign out
                                </Link>
                            </li>
                        }

                    </ul>
               </div> 
            </nav>
        </>
    )
}

export default Navbar
