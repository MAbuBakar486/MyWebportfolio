// ProjectsStylishEnhanced.jsx
import React, { useRef, useState } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FiGrid, FiMonitor } from "react-icons/fi";
import { SiGithub } from "react-icons/si";
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
  { img: img1, title: "AnalyticBridge Website Design", desc: "Fast, responsive SaaS website UI.", tags: ["React", "SaaS"], link: "#", github: "#", category: "Web Design" },
  { img: img2, title: "Payments Dashboard", desc: "Payments dashboard UI with charts and filters.", tags: ["React", "API"], link: "#", github: "#", category: "App Development" },
  { img: img3, title: "Portfolio Website", desc: "Portfolio built with modern UI patterns.", tags: ["React", "Bootstrap"], link: "#", github: "#", category: "Graphic Design" },
];

const settings = { dots: false, infinite: true, speed: 520, slidesToShow: 1, slidesToScroll: 1, arrows: false };

export default function ProjectsStylishEnhanced() {
  const sliderRef = useRef(null);
  const [active, setActive] = useState(0);
  const [viewMode, setViewMode] = useState("grid"); // 'slider' | 'grid'
  const [filter, setFilter] = useState("All");
  const [expandedIdx, setExpandedIdx] = useState(null);

  const categories = ["All", "Web Design", "Graphic Design", "App Development"];
  const filteredProjects = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

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
        <Heading>My recent projects</Heading>
        <Controls>
          <ControlButton title="Grid view" active={viewMode === "grid"} onClick={() => { setViewMode("grid"); setExpandedIdx(null); }} id='project'>
            <FiGrid size={16} />
          </ControlButton>
          <ControlButton title="Slider view" active={viewMode === "slider"} onClick={() => { setViewMode("slider"); setExpandedIdx(null); }}>
            <FiMonitor size={16} />
          </ControlButton>
        </Controls>
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
            <GridControls>
              <FilterRow>
                {categories.map((c) => (
                  <FilterPill key={c} active={filter === c} onClick={() => { setFilter(c); setExpandedIdx(null); }}>
                    {c}
                  </FilterPill>
                ))}
              </FilterRow>
            </GridControls>

            <GridArea>
              {filteredProjects.map((p, idx) => {
                return (
                  <motion.div key={idx} variants={cardVariant}>
                    <GridItem onClick={() => setExpandedIdx(idx)}>
                      <GridThumb style={{ backgroundImage: `url(${p.img})` }} />
                      <GridOverlay>
                        <GridTitle>{p.title}</GridTitle>
                      </GridOverlay>
                    </GridItem>
                  </motion.div>
                );
              })}
            </GridArea>
          </motion.div>
        )}
      </AnimatePresence>

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
  color: #eaf1ff;
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
  color:#fff;
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
  background: ${(p) => (p.active ? "linear-gradient(180deg,#2b6fff,#264dff)" : "rgba(255,255,255,0.04)")};
  color: ${(p) => (p.active ? "#fff" : "#cbd8f5")};
  transition: all .14s ease;
  box-shadow: ${(p) => (p.active ? "0 8px 20px rgba(38,77,255,0.12)" : "none")};
`;

/* Card for slider mode */
const Card = styled.div`
  background: linear-gradient(180deg, rgba(6,10,18,0.94), rgba(12,15,28,0.98));
  border-radius: 14px;
  padding: 12px;
  box-shadow: 0 12px 40px rgba(2,6,23,0.6);
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

const Title = styled.h3` margin:0; font-size:1.15rem; color:#fff; `;
const Desc = styled.p` margin:6px 0 0 0; color:#cbd8f5; font-size:0.95rem; line-height:1.36; max-width:76ch; `;

const Tags = styled.div` display:flex; gap:0.5rem; margin-top:8px; flex-wrap:wrap; `;
const Tag = styled.span`
  background: rgba(255,255,255,0.03);
  color:#e6f0ff;
  padding:.32rem .7rem;
  border-radius:999px;
  font-size:.82rem;
  border:1px solid rgba(255,255,255,0.04);
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
  background: #0b1220;
  color:#fff;
  padding:.44rem .8rem;
  border-radius:18px;
  border:1px solid rgba(255,255,255,0.04);
  font-weight:700;
  text-decoration:none;
  box-shadow: 0 6px 18px rgba(11,18,32,0.6);
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
const GridControls = styled.div` margin-bottom:12px; `;
const FilterRow = styled.div` display:flex; gap:10px; flex-wrap:wrap; `;

const FilterPill = styled.button`
  padding:8px 14px;
  border-radius:999px;
  background: ${(p) => (p.active ? "linear-gradient(90deg,#2b6fff,#2563eb)" : "rgba(255,255,255,0.03)")};
  color: ${(p) => (p.active ? "#fff" : "#cbd8f5")};
  border: none;
  cursor:pointer;
  font-weight:700;
  transition: transform .12s ease, box-shadow .12s ease;
  &:hover { transform: translateY(-2px); box-shadow: 0 8px 20px rgba(38,77,255,0.06); }
`;

const GridArea = styled.div`
  display:grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap:14px;
`;

const GridItem = styled.div`
  position:relative;
  border-radius:12px;
  overflow:hidden;
  min-height: 180px;
  cursor:pointer;
  background: linear-gradient(180deg, rgba(0,0,0,0.04), rgba(0,0,0,0.02));
  transition: transform .18s ease, box-shadow .18s ease;
  &:hover{ transform: translateY(-6px); box-shadow: 0 12px 30px rgba(0,0,0,0.28); }
`;

const GridThumb = styled.div`
  width:100%;
  height: 180px;
  background-size:cover;
  background-position:center;
`;

const GridOverlay = styled.div`
  position:absolute;
  inset:0;
  display:flex;
  align-items:center;
  justify-content:center;
  background: linear-gradient(180deg, rgba(0,0,0,0.0), rgba(0,0,0,0.42));
  color:#fff;
  text-align:center;
  padding:8px;
`;

const GridTitle = styled.div` font-weight:800; font-size:1rem; `;

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
  background: linear-gradient(180deg, rgba(6,10,18,0.98), rgba(12,15,28,0.98));
  border-radius:12px;
  padding:16px;
  display:flex;
  gap:16px;
  box-shadow: 0 14px 40px rgba(2,6,23,0.6);
  @media (max-width: 780px) { flex-direction: column; padding:12px; }
`;

const ModalLeft = styled.div` width: 45%; @media(max-width:780px){ width:100%; } `;
const ModalImage = styled.div` width:100%; height:260px; background-size:cover; background-position:center; border-radius:8px; `;

const ModalRight = styled.div` flex:1; display:flex; flex-direction:column; gap:10px; `;
const ModalTitle = styled.h3` margin:0; color:#fff; `;
const ModalDesc = styled.p` margin:0; color:#cbd8f5; `;
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
