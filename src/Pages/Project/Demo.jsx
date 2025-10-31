import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-scroll';
import { Typewriter } from 'react-simple-typewriter'
import { SiFacebook } from "react-icons/si";
import { GiEarthAmerica } from "react-icons/gi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { Slide } from "react-awesome-reveal";
import CV from '../../assets/Updated-Bakar-CV.pdf'
import myimg from '../../assets/Hafiz.png'
import myimg1 from '../../assets/Hafiz-image-modified.png'

const Demo = () => {
  return (
    <Container>
        <Slide direction="left">
        <Texts>
          <h4 style={{color:'wheat'}}>
            Hello <span className="green" style={{color:'rgb(251, 255, 21)'}}>I'am</span>
          </h4>
          <h2 className="green">Muhammad Abu Bakar</h2>
          <h5>
          <span className='Typewriter'>
            <Typewriter 
            loop
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            words={['Web and Mobile App Developer','Front-end Developer','Firebase App Developer']}
            />
        </span>
          </h5>
          <p style={{color:'wheat'}}>
          I am a skilled website developer and a dedicated app developer specializing in Flutter <br />and FlutterFlow. I have experience building responsive, user-friendly websites and <br /> creating high performance, cross-platform mobile applications. My expertise allows me to deliver solutions  to meet clients' needs."
          </p>
          <div className='dfdg' style={{display:'flex', gap:'1.2rem'}}>
          <div className="hero-button_1 text-white"><Link to="Contact" smooth={true} offset={-77} duration={500} >Connect With Me</Link></div>
            {/* <Resume className="hero-button_1 resume" style={{background:'transparent',color:'#fff',border:'2px solid red'}}>
            <div><a href={CV} download={CV} smooth={true} offset={-77} duration={500} style={{color:'#00ff37'}}>Check Resume</a></div>  
            </Resume>           */}
          </div>
          <Social>
            <p style={{color:'white'}}>Check out</p>
            <div className="social-icons">
            <span>
                <a href="/" target="_blank" rel="noopener noreferrer">
                  <GiEarthAmerica />
                </a>
              </span>
              <span>
                <a href="https://github.com/MAbuBakar486" target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </a>
              </span>
              <span>
                <a href="https://www.linkedin.com/in/hafiz-muhammad-abu-bakar-027b47381/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedinIn />
                </a>
              </span>
              <span>
                <a href="https://www.facebook.com/profile.php?id=100037329675644" target="_blank" rel="noopener noreferrer">
                  <SiFacebook />
                </a>
              </span>
            </div>
          </Social>
        </Texts>
      </Slide>
      <Slide direction="right">
        <Profile>
          <img
            src={myimg1}
            alt="profile"
          />
        </Profile>
      </Slide>
    </Container>
  )
}

export default Demo

const Container = styled.div`
  display: flex;
  gap: 2rem;
  padding-top: 8rem;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  z-index: 1;
  @media (max-width: 840px) {
  padding-top: 3rem;
    width: 90%;
  }

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;
const Texts = styled.div`
  flex: 1;
  h4 {
    padding: 1rem 0;
    font-weight: 500;
  }
  h1 {
    font-size: 2rem;
    font-family: "Secular One", sans-serif;
    letter-spacing: 2px;
  }
  h3 {
    font-weight: 500;
    font-size: 1.2rem;
    padding-bottom: 1.2rem;
    text-transform: capitalize;
  }
  p {
    font-weight: 300;
  }

  button {
    padding: 0.7rem 2rem;
    margin-top: 3rem;
    cursor: pointer;
    background-color: #01be96;
    border: none;
    color: #fff;
    font-weight: 500;
    filter: drop-shadow(0px 10px 10px #01be9551);
    :hover {
      filter: drop-shadow(0px 10px 10px #01be9570);
    }
  }
`;
const Social = styled.div`
  margin-top: 3rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  
  p {
    font-size: 0.9rem;
    @media (max-width: 690px) {
      font-size: 0.7rem;
    }
  }

  .social-icons {
    display: flex;
    align-items: center;
    gap: 1rem;
    
    span {
      width: 2.3rem;
      height: 2rem;
      clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
      background-color: #01be96;
      position: relative;
      display: flex; /* To center the icon within the span */
      align-items: center;
      justify-content: center;
      transition: transform 400ms ease-in-out;

      &:hover {
        transform: rotate(360deg);
      }

      a {
        color: #fff;
        position: relative; /* Changed to relative to stay centered inside the rotating span */
      }
    }
  }
`;

const Resume = styled.div`
  Resume:hover{
      background:yellow;
      // background-color: linear-gradient(264deg, #DF8908 -5.09%, #B415FF 106.28%);
  }
`
const Profile = styled.div`
  img {
    width: 25rem;
    // filter: drop-shadow(0px 10px 10px #01be9570);
    transition: transform 400ms ease-in-out;
    @media (max-width: 790px) {
      width: 20rem;
    }

    @media (max-width: 660px) {
      width: 18rem;
    }

    @media (max-width: 640px) {
      width: 100%;
    }
  }

  :hover img {
    transform: translateY(-10px);
  }
`;
