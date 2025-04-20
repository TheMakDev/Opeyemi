import React from 'react'
import './Hero.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import image from '../../assets/image.png'

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={image} alt="" />
        <h1><span>I'm Peter Opeyemi James,</span> A software Engineer based in UK</h1>

        <p>I am a software engineer from Nigeria with 10 years of experience in multiple companies like microsoft. Trade and apples</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
            <div className="hero-resume">My resume</div>
        </div>
    </div>
  )
}

export default Hero