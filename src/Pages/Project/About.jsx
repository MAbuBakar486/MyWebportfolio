// src/components/About.jsx
import React, { useEffect, useRef, useCallback } from "react";
import ResumePDF from "../../assets/HMAB_Resume.pdf";

import {
  SiTailwindcss,
  SiNextdotjs,
  SiGooglechrome
} from "react-icons/si";
import {
  FaReact as SiReact,
  FaJs as SiJavascript,
  FaHtml5 as SiHtml5,
  FaCss3Alt as SiCss3,
  FaGithub as SiGithub
} from "react-icons/fa";

export default function AboutMarquee() {
  // data
  const top = [
    { Icon: SiGooglechrome, name: "Chrome" },
    { Icon: SiJavascript, name: "JavaScript" },
    { Icon: SiHtml5, name: "HTML5" },
    { Icon: SiCss3, name: "CSS3" },
    { Icon: SiReact, name: "React" },
    { Icon: SiGithub, name: "Github" },
  ];
  const bottom = [
    { Icon: SiCss3, name: "CSS3" },
    { Icon: SiReact, name: "React" },
    { Icon: SiGithub, name: "Github" },
    { Icon: SiTailwindcss, name: "Tailwind" },
    { Icon: SiNextdotjs, name: "Next.js" },
    { Icon: SiGooglechrome, name: "Chrome" },
  ];

  // refs to measure widths and set css vars
  const topTrackRef = useRef(null);
  const bottomTrackRef = useRef(null);
  const topSetRef = useRef(null);    // reference to first (single) set container
  const bottomSetRef = useRef(null);
  // measure a single set width and write CSS var to the parent track
  const updateTrack = useCallback(() => {
    if (topSetRef.current && topTrackRef.current) {
      const w = topSetRef.current.getBoundingClientRect().width;
      // write pixel width as CSS var --shift-px (positive value)
      topTrackRef.current.style.setProperty("--shift-px", `${w}px`);
      // set duration proportional to width (adjust speed factor as desired)
      // larger number = slower movement
      const seconds = Math.max(10, Math.round(w / 40)); // heuristic
      topTrackRef.current.style.setProperty("--marquee-duration", `${seconds}s`);
    }
    if (bottomSetRef.current && bottomTrackRef.current) {
      const w2 = bottomSetRef.current.getBoundingClientRect().width;
      bottomTrackRef.current.style.setProperty("--shift-px", `${w2}px`);
      const seconds2 = Math.max(9, Math.round(w2 / 36));
      bottomTrackRef.current.style.setProperty("--marquee-duration", `${seconds2}s`);
    }
  }, []);

  function handleDownloadCV(e) {
    e.preventDefault();
    const a = document.createElement("a");
    a.href = ResumePDF;
    a.download = "HMAB_Resume.pdf";
    document.body.appendChild(a);
    a.click();
    a.remove();
  }

  useEffect(() => {
    // initial measure
    updateTrack();
    // recompute on resize & font load
    const ro = new ResizeObserver(updateTrack);
    if (topSetRef.current) ro.observe(topSetRef.current);
    if (bottomSetRef.current) ro.observe(bottomSetRef.current);
    window.addEventListener("load", updateTrack);
    window.addEventListener("resize", updateTrack);
    return () => {
      ro.disconnect();
      window.removeEventListener("load", updateTrack);
      window.removeEventListener("resize", updateTrack);
    };
  }, [updateTrack]);

  const renderBadges = (arr, prefix) =>
    arr.map((t, i) => {
      const Icon = t.Icon;
      return (
        <div className="tech-badge" key={`${prefix}-${i}`}>
          <span className="icon-wrap"><Icon /></span>
          <span className="tech-name">{t.name}</span>
        </div>
      );
    });

  return (
    <section className="about-section" id='about'>
      <div className="about-inner container">
        <header className="about-header">
          <small className="eyebrow">ABOUT ME</small>
          <h2 className="about-title" style={{ fontFamily: "tiempos,serif" }}>A Glimpse Into My World</h2>
          <p className="about-sub">Who I am, What I do, and what inspires me.</p>
          <p className="about-bio" style={{ fontFamily: "Georgia, 'Times New Roman', Times, serif;" }}>
            I am a passionate developer focused on building modern applications and intelligent automation solutions. My skill set includes React for web development, Flutter for cross-platform mobile apps, and workflow automation using n8n. I enjoy integrating APIs, designing efficient systems, and automating complex processes to save time and improve performance. With a strong problem-solving mindset and a commitment to continuous learning, I aim to create scalable, reliable, and user-focused digital products.
          </p>
        </header>

        <div className="about-grid">
          <div className="panel reads-panel">
            <div className="panel-body">
              <div className="reads-left">
                {/* <div className="reads-icon">✦</div> */}
                <h3 className="panel-title"> ✦ My Reads</h3>
                <p className="panel-desc">Explore the books shaping my perspectives.</p>
              </div>

              <div className="reads-sample">
                <style>{`
    .contact-butn {
      margin: auto;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      padding: 10px 18px;
      border: 1px solid var(--card-border);
      background: var(--card-bg);
      color: var(--text-color);
      border-radius: 10px;
      font-weight: 700;
      font-size: 15px;
      cursor: pointer;
      transition: all 0.25s ease-in-out;
      text-decoration: none;
    }
    .contact-butn svg {
      transition: all 0.25s ease-in-out;
    }
    .contact-butn:hover {
      color: white !important;
      background: #F05A28;
      border-color: #F05A28;
      transform: translateY(-2px);
      box-shadow: 0 8px 18px rgba(240, 90, 40, 0.2);
    }
    .contact-butn:hover svg path {
      stroke: white !important;
    }
  `}</style>

                <button
                  className="btn contact-butn "
                  onClick={handleDownloadCV}
                  aria-label="Download CV"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M12 3v12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 11l4 4 4-4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M21 21H3"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span style={{ color: 'inherit' }}>Download CV</span>
                </button>
              </div>

            </div>
          </div>

          <div className="panel toolbox-panel">
            <div className="panel-body">
              <div className="toolbox-top-info">
                {/* <div className="reads-icon">✦</div> */}
                <h3 className="panel-title"> ✦ My ToolBox</h3>
                <p className="panel-desc">Explore the Technologies I use to craft exceptional digital experiences.</p>
              </div>

              <div className="toolbox-marquees">
                {/* TOP TRACK: normal direction (leftward translate) */}
                <div className="marquee" title="Hover to pause">
                  <div className="track" ref={topTrackRef}>
                    <div className="track-content">
                      {/* first set (needed for measurement) */}
                      <div className="set" ref={topSetRef} aria-hidden>
                        {renderBadges(top, "t")}
                      </div>
                      {/* duplicate set */}
                      <div className="set" aria-hidden>
                        {renderBadges(top, "t-dup")}
                      </div>
                    </div>
                  </div>
                </div>

                {/* BOTTOM TRACK: reverse */}
                <div className="marquee" title="Hover to pause">
                  <div className="track reverse" ref={bottomTrackRef}>
                    <div className="track-content">
                      <div className="set" ref={bottomSetRef} aria-hidden>
                        {renderBadges(bottom, "b")}
                      </div>
                      <div className="set" aria-hidden>
                        {renderBadges(bottom, "b-dup")}
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
