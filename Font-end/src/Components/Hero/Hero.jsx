import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_ban.png'
import { Link } from 'react-scroll'



const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>NEW ARRIVALS ONLY</h2>
        
          <div className="hero-hand-icon">
                <p>New</p>
                <img src={hand_icon} alt=''/>
          </div>
            <p>Collection</p>
            <p>For Everyone</p>
        
          <div className="hero-latest-btn">
            <Link to='new collection' style={{ textDecoration : 'none' ,  color: 'inherit', cursor:'pointer' }}><div>Latest Collection</div></Link>
            <img src={arrow_icon} alt=''/>
          </div>
        </div>
        <div className="hero-right">
            <img src={hero_image} alt=''/>
        </div>
    </div>
  )
}

export default Hero
