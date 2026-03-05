import React from 'react';
import styled from 'styled-components';
import { Slide } from "react-awesome-reveal";
import { FaMobileAlt, FaLightbulb, FaServer, FaPalette, FaRocket, FaWrench, FaUsers } from "react-icons/fa";
import { SiN8N } from "react-icons/si";

const primaryOrange = "#F05A28";

const ExpertiseContainer = styled.div`
  padding: 6rem 0;
  width: 85%;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 5rem;
`;

const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 16px;
  border-radius: 50px;
  border: 1px solid rgba(240, 90, 40, 0.3);
  background: rgba(240, 90, 40, 0.05);
  color: ${primaryOrange};
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  margin-bottom: 1.5rem;

  .icon {
    font-size: 1rem;
  }
`;

const Title = styled.h2`
  font-size: 3.5rem;
  color: var(--text-color);
  font-family: 'Inter', sans-serif;
  font-weight: 800;
  margin-bottom: 1rem;

  span {
    color: ${primaryOrange};
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.p`
  color: var(--text-muted);
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

const TimelineWrapper = styled.div`
  position: relative;
  max-width: 1000px;
  margin: 0 auto;

  /* Central Line */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    width: 2px;
    background: var(--card-border);
    background: linear-gradient(180deg, transparent 0%, rgba(240,90,40,0.4) 50%, transparent 100%);
    transform: translateX(-50%);
  }

  @media (max-width: 768px) {
    &::before {
      left: 30px;
    }
  }
`;

const TimelineItem = styled.div`
  display: flex;
  justify-content: ${props => props.isEven ? 'flex-start' : 'flex-end'};
  align-items: center;
  width: 100%;
  margin-bottom: 3rem;
  position: relative;

  @media (max-width: 768px) {
    justify-content: flex-end;
  }
`;

const TimelineContent = styled.div`
  width: 45%;
  position: relative;

  @media (max-width: 768px) {
    width: calc(100% - 80px); /* 30px line + 50px space */
  }
`;

const Node = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: ${props => props.color || primaryOrange};
  border: 4px solid var(--bg-color);
  box-shadow: 0 0 0 2px var(--card-border), 0 0 15px ${props => props.color || primaryOrange};
  z-index: 2;

  @media (max-width: 768px) {
    left: 30px;
  }
`;

const Card = styled.div`
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: 16px;
  padding: 24px;
  display: flex;
  align-items: flex-start;
  gap: 20px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);

  &:hover {
    transform: translateY(-5px);
    border-color: ${primaryOrange};
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  }
`;

const IconWrapper = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: rgba(240, 90, 40, 0.05);
  border: 1px solid var(--card-border);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.4rem;
  color: ${props => props.color || '#fff'};
  box-shadow: inset 0 0 20px ${props => props.color ? `${props.color}20` : 'transparent'};
  flex-shrink: 0;
`;

const TextContent = styled.div`
  h4 {
    color: var(--text-color);
    font-size: 1.15rem;
    font-weight: 700;
    margin-bottom: 8px;
    font-family: 'Inter', sans-serif;
  }

  p {
    color: var(--text-muted);
    font-size: 0.9rem;
    line-height: 1.6;
    margin: 0;
  }
`;

const expertiseData = [
  {
    title: "Cross-Platform Mobile Apps",
    desc: "Building beautiful, performant apps for iOS and Android using a single Flutter codebase.",
    icon: <FaMobileAlt />,
    color: "#ff7e27" // Orange
  },
  {
    title: "App Prototyping & MVP",
    desc: "Rapid prototyping to validate ideas and build minimum viable products efficiently.",
    icon: <FaLightbulb />,
    color: "#ffc107" // Yellow
  },
  {
    title: "API & Backend Integration",
    desc: "Seamless integration with REST APIs, Firebase, and third-party services.",
    icon: <FaServer />,
    color: "#20c997" // Teal
  },
  {
    title: "UI/UX Design",
    desc: "Converting Figma designs into pixel-perfect, responsive mobile interfaces.",
    icon: <FaPalette />,
    color: "#9c27b0" // Purple
  },
  {
    title: "App Store Deployment",
    desc: "End-to-end deployment to Google Play Store and Apple App Store.",
    icon: <FaRocket />,
    color: "#ff5722" // Deep Orange
  },
  {
    title: "App Maintenance & Debugging",
    desc: "Ongoing support, performance optimization, and bug fixing for live applications.",
    icon: <FaWrench />,
    color: "#ffb300" // Amber
  },
  {
    title: "Team Collaboration",
    desc: "Leading teams, mentoring developers, and implementing agile methodologies.",
    icon: <FaUsers />,
    color: "#e91e63" // Pink
  },
  {
    title: "N8n & Automation",
    desc: "Integrating N8n workflows for automated processes, AI agents, and seamless data sync across apps.",
    icon: <SiN8N />,
    color: "#FF6D5A" // n8n Orange/Coral
  }
];

const Expertise = () => {
  return (
    <ExpertiseContainer id="expertise">
      <SectionHeader>
        <Slide direction="up" triggerOnce>
          <Badge>
            <span className="icon">🔍</span> WHAT I DO
          </Badge>
          <Title>My <span>Expertise</span></Title>
          <Subtitle>
            Specialized skills and services I bring to every project to deliver top-tier digital products.
          </Subtitle>
        </Slide>
      </SectionHeader>

      <TimelineWrapper>
        {expertiseData.map((item, index) => {
          const isEven = index % 2 === 0;
          return (
            <TimelineItem key={index} isEven={isEven}>
              <Node color={item.color} />
              <TimelineContent>
                <Slide direction={isEven ? "left" : "right"} triggerOnce fraction={0.3}>
                  <Card>
                    <IconWrapper color={item.color}>
                      {item.icon}
                    </IconWrapper>
                    <TextContent>
                      <h4>{item.title}</h4>
                      <p>{item.desc}</p>
                    </TextContent>
                  </Card>
                </Slide>
              </TimelineContent>
            </TimelineItem>
          );
        })}
      </TimelineWrapper>
    </ExpertiseContainer>
  );
};

export default Expertise;
