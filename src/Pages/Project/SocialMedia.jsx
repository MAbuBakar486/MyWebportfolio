import React from 'react';
import styled from 'styled-components';
import { Slide } from 'react-awesome-reveal';
import {
  FaGithub,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
  FaWhatsapp,
  FaCalendarAlt
} from 'react-icons/fa';
import { SiFiverr, SiUpwork } from 'react-icons/si';

const SocialContainer = styled.section`
  padding: 5rem 0 6rem 0;
  width: 85%;
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
  border-top: 1px solid var(--card-border);
`;

const Header = styled.h2`
  font-size: 2.8rem;
  font-weight: 800;
  color: var(--text-color);
  margin-bottom: 1rem;
  font-family: 'Inter', sans-serif;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const Subtitle = styled.p`
  color: var(--text-muted);
  font-size: 1.1rem;
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto 3.5rem auto;
`;

const ButtonsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
`;

const SocialButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: 50px;
  padding: 12px 24px;
  color: var(--text-color);
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.2s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);

  svg {
    font-size: 1.1rem;
    color: #F05A28;
    transition: transform 0.2s ease;
  }

  &:hover {
    background: var(--header-bg);
    border-color: #F05A28;
    color: #F05A28;
    transform: translateY(-2px);

    svg {
      transform: scale(1.1);
    }
  }
`;

const SocialMedia = () => {
  const socialLinks = [

    { icon: <FaCalendarAlt />, label: "Schedule Call", href: "https://calendly.com/dev-hafizbakar020/30min" },
    { icon: <FaGithub />, label: "GitHub", href: "https://github.com/MAbuBakar486/" },
    // { icon: <FaTwitter />, label: "Twitter", href: "https://twitter.com" },
    { icon: <FaLinkedinIn />, label: "LinkedIn", href: "https://www.linkedin.com/in/muhammad-abu-bakar-027b47381" },
    { icon: <SiFiverr />, label: "Fiverr", href: "https://www.fiverr.com/hafizbakar632/" },
    { icon: <SiUpwork />, label: "Upwork", href: "https://www.upwork.com/freelancers/~01e576a533296361c1" },
    { icon: <FaFacebookF />, label: "Facebook", href: "https://www.facebook.com/profile.php?id=100037329675644" },
    { icon: <FaInstagram />, label: "Instagram", href: "https://instagram.com" },
    { icon: <FaEnvelope />, label: "Email", href: "mailto:dev.hafizbakar020@gmail.com" },
    { icon: <FaWhatsapp />, label: "WhatsApp", href: "https://wa.me/92303778240" },
  ];

  return (
    <SocialContainer>
      <Slide direction="up" triggerOnce>
        <Header>Follow on Social Media</Header>
        <Subtitle>
          Let's connect! Follow my channels to stay updated on my latest projects,
          tutorials, and insights into mobile app development.
        </Subtitle>

        <ButtonsGrid>
          {socialLinks.map((link, index) => (
            <SocialButton key={index} href={link.href} target="_blank" rel="noreferrer">
              {link.icon} {link.label}
            </SocialButton>
          ))}
        </ButtonsGrid>
      </Slide>
    </SocialContainer>
  );
};

export default SocialMedia;
