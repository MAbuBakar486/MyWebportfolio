import React from "react";
import styled from "styled-components";
import { Slide } from "react-awesome-reveal";
import {
  FaDesktop,
  FaLayerGroup,
  FaDatabase,
  FaMobileAlt,
  FaUsers,
  FaChartLine
} from "react-icons/fa";

const SectionWrapper = styled.section`
  padding: 5rem 0;
  background-color: transparent;
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--text-color);
  font-family: 'Inter', sans-serif;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SkillCard = styled.div`
  background: var(--card-bg);
  border-radius: 16px;
  padding: 28px 24px;
  border: 1px solid var(--card-border);
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);

  /* Subtle inner gradient for premium feel */
  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background: radial-gradient(circle at top left, rgba(240, 90, 40, 0.03), transparent 70%);
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-5px);
    border-color: rgba(240, 90, 40, 0.5);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1), 0 0 20px rgba(240, 90, 40, 0.2);
    
    .icon-container {
      color: #F05A28; /* Glows orange on hover */
      transform: scale(1.1);
    }
  }
`;

const IconContainer = styled.div`
  font-size: 2rem;
  color: var(--nav-text);
  margin-bottom: 20px;
  transition: all 0.3s ease;
`;

const SkillTitle = styled.h4`
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-color);
  margin-bottom: 12px;
  font-family: 'Inter', sans-serif;
`;

const SkillDesc = styled.p`
  font-size: 0.95rem;
  color: var(--text-muted);
  line-height: 1.6;
  margin: 0;
`;

const skills = [
  {
    icon: <FaDesktop />,
    title: "Jetpack Compose",
    desc: "I build modern, declarative UIs efficiently using Jetpack Compose, enhancing performance and maintainability.",
  },
  {
    icon: <FaLayerGroup />,
    title: "Clean Architecture",
    desc: "I structure code with Clean Architecture and MVVM to ensure scalability, testability, and maintainability of apps.",
  },
  {
    icon: <FaDatabase />,
    title: "Firebase & APIs",
    desc: "I integrate Firebase services and REST APIs to handle authentication, data sync, push notifications, and more.",
  },
  {
    icon: <FaMobileAlt />,
    title: "XML & Compose",
    desc: "I quickly prototype screens using both traditional XML and Compose to test UI ideas and gather early feedback.",
  },
  {
    icon: <FaUsers />,
    title: "Agile Collaboration",
    desc: "I work with cross-functional teams, using Notion, ClickUp, and App Distribution to streamline development.",
  },
  {
    icon: <FaChartLine />,
    title: "Continuous Improvement",
    desc: "I take feedback from users and stakeholders to iteratively improve features and user experience.",
  },
];

const SkillsSection = () => {
  return (
    <SectionWrapper>
      <Slide direction="up" triggerOnce>
        <SectionHeader>
          <Title>My Way to Work</Title>
        </SectionHeader>

        <GridContainer>
          {skills.map((skill, index) => (
            <SkillCard key={index}>
              <IconContainer className="icon-container">
                {skill.icon}
              </IconContainer>
              <SkillTitle>{skill.title}</SkillTitle>
              <SkillDesc>{skill.desc}</SkillDesc>
            </SkillCard>
          ))}
        </GridContainer>
      </Slide>
    </SectionWrapper>
  );
};

export default SkillsSection;