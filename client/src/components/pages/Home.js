import React from 'react'
import Button from '../Button';
import '../../App.css'
import './Home.css'
function Home() {
    return (
          <div className='cont'>
            <video src="/videos/car.mp4" autoPlay loop muted />
            <h1>BOOK A CAR WITH JUST ONE CLICK</h1>
            <p>BOOK NOW</p>
            <div className='hero-btns'>
              <Button variant="outlined" color="secondary">GET STARTED</Button>
            </div>
        </div>
          
    )
}

export default Home
