// ProjectsStylishEnhanced.jsx
import React, { useRef, useState } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FiGrid, FiMonitor } from "react-icons/fi";
import { FaGithub as SiGithub, FaPlay } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

import img1 from "../../assets/Project-1.png";
import img2 from "../../assets/Project-2.png";
import img3 from "../../assets/Project-3.PNG";

/* react-slick global fixes */
import { createGlobalStyle } from "styled-components";
const GlobalFixes = createGlobalStyle`
  .slick-list { overflow: hidden !important; }
  .slick-track { display:flex !important; align-items:stretch !important; }
  .slick-slide { display:block !important; }
  .slick-slide > div { height: 100%; }
`;

/* Data */
const PROJECTS = [

  {
    img: img2,
    title: "School Management Mobile App",
    desc: "A teacher attendance system with geo-fencing to prevent proxy attendance. Includes admin dashboard, leave management, and secure one-device-per-teacher verification.",
    tags: ["Flutter", "Firebase", "GetX", "Geolocation"],
    link: "#",
    github: "#",
    category: "Mobile Application"
  },

  {
    img: img3,
    title: "AgriRoute Campus Navigation App",
    desc: "A smart navigation app for University of Agriculture Faisalabad that helps users explore faculties, hostels, offices, and facilities with real-time location tracking.",
    tags: ["Flutter", "Google Maps API", "Firebase"],
    link: "#",
    github: "#",
    category: "Mobile Application"
  },

  {
    img: img1,
    title: "E-Commerce Mobile Application",
    desc: "A full-featured e-commerce mobile application with product catalog, shopping cart, checkout system, payment gateway integration, and order management.",
    tags: ["Flutter", "Firebase", "Node.js"],
    link: "#",
    github: "#",
    category: "Mobile Application"
  },

  {
    img: img2,
    title: "Al-Quran Mobile App",
    desc: "A feature-rich Quran application supporting multiple translations, audio recitation, bookmarking, and Qibla direction using device sensors.",
    tags: ["Flutter", "Firebase", "REST API"],
    link: "#",
    github: "#",
    category: "Mobile Application"
  },

  {
    img: img3,
    title: "Tourist Guide Mobile App",
    desc: "A tourism mobile application that helps users discover travel destinations with interactive maps, geolocation services, and real-time navigation.",
    tags: ["Flutter", "Firebase", "Google Maps"],
    link: "#",
    github: "#",
    category: "Mobile Application"
  }
];

const settings = { dots: false, infinite: true, speed: 520, slidesToShow: 1, slidesToScroll: 1, arrows: false };

const MORE_WORK = [
  {
    img: "https://image.thum.io/get/width/1200/https://www.thejourneyloop.com/",
    title: "The Journey Loop",
    desc: "A modern travel and car rental platform based in Lahore, Pakistan. The platform allows users to explore tour packages, book rental vehicles, and manage travel services through a responsive and user-friendly interface.",
    tags: ["React", "Firebase", "Node.js", "Travel Platform"],
    link: "https://www.thejourneyloop.com/"
  },

  {
    img: "https://image.thum.io/get/width/1200/https://madani-marriage.vercel.app/",
    title: "Madani Marriage Platform",
    desc: "A Muslim matrimonial platform designed to help individuals and families find compatible life partners while maintaining privacy, Islamic values, and a secure matchmaking process.",
    tags: ["React", "Firebase", "Authentication", "Web Platform"],
    link: "https://madani-marriage.vercel.app/"
  },

  {
    img: "https://image.thum.io/get/width/1200/https://pgs-website.vercel.app/",
    title: "PGS Corporate Website",
    desc: "A professional corporate website for a UK-based company operating in Pakistan, designed to showcase services, company profile, and business solutions with a clean and responsive UI.",
    tags: ["React", "Modern UI", "Business Website"],
    link: "https://pgs-website.vercel.app/"
  },

  {
    img: "https://image.thum.io/get/width/1200/https://makashanwar.vercel.app/",
    title: "Professional Portfolio Website",
    desc: "A modern personal portfolio website designed to highlight professional experience, projects, and technical skills with a clean interface and responsive design.",
    tags: ["React", "Portfolio", "Responsive UI"],
    link: "https://makashanwar.vercel.app/"
  },
  { img: img2, title: "Coming Soon Project", desc: "A brand new exciting mobile application currently under development.", tags: ["Flutter", "Firebase", "Dart"], link: "#", disabled: true },
  { img: img3, title: "Coming Soon Project", desc: "An upcoming cross-platform solution to streamline everyday tasks.", tags: ["React Native", "NodeJS"], link: "#", disabled: true },
  { img: img1, title: "Coming Soon Project", desc: "Innovative new project design focusing on high performance UI/UX.", tags: ["Flutter", "UI/UX", "Figma"], link: "#", disabled: true },
  { img: img2, title: "Coming Soon Project", desc: "Next-generation analytics tool for mobile platforms.", tags: ["Flutter", "REST API", "GetX"], link: "#", disabled: true },
];

export default function ProjectsStylishEnhanced() {
  const sliderRef = useRef(null);
  const [active, setActive] = useState(0);
  const [viewMode, setViewMode] = useState("grid"); // 'slider' | 'grid'
  const [expandedIdx, setExpandedIdx] = useState(null);


  const filteredProjects = PROJECTS;

  /* Framer variants */
  const containerVariant = {
    hidden: { opacity: 0, y: 8 },
    show: { opacity: 1, y: 0, transition: { when: "beforeChildren", staggerChildren: 0.06 } },
    exit: { opacity: 0, y: 6, transition: { duration: 0.18 } },
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 10, scale: 0.995 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.34, ease: "easeOut" } },
    exit: { opacity: 0, y: 6, scale: 0.995, transition: { duration: 0.18 } },
  };

  const modalBackdrop = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.18 } },
    exit: { opacity: 0, transition: { duration: 0.14 } },
  };

  const modalPanel = {
    hidden: { opacity: 0, y: 12, scale: 0.98 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.28, ease: "easeOut" } },
    exit: { opacity: 0, y: 8, scale: 0.98, transition: { duration: 0.14 } },
  };

  return (
    <Wrap>
      <GlobalFixes />

      <HeaderRow>
        {viewMode === "slider" ? (
          <Heading>My recent projects</Heading>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
            <FilterHeaderContainer>
              {/* <div style={{ flex: 1 }} /> */}
              <FilterTitle>Featured <span className="highlight">Projects</span></FilterTitle>
              <Controls>
                <ControlButton title="Grid view" active={viewMode === "grid"} onClick={() => { setViewMode("grid"); setExpandedIdx(null); }} id='project'>
                  <FiGrid size={16} />
                </ControlButton>
                <ControlButton title="Slider view" active={viewMode === "slider"} onClick={() => { setViewMode("slider"); setExpandedIdx(null); }}>
                  <FiMonitor size={16} />
                </ControlButton>
              </Controls>
            </FilterHeaderContainer>
            <FilterDesc>
              A selection of my best work in mobile application development, featuring scalable architectures and beautiful user interfaces.
            </FilterDesc>
          </div>
        )}

        {viewMode === "slider" && (
          <Controls>
            <ControlButton title="Grid view" active={viewMode === "grid"} onClick={() => { setViewMode("grid"); setExpandedIdx(null); }} id='project'>
              <FiGrid size={16} />
            </ControlButton>
            <ControlButton title="Slider view" active={viewMode === "slider"} onClick={() => { setViewMode("slider"); setExpandedIdx(null); }}>
              <FiMonitor size={16} />
            </ControlButton>
          </Controls>
        )}
      </HeaderRow>

      <AnimatePresence mode="wait" exitBeforeEnter>
        {viewMode === "slider" ? (
          <motion.div key="slider" variants={containerVariant} initial="hidden" animate="show" exit="exit">
            <Card as={motion.div} variants={cardVariant}>
              <SliderWrap>
                <Slider ref={sliderRef} {...settings} afterChange={(i) => setActive(i)}>
                  {PROJECTS.map((p, i) => (
                    <ImageWrap key={i}>
                      <Image role="img" aria-label={p.title} style={{ backgroundImage: `url(${p.img})` }} />
                    </ImageWrap>
                  ))}
                </Slider>
              </SliderWrap>

              <InfoArea>
                <Title>{PROJECTS[active]?.title}</Title>
                <Desc>{PROJECTS[active]?.desc}</Desc>

                <Tags>{PROJECTS[active]?.tags?.map((t, idx) => (<Tag key={idx}>{t}</Tag>))}</Tags>

                <Footer>
                  <LeftGroup>
                    <View href={PROJECTS[active]?.link} target="_blank" rel="noreferrer">View Project</View>
                    <GithubBtn href={PROJECTS[active]?.github} target="_blank" rel="noreferrer"><SiGithub style={{ marginRight: 8 }} />GitHub</GithubBtn>
                  </LeftGroup>

                  <RightGroup>
                    <Circle onClick={() => sliderRef.current?.slickPrev()} aria-label="previous"><IoIosArrowBack /></Circle>
                    <Circle onClick={() => sliderRef.current?.slickNext()} aria-label="next"><IoIosArrowForward /></Circle>
                  </RightGroup>
                </Footer>
              </InfoArea>
            </Card>
          </motion.div>
        ) : (
          <motion.div key="grid" variants={containerVariant} initial="hidden" animate="show" exit="exit">
            {/* <GridControls>
              <FilterRow>
                {categories.map((c) => (
                  <FilterPill key={c} active={filter === c} onClick={() => { setFilter(c); setExpandedIdx(null); }}>
                    {c}
                  </FilterPill>
                ))}
              </FilterRow>
            </GridControls> */}

            <GridArea>
              {filteredProjects.map((p, idx) => {
                return (
                  <motion.div key={idx} variants={cardVariant}>
                    <FeaturedCard onClick={() => setExpandedIdx(idx)}>
                      <FeaturedImgWrap>
                        <FeaturedImg style={{ backgroundImage: `url(${p.img})` }} />
                        <FeaturedBadge>⭐ FEATURED</FeaturedBadge>
                      </FeaturedImgWrap>
                      <FeaturedContent>
                        <FeaturedTitle>{p.title || "TourVista - AI Travel Guide"}</FeaturedTitle>
                        <FeaturedDesc>
                          {p.desc || "Travel like a local. Get to know landmarks in seconds. Explore any destination at your own pace with a personalized guide right in your pocket."}
                        </FeaturedDesc>
                        <FeaturedTags>
                          {p.tags.map((t, i) => (
                            <FeaturedTag key={i}>{t}</FeaturedTag>
                          ))}
                        </FeaturedTags>
                        <FeaturedFooter>
                          <FeaturedLink href="#" onClick={(e) => { e.stopPropagation(); }}>
                            <FaPlay size={12} style={{ marginRight: '6px' }} /> Play Store
                          </FeaturedLink>
                          <FeaturedLink href="#" onClick={(e) => { e.stopPropagation(); }}>
                            <SiGithub size={12} style={{ marginRight: '6px' }} /> App Store
                          </FeaturedLink>
                          {idx === 2 && (
                            <FeaturedLink href={p.link} onClick={(e) => { e.stopPropagation(); }}>
                              <FiMonitor size={12} style={{ marginRight: '6px' }} /> Website
                            </FeaturedLink>
                          )}
                        </FeaturedFooter>
                      </FeaturedContent>
                    </FeaturedCard>
                  </motion.div>
                );
              })}
            </GridArea>
          </motion.div>
        )}
      </AnimatePresence>

      {/* More Work Section */}
      <MoreWorkContainer>
        <MoreWorkHeading>More Work</MoreWorkHeading>
        <MoreWorkGrid>
          {MORE_WORK.map((item, idx) => (
            <MoreWorkCard key={idx} disabled={item.disabled}>
              <MoreWorkImg style={{ backgroundImage: `url(${item.img})` }} />
              <MoreWorkOverlay />
              <MoreWorkContent>
                <MoreWorkTitle>{item.title}</MoreWorkTitle>
                <MoreWorkDesc>{item.desc}</MoreWorkDesc>
                <MoreWorkTags>
                  {item.tags.map((tag, i) => (
                    <MoreWorkTag key={i}>{tag}</MoreWorkTag>
                  ))}
                </MoreWorkTags>
                <PlayStoreBtn
                  href={item.disabled ? undefined : item.link}
                  target={item.disabled ? undefined : "_blank"}
                  rel="noreferrer"
                  disabled={item.disabled}
                  onClick={item.disabled ? (e) => e.preventDefault() : undefined}
                >
                  <FaPlay /> {item.disabled ? "Development Started" : "Visit Website"}
                </PlayStoreBtn>
              </MoreWorkContent>
            </MoreWorkCard>
          ))}
        </MoreWorkGrid>
      </MoreWorkContainer>

      {/* Modal / Expanded preview for Grid mode */}
      <AnimatePresence>
        {expandedIdx !== null && (
          <ModalBackdrop variants={modalBackdrop} initial="hidden" animate="show" exit="exit" as={motion.div} onClick={() => setExpandedIdx(null)}>
            <ModalPanel variants={modalPanel} initial="hidden" animate="show" exit="exit" as={motion.div} onClick={(e) => e.stopPropagation()}>
              <ModalLeft>
                <ModalImage style={{ backgroundImage: `url(${filteredProjects[expandedIdx].img})` }} />
              </ModalLeft>
              <ModalRight>
                <ModalTitle>{filteredProjects[expandedIdx].title}</ModalTitle>
                <ModalDesc>{filteredProjects[expandedIdx].desc}</ModalDesc>
                <ModalTags>
                  {filteredProjects[expandedIdx].tags.map((t, i) => (<Tag key={i}>{t}</Tag>))}
                </ModalTags>

                <ModalActions>
                  <View href={filteredProjects[expandedIdx].link} target="_blank" rel="noreferrer">Live</View>
                  <GithubBtn href={filteredProjects[expandedIdx].github} target="_blank" rel="noreferrer"><SiGithub /> GitHub</GithubBtn>
                  <CloseExpand onClick={() => setExpandedIdx(null)}>Close</CloseExpand>
                </ModalActions>
              </ModalRight>
            </ModalPanel>
          </ModalBackdrop>
        )}
      </AnimatePresence>
    </Wrap>
  );
}

/* =================== Styled =================== */

const Wrap = styled.section`
  width: 92%;
  max-width: 1240px;
  margin: 2.2rem auto 3.6rem;
  color: var(--text-color);
  font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
`;

const HeaderRow = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:12px;
  margin-bottom:12px;
`;

const Heading = styled.h2`
  margin:0;
  color: var(--text-color);
  font-size:1.35rem;
  font-weight:700;
`;

const Controls = styled.div` display:flex; gap:10px; `;

const ControlButton = styled.button`
  width:40px;
  height:40px;
  border-radius:8px;
  border:none;
  display:grid;
  place-items:center;
  cursor:pointer;
  background: ${(p) => (p.active ? "linear-gradient(180deg,#2b6fff,#264dff)" : "var(--card-bg)")};
  color: ${(p) => (p.active ? "#fff" : "var(--nav-text)")};
  border: 1px solid ${(p) => (p.active ? "transparent" : "var(--card-border)")};
  transition: all .14s ease;
  box-shadow: ${(p) => (p.active ? "0 8px 20px rgba(38,77,255,0.12)" : "none")};
`;

/* Card for slider mode */
const Card = styled.div`
  background: var(--card-bg);
  border-radius: 14px;
  padding: 12px;
  box-shadow: 0 12px 40px rgba(0,0,0,0.1);
  border: 1px solid var(--card-border);
`;

/* slider wrap + image */
const SliderWrap = styled.div` width:100%; `;

const ImageWrap = styled.div` height: 360px; @media (max-width: 700px){ height:220px; } `;
const Image = styled.div`
  width:100%;
  height:100%;
  background-size: cover;
  background-position: center;
  border-radius: 10px;
`;

/* Info area under slider image */
const InfoArea = styled.div`
  padding-top: 12px;
`;

const Title = styled.h3` margin:0; font-size:1.15rem; color: var(--text-color); `;
const Desc = styled.p` margin:6px 0 0 0; color: var(--text-muted); font-size:0.95rem; line-height:1.36; max-width:76ch; `;

const Tags = styled.div` display:flex; gap:0.5rem; margin-top:8px; flex-wrap:wrap; `;
const Tag = styled.span`
  background: var(--bg-color);
  color: var(--text-color);
  padding:.32rem .7rem;
  border-radius:999px;
  font-size:.82rem;
  border:1px solid var(--card-border);
`;

const Footer = styled.div` margin-top:12px; display:flex; align-items:center; justify-content:space-between; `;
const LeftGroup = styled.div` display:flex; gap:8px; align-items:center; `;
const RightGroup = styled.div` display:flex; gap:12px; align-items:center; `;

const View = styled.a`
  display:inline-block;
  background: linear-gradient(90deg,#3b82f6,#2563eb);
  color: #fff;
  padding: .5rem .9rem;
  border-radius: 22px;
  font-weight:700;
  text-decoration:none;
  box-shadow:0 10px 28px rgba(37,99,235,0.12);
  transition: transform .12s ease;
  &:hover{ transform: translateY(-3px); }
`;

const GithubBtn = styled.a`
  display:inline-flex;
  align-items:center;
  gap:8px;
  background: var(--bg-color);
  color: var(--text-color);
  padding:.44rem .8rem;
  border-radius:18px;
  border:1px solid var(--card-border);
  font-weight:700;
  text-decoration:none;
  box-shadow: 0 6px 18px rgba(0,0,0,0.05);
  transition: all .14s ease;
  &:hover{ transform: translateY(-3px); }
`;

const Circle = styled.button`
  width:44px;
  height:44px;
  border-radius:50%;
  border:none;
  background: linear-gradient(180deg,#1e88ff 0%, #176eff 100%);
  color:#fff;
  display:grid;
  place-items:center;
  cursor:pointer;
  box-shadow:0 8px 20px rgba(23,110,255,0.12);
  transition: transform .12s ease, box-shadow .12s ease;
  &:hover{ box-shadow: 0 16px 36px rgba(23,110,255,0.16); transform: translateY(-3px); }
`;

/* Grid mode */


/* Featured Grid Layout Extensions */
const FilterHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
const FilterTitle = styled.h2`
  font-size: 3rem;
  font-weight: 800;
  color: var(--text-color);
  margin: 0;
  text-align: center;
  flex: 2;
  font-family: 'Inter', sans-serif;
  
  .highlight {
    color: #F05A28;
  }
`;
const FilterDesc = styled.p`
  text-align: center;
  color: var(--text-muted);
  font-size: 1.1rem;
  max-width: 650px;
  margin: 1rem auto 3rem auto;
  line-height: 1.5;
`;

const GridArea = styled.div`
  display:grid;
  grid-template-columns: 1fr 1fr;
  gap:24px;
  
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const FeaturedCard = styled.div`
  background: var(--card-bg);
  border-radius: 20px;
  border: 1px solid var(--card-border);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
    border-color: #F05A28;
  }
`;

const FeaturedImgWrap = styled.div`
  width: 100%;
  padding-top: 55%;
  position: relative;
  border-bottom: 2px solid rgba(255,255,255,0.02);
`;

const FeaturedImg = styled.div`
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background-size: cover;
  background-position: center;
`;

const FeaturedBadge = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  background: rgba(20, 15, 5, 0.85);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(240, 90, 40, 0.4);
  color: #ffc107;
  padding: 6px 14px;
  border-radius: 50px;
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 1px;
`;

const FeaturedContent = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const FeaturedTitle = styled.h3`
  font-size: 1.5rem;
  color: var(--text-color);
  margin: 0 0 12px 0;
  font-family: 'Inter', sans-serif;
  font-weight: 800;
`;

const FeaturedDesc = styled.p`
  color: var(--text-muted);
  font-size: 0.95rem;
  line-height: 1.6;
  margin: 0 0 20px 0;
  flex: 1;
`;

const FeaturedTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 24px;
`;

const FeaturedTag = styled.span`
  background: transparent;
  color: #F05A28;
  border: 1px solid rgba(240, 90, 40, 0.3);
  padding: 6px 14px;
  border-radius: 50px;
  font-size: 0.8rem;
  font-weight: 700;
`;

const FeaturedFooter = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  border-top: 1px solid rgba(255,255,255,0.05);
  padding-top: 20px;
  flex-wrap: wrap;
`;

const FeaturedLink = styled.a`
  display: inline-flex;
  align-items: center;
  color: var(--text-color);
  background: var(--bg-color);
  border: 1px solid var(--card-border);
  padding: 8px 16px;
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    background: var(--header-bg);
    border-color: #F05A28;
    color: #F05A28;
  }
`;

/* Modal */
const ModalBackdrop = styled(motion.div)`
  position:fixed;
  inset:0;
  display:grid;
  place-items:center;
  background: rgba(0,0,0,0.5);
  z-index:80;
`;

const ModalPanel = styled(motion.div)`
  width: min(920px, 94%);
  background: var(--card-bg);
  border-radius:12px;
  padding:16px;
  display:flex;
  gap:16px;
  box-shadow: 0 14px 40px rgba(0,0,0,0.2);
  border: 1px solid var(--card-border);
  @media (max-width: 780px) { flex-direction: column; padding:12px; }
`;

const ModalLeft = styled.div` width: 45%; @media(max-width:780px){ width:100%; } `;
const ModalImage = styled.div` width:100%; height:260px; background-size:cover; background-position:center; border-radius:8px; `;

const ModalRight = styled.div` flex:1; display:flex; flex-direction:column; gap:10px; `;
const ModalTitle = styled.h3` margin:0; color: var(--text-color); `;
const ModalDesc = styled.p` margin:0; color: var(--text-muted); `;
const ModalTags = styled.div` display:flex; gap:8px; flex-wrap:wrap; `;
const ModalActions = styled.div` display:flex; gap:10px; align-items:center; margin-top:auto; `;

const CloseExpand = styled.button`
  margin-left:12px;
  background: transparent;
  border: 1px solid rgba(255,255,255,0.06);
  color:#cbd8f5;
  padding:6px 10px;
  border-radius:8px;
  cursor:pointer;
  &:hover{ background: rgba(255,255,255,0.02); }
`;

/* More Work Section Styles */
const MoreWorkContainer = styled.div`
  margin-top: 5rem;
  padding-top: 3rem;
  border-top: 1px solid rgba(255,255,255,0.05);
`;

const MoreWorkHeading = styled.h3`
  text-align: center;
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 3rem;
  color: var(--text-color);
  font-family: 'Inter', sans-serif;
`;

const MoreWorkGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const MoreWorkCard = styled.div`
  background: var(--card-bg);
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: relative;
  border: 1px solid var(--card-border);
  transition: transform 0.3s ease, box-shadow 0.3s ease, opacity 0.3s ease;
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};

  &:hover {
    transform: ${(props) => (props.disabled ? "none" : "translateY(-5px)")};
    box-shadow: ${(props) => (props.disabled ? "none" : "0 10px 30px rgba(0, 0, 0, 0.1)")};
    border-color: ${(props) => (props.disabled ? "var(--card-border)" : "#F05A28")};
  }
`;

const MoreWorkImg = styled.div`
  width: 100%;
  height: 200px;
  background-size: cover;
  background-position: top center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`;

const MoreWorkOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 220px;
  background: linear-gradient(180deg, rgba(0,0,0,0) 0%, var(--card-bg) 90%);
  z-index: 2;
`;

const MoreWorkContent = styled.div`
  padding: 180px 24px 24px 24px;
  position: relative;
  z-index: 3;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const MoreWorkTitle = styled.h4`
  font-size: 1.25rem;
  font-weight: 800;
  color: var(--text-color);
  margin-bottom: 12px;
  font-family: 'Inter', sans-serif;
`;

const MoreWorkDesc = styled.p`
  font-size: 0.9rem;
  color: var(--text-muted);
  line-height: 1.5;
  margin-bottom: 20px;
  flex: 1;
`;

const MoreWorkTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
`;

const MoreWorkTag = styled.span`
  padding: 4px 12px;
  border: 1px solid rgba(240, 90, 40, 0.4);
  color: #F05A28; /* primary orange */
  border-radius: 50px;
  font-size: 0.75rem;
  font-weight: 600;
`;

const PlayStoreBtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--text-color);
  font-size: 0.95rem;
  font-weight: 700;
  text-decoration: none;
  transition: color 0.2s ease;
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
  opacity: ${(props) => (props.disabled ? 0.7 : 1)};
  
  svg {
    font-size: 0.8rem;
  }

  &:hover {
    color: ${(props) => (props.disabled ? "var(--text-color)" : "#F05A28")};
  }
`;
