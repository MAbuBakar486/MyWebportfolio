import React from "react";
import styled from "styled-components";
import { Slide } from "react-awesome-reveal";
import { FaCode, FaPalette, FaDatabase, FaFolderOpen, FaMobileAlt } from "react-icons/fa";

const SectionWrapper = styled.section`
  padding: 5rem 0;
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionHeader = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--text-color);
  margin-bottom: 3.5rem;
  font-family: 'Inter', sans-serif;
  
  span {
    color: #F05A28; /* Primary Orange */
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 20px;
  margin-bottom: 20px;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const BottomGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const SkillCard = styled.div`
  background: var(--card-bg);
  border-radius: 24px;
  padding: 32px 28px;
  position: relative;
  overflow: hidden;
  border: 1px solid var(--card-border);
  display: flex;
  flex-direction: column;
  min-height: 280px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }
  
  /* Colored top-left glow */
  &::before {
    content: '';
    position: absolute;
    top: -50px;
    left: -50px;
    width: 150px;
    height: 150px;
    background: radial-gradient(circle, ${(p) => p.glowColor || 'rgba(255,255,255,0.05)'} 0%, transparent 70%);
    opacity: 0.15;
    z-index: 0;
  }
`;

const IconCircle = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.03);
  color: ${(p) => p.color || 'var(--text-color)'};
  font-size: 1.3rem;
  margin-bottom: auto; /* Pushes content down */
  position: relative;
  z-index: 1;
  border: 1px solid var(--card-border);
`;

const CardDecoration = styled.div`
  position: absolute;
  top: 32px;
  right: 28px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  
  span {
    display: block;
    width: 20px;
    height: 2px;
    background: ${(p) => p.color || 'var(--card-border)'};
    border-radius: 2px;
  }
  span:nth-child(2) {
    width: 12px;
    margin-left: auto;
  }
`;

const CardTitle = styled.h3`
  font-size: 1.6rem;
  font-weight: 800;
  color: var(--text-color);
  margin: 30px 0 24px 0;
  position: relative;
  z-index: 1;
  font-family: 'Inter', sans-serif;
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  position: relative;
  z-index: 1;
`;

const Tag = styled.span`
  background: var(--bg-color);
  color: var(--text-muted);
  padding: 8px 16px;
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: 500;
  border: 1px solid var(--card-border);
  transition: all 0.2s ease;

  &:hover {
    background: var(--header-bg);
    color: var(--text-color);
    border-color: #F05A28;
  }
`;

export default function SkillsAndTech() {
  return (
    <SectionWrapper>
      <Slide direction="up" triggerOnce>
        <SectionHeader>
          Skills & <span>Technologies</span>
        </SectionHeader>

        {/* Top Row: Frontend (2/3) & UI/UX (1/3) */}
        <GridContainer>
          {/* Frontend */}
          <SkillCard
            glowColor="#ff7043"
            style={{ borderColor: 'rgba(255, 112, 67, 0.2)' }}
          >
            <IconCircle color="#ff7043"><FaCode /></IconCircle>
            <CardDecoration color="#ff7043"><span></span><span></span></CardDecoration>
            <CardTitle>Frontend</CardTitle>
            <TagsContainer>
              <Tag>Flutter</Tag>
              <Tag>Dart</Tag>
              <Tag>State Management</Tag>
              <Tag>APIs</Tag>
              <Tag>Animations</Tag>
              <Tag>Responsive UI</Tag>
            </TagsContainer>
          </SkillCard>

          {/* UI/UX */}
          <SkillCard glowColor="#b388ff">
            <IconCircle color="#b388ff"><FaPalette /></IconCircle>
            <CardDecoration color="#b388ff"><span></span><span></span></CardDecoration>
            <CardTitle>UI/UX</CardTitle>
            <TagsContainer>
              <Tag>Material Design</Tag>
              <Tag>Cupertino</Tag>
              <Tag>Theming</Tag>
              <Tag>Accessibility</Tag>
              <Tag>Prototyping</Tag>
            </TagsContainer>
          </SkillCard>
        </GridContainer>

        {/* Bottom Row: Backend, Management, Publishing */}
        <BottomGridContainer>
          {/* Backend & Tools */}
          <SkillCard glowColor="#69f0ae">
            <IconCircle color="#69f0ae"><FaDatabase /></IconCircle>
            <CardDecoration color="#69f0ae"><span></span><span></span></CardDecoration>
            <CardTitle>Backend & Tools</CardTitle>
            <TagsContainer>
              <Tag>ASP .NET</Tag>
              <Tag>Firebase</Tag>
              <Tag>SQLite</Tag>
              <Tag>Git/GitHub</Tag>
              <Tag>REST APIs</Tag>
              <Tag>SDKs</Tag>
            </TagsContainer>
          </SkillCard>

          {/* Management */}
          <SkillCard glowColor="#ffd54f">
            <IconCircle color="#ffd54f"><FaFolderOpen /></IconCircle>
            <CardDecoration color="#ffd54f"><span></span><span></span></CardDecoration>
            <CardTitle>Management</CardTitle>
            <TagsContainer>
              <Tag>Agile</Tag>
              <Tag>SDLC</Tag>
              <Tag>Jira</Tag>
              <Tag>Trello</Tag>
              <Tag>Team Leadership</Tag>
            </TagsContainer>
          </SkillCard>

          {/* App Publishing */}
          <SkillCard glowColor="#ff5252">
            <IconCircle color="#ff5252"><FaMobileAlt /></IconCircle>
            <CardDecoration color="#ff5252"><span></span><span></span></CardDecoration>
            <CardTitle>App Publishing</CardTitle>
            <TagsContainer>
              <Tag>Play Store</Tag>
              <Tag>App Store</Tag>
              <Tag>ASO</Tag>
              <Tag>Release Management</Tag>
            </TagsContainer>
          </SkillCard>

        </BottomGridContainer>
      </Slide>
    </SectionWrapper>
  );
}
