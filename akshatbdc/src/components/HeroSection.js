import React from 'react'
// import '../App.css';
// import { Button } from './Button'
import './HeroSection.css';
import video from '../video-12.mp4';

function MainSection() {
    return (
        <div className="hero-container">
        <video src={video} autoPlay loop muted></video>
         <h1>BIG DATA CENTER OF EXCELLENCE</h1>   
         <div><div></div></div>
         <div className="page-wrapper">
        <div className="swipe-in-text">
            <div className="text1">
            Recruiting The Future<span className="dot dot-1"></span><span className="dot dot-2"></span><span className="dot dot-3"></span>
            </div>
        </div>
    </div>
     
         </div>
    )
}

export default MainSection
