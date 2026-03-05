import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { BsSun, BsRobot, BsMoon } from "react-icons/bs";
import AIAssistant from './AIAssistant';

const HeaderContainer = styled.nav`
  position: fixed;
  top: 25px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  width: 90%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background: var(--header-bg);
  backdrop-filter: blur(12px);
  border: 1px solid var(--header-border);
  border-radius: 50px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;

  @media (max-width: 992px) {
    top: 15px;      /* Ensure it stays at the top on tablet/mobile */
    bottom: auto; 
    width: 95%;
  }
`;

const LogoSection = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  .logo-circle {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background: var(--logo-bg);
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--logo-text);
    font-family: 'Playfair Display', serif;
    font-weight: 700;
    font-size: 1.2rem;
    position: relative;
    border: 1px solid rgba(229, 185, 92, 0.2);
    
    .logo-text {
      position: absolute;
      bottom: -4px;
      font-size: 0.25rem;
      letter-spacing: 0.5px;
      color: var(--text-muted);
      font-family: 'Inter', sans-serif;
      text-transform: uppercase;
    }
  }
`;

const DesktopNav = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;

  @media (max-width: 992px) {
    display: none; /* Hide standard links on mobile/tablet */
  }

  a {
    color: var(--nav-text);
    text-decoration: none;
    font-size: 0.95rem;
    font-weight: 500;
    transition: color 0.2s ease;
    font-family: 'Inter', sans-serif;

    &:hover {
      color: #F05A28;
    }
  }
`;

const IconGroup = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

const IconButton = styled.button`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: transparent;
  border: 1px solid var(--header-border);
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--text-color);
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
    border-color: rgba(255, 255, 255, 0.2);
  }

  &.theme-icon {
    color: #fca311;
  }
  
  &.robot-icon {
    color: var(--text-color);
  }

  svg {
    font-size: 1.3rem;
  }
`;

const Header = () => {
  const [theme, setTheme] = useState("dark");
  const [isAssistantOpen, setIsAssistantOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme") || "dark";
    setTheme(savedTheme);
    if (savedTheme === "light") {
      document.body.classList.add("light-mode");
    } else {
      document.body.classList.remove("light-mode");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("portfolio-theme", newTheme);
    if (newTheme === "light") {
      document.body.classList.add("light-mode");
    } else {
      document.body.classList.remove("light-mode");
    }
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
      <HeaderContainer>
        <LogoSection onClick={scrollToTop}>
          <div className="logo-circle">MA</div>
        </LogoSection>

        <DesktopNav>
          <a href="#home" onClick={(e) => { e.preventDefault(); scrollToTop(); }}>Home</a>
          <a href="#about" onClick={(e) => {
            e.preventDefault();
            document.querySelector('.about-section')?.scrollIntoView({ behavior: 'smooth' });
          }}>About</a>
          <a href="#skills" onClick={(e) => {
            e.preventDefault();
            document.querySelector('.tech-section, .skills-wrapper')?.scrollIntoView({ behavior: 'smooth' });
          }}>Skills</a>
          <a href="#contact" onClick={(e) => {
            e.preventDefault();
            document.querySelector('.contact-section, form')?.scrollIntoView({ behavior: 'smooth' });
          }}>Contact</a>
        </DesktopNav>

        <IconGroup>
          <IconButton className="theme-icon" aria-label="Toggle Theme" onClick={toggleTheme}>
            {theme === "dark" ? <BsSun /> : <BsMoon />}
          </IconButton>
          <IconButton className="robot-icon" aria-label="AI Agent" onClick={() => setIsAssistantOpen(true)}>
            <BsRobot />
          </IconButton>
        </IconGroup>
      </HeaderContainer>
      <AIAssistant isOpen={isAssistantOpen} onClose={() => setIsAssistantOpen(false)} />
    </>
  );
};

export default Header;