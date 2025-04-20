import React from 'react'
import './Service.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import services_Data from '../../assets/services_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const Service = () => {
  return (
    <div id='service' className='service'>
        <div className="services-title">
            <h1>My services</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="services-container">
            {
               services_Data.map((service,map) =>{
                return <div className="services-format">
                    <h3>{service.s_no}</h3>
                    <h2>{service.s_name}</h2>
                    <p>{service.s_desc}</p>
                    <div className="service-readmore">
                        <p>Read more</p>
                        <img src={arrow_icon} alt="" />
                    </div>
                </div>
               }) 
            }
        </div>
    </div>
  )
}

export default Service
