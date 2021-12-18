import React from 'react'
import '../App.css'
import { Button } from './Button'
import './HeroSection.css'


function HeroSection() {
    return (
        <div className='hero-container'>
            <video src="../images/video-2.mp4" autoPlay loop muted />
            <h1>NFT STUFF</h1>
            <p>JOIN NOW</p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline'
                buttonSize='btn--large'>SIGN UP</Button>
                <Button className='btns' buttonStyle='btn--primary'
                buttonSize='btn--large'>WATCH NOW <i className='far fa-play-circle' /></Button>
            </div>
        </div>
    )
}

export default HeroSection
