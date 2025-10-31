import React from 'react'
import { Zoom, Slide } from 'react-awesome-reveal';

const Services = () => {
  return (
    <div className="container pillarscontainer" id='services'>
    <div className="service-wrapper">
        <div className="service">
            {/*
            <h2 text="PILARS OF ISLAM" color="black" /> */}
                <Zoom direction="top">
                <h2 className="text-center text-white" style={{fontFamily:"tiempos,serif"}}>Services</h2>
                </Zoom>
            <div className="Scards">
            <Slide direction='left'>
            <div className="Scard">
                <i class='bx bxl-jsfiddle'></i>
                    <h2>Software Development</h2>
                    <p>Deploy the application to the provided server (upon instructions) and launch the application.</p>
                </div>
            </Slide>
            <Slide direction='down'>
                <div className="Scard">
                <i className='bx bx-desktop'></i>
                    <h2>Website Development</h2>
                    <p>I’m committed to delivering modern website solutions. If you need the perfect team, reach out 24/7 !</p>
                </div></Slide>
            <Slide direction='right'>
                <div className="Scard">
                    <i class='bx bx-code-alt'></i>
                    <h2>Website Designer</h2>
                    <p>Passionate Web Designer focused on creating modern, responsive, and user-friendly websites.</p>
                </div>
            </Slide>
            <Slide direction='left'>
            <div className="Scard">
                    <i class='bx bx-mobile'></i>
                        <h2>Mobile Apps</h2>
                        <p>Mobile is the next big thing to grow your business. I provide quality iOS / Android App development services.</p>
                </div>
            </Slide>
            <Slide direction='up'>
                <div className="Scard">
                    <i class='bx bxl-sketch'></i>
                    <h2>Graphic Designer</h2>
                    <p> I bring creativity and visually compelling designs that effectively communicate intended message.</p>
                </div>
            </Slide>
            <Slide direction='right'>
                <div className="Scard">
                    <i class='bx bx-check-circle'></i>
                    <h2>Other Technologies</h2>
                    <p>I am also skilled in working with emerging technologies like ML, Artificial Intelligence, and IoT.</p>
                </div>
            </Slide>
            </div>
        </div>
    </div>
</div>
  )
}

export default Services