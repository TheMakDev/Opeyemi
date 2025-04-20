import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import image from '../../assets/image.png'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
          <div className="about-left">
            <img src={image} alt="" />
          </div>
          <div className="about-right">
            <div className="about-para">
              <p>I’m Peter Opeyemi James, a software engineer passionate about turning ideas into smooth and meaningful digital experiences.</p>
              <p>I Peter Opeyemi James is a passionate software engineer, dedicated to crafting clean and efficient digital solutions. With a sharp eye for detail, he transforms ideas into smooth, user-friendly experiences.</p>
            </div>
            <div className="about-skills">
              <div className="about-skill"><p>Web Development</p><hr style={{width: "70%"}}/></div>
              <div className="about-skill"><p>Artificial Intelligence</p><hr style={{width: "60%"}}/></div>
              <div className="about-skill"><p>App Management</p><hr style={{width: "60%"}}/></div>
              <div className="about-skill"><p>Project Managemnet</p><hr style={{width: "45%"}}/></div>
            </div>
          </div>
        </div>
        <div className="about-achievements">
          <div className="about-achievement">
            <h1>10+</h1>
            <p>YEARS OF EXPERIENCE</p>
          </div>
          <hr />
          <div className="about-achievement">
            <h1>15+</h1>
            <p>HAPPY CLIENTS</p>
          </div>
          <hr />
          <div className="about-achievement">
            <h1>90+</h1>
            <p>PROJECT COMPLETED</p>
          </div>
        </div>
    </div>
  )
}

export default About