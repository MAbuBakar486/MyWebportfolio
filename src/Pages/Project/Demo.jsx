import React from 'react';
import styled from 'styled-components';
import { Slide } from "react-awesome-reveal";
import { Link as ScrollLink } from 'react-scroll';
import { FiBriefcase } from "react-icons/fi";
import { BsCalendarEvent } from "react-icons/bs";
import myimg from '../../assets/heroimg.png';

const primaryOrange = '#F05A28';
const badgeBg = 'rgba(240, 90, 40, 0.1)';

const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4rem 0 4rem;
  width: 85%;
  max-width: 1200px;
  margin: 0 auto;
  z-index: 1;

  @media (max-width: 992px) {
    flex-direction: column;
    padding-top: 92px;
    gap: 4rem;
  }
`;

const LeftSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  
  @media (max-width: 992px) {
    align-items: center;
    text-align: center;
  }
`;

const TopBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  background: ${badgeBg};
  border: 1px solid rgba(240, 90, 40, 0.3);
  padding: 0.5rem 1.2rem;
  border-radius: 50px;
  color: ${primaryOrange};
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 1.5px;
  width: fit-content;

  .dot {
    width: 5px;
    height: 5px;
    background-color: ${primaryOrange};
    border-radius: 50%;
  }
`;

const HeroTitle = styled.h1`
  font-size: 4.2rem;
  line-height: 1.05;
  margin: 0;

  .white-text {
    color: var(--text-color);
    font-weight: 800;
    font-family: 'Inter', system-ui, sans-serif;
    letter-spacing: -1px;
  }
  
  .orange-italic {
    color: ${primaryOrange};
    font-family: 'Playfair Display', Georgia, serif;
    font-style: italic;
    font-weight: 700;
    padding-right: 10px;
  }

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const Subtitle = styled.p`
  color: var(--text-muted);
  font-size: 1.15rem;
  line-height: 1.6;
  max-width: 520px;
  margin: 0;

  .highlight {
    color: ${primaryOrange};
    font-weight: 600;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1.2rem;
  margin-top: 1rem;
  flex-wrap: wrap;
  
  @media (max-width: 992px) {
    justify-content: center;
  }
`;

const ButtonSolid = styled(ScrollLink)`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  background: ${primaryOrange};
  color: white;
  border: none;
  padding: 0.8rem 1.8rem;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(240, 90, 40, 0.3);
  text-decoration: none;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(240, 90, 40, 0.4);
    color: white;
  }
`;



const ButtonExternal = styled.a`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  background: transparent;
  color: var(--text-color);
  border: 1px solid var(--card-border);
  padding: 0.8rem 1.8rem;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;

  &:hover {
    border-color: ${primaryOrange};
    background: rgba(240, 90, 40, 0.05);
    color: ${primaryOrange};
    transform: translateY(-2px);
  }
`;

const SeparatorLine = styled.div`
  width: 100%;
  max-width: 500px;
  height: 1px;
  background: linear-gradient(90deg, var(--card-border) 0%, transparent 100%);
  margin: 1rem 0;
  
  @media (max-width: 992px) {
    background: linear-gradient(90deg, transparent 0%, var(--card-border) 50%, transparent 100%);
  }
`;

const StatsGroup = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  
  @media (max-width: 992px) {
    justify-content: center;
  }
`;

const StatBox = styled.div`
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  padding: 1rem 1.5rem;
  border-radius: 12px;
  text-align: center;
  flex: 1;
  min-width: 120px;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${primaryOrange};
    transform: translateY(-5px);
  }

  h3 {
    margin: 0;
    color: ${primaryOrange};
    font-size: 1.8rem;
    font-weight: 800;
  }

  p {
    margin: 0.2rem 0 0;
    color: var(--text-muted);
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 1px;
  }
`;

const RightSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 420px;
  height: 420px;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(-25px); /* Pulls the image upwards */

  @media (max-width: 992px) {
    width: 360px;
    height: 360px;
  }

  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
  }

  /* ... rest of the corner code stays the same */
  .corner {
    position: absolute;
    width: 80px;
    height: 80px;
    border-color: rgba(240, 90, 40, 0.4);
    border-style: solid;
    border-width: 0;
    transition: all 0.3s ease;
  }

  .top-left {
    top: 5%;
    left: 5%;
    border-top-width: 2px;
    border-left-width: 2px;
    border-top-left-radius: 20px;
  }

  .bottom-right {
    bottom: 5%;
    right: 5%;
    border-bottom-width: 2px;
    border-right-width: 2px;
    border-bottom-right-radius: 20px;
  }
  
  &:hover .top-left {
    top: 2%;
    left: 2%;
  }
  
  &:hover .bottom-right {
    bottom: 2%;
    right: 2%;
  }
`;

const OuterCircle = styled.div`
  width: 85%;
  height: 85%;
  border-radius: 50%;
  padding: 8px;
  background: radial-gradient(circle, rgba(240, 90, 40, 0.08) 0%, transparent 60%);
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 50px rgba(240, 90, 40, 0.05);
  border: 1px solid rgba(240, 90, 40, 0.15);
  z-index: 2;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
    filter: drop-shadow(0 0 15px rgba(0,0,0,0.3));
  }
`;

const BackgroundGlow = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 80%;
  background: ${primaryOrange};
  filter: blur(120px);
  opacity: 0.12;
  border-radius: 50%;
  z-index: 0;
`;

const DecorativeCircle = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 1px solid rgba(240, 90, 40, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: -20%;
  top: 20%;

  @media (max-width: 992px) {
    display: none;
  }

  .inner-dot {
    width: 6px;
    height: 6px;
    background-color: ${primaryOrange};
    border-radius: 50%;
  }
`;

const Demo = () => {
  return (
    <HeroContainer id="home">
      <Slide direction="left" triggerOnce>
        <LeftSection>
          <TopBadge>
            <span className="dot"></span> FLUTTER DEVELOPER <span className="dot"></span> AVAILABLE FOR PROJECTS
          </TopBadge>

          <HeroTitle>
            <span className="white-text">Mobile App</span> <br />
            <span className="orange-italic">Developer &</span> <br />
            <span className="orange-italic">Lead</span>
          </HeroTitle>

          <Subtitle>
            Crafting pixel-perfect cross-platform apps with <span className="highlight">Flutter &amp; Dart</span>. From beautiful UI to buttery-smooth 120fps animations.
          </Subtitle>

          <ButtonGroup>
            <ButtonSolid to="Contact" smooth={true} offset={-77} duration={500}>
              <FiBriefcase size={18} /> Hire Me
            </ButtonSolid>
            <ButtonExternal href="https://calendly.com/dev-hafizbakar020/30min" target="_blank" rel="noreferrer">
              <BsCalendarEvent size={18} /> Book a Call
            </ButtonExternal>
          </ButtonGroup>

          <SeparatorLine />

          <StatsGroup>
            <StatBox>
              <h3>2+</h3>
              <p>YEARS EXP.</p>
            </StatBox>
            <StatBox>
              <h3>5+</h3>
              <p>DEVS TRAINED</p>
            </StatBox>
            <StatBox>
              <h3>7+</h3>
              <p>APPS SHIPPED</p>
            </StatBox>
          </StatsGroup>
        </LeftSection>
      </Slide>

      <Slide direction="right" triggerOnce>
        <RightSection>
          <DecorativeCircle><div className="inner-dot"></div></DecorativeCircle>
          <ImageContainer>
            <BackgroundGlow />
            <div className="corner top-left"></div>
            <div className="corner bottom-right"></div>
            <OuterCircle>
              <img src={myimg} alt="Hafiz Abu Bakar" />
            </OuterCircle>
          </ImageContainer>
        </RightSection>
      </Slide>
    </HeroContainer>
  );
};

export default Demo;
