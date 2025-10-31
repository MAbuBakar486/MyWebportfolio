// src/components/About.jsx
import React, { useEffect, useRef, useCallback } from "react";

import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiGithub,
  SiNextdotjs,
  SiGooglechrome
} from "react-icons/si";

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
  const CV_ENDPOINT = "/api/download-cv"; // <-- change this
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

  async function handleDownloadCV(e) {
    e.preventDefault();
    try {
      const res = await fetch(CV_ENDPOINT, {
        method: "GET",
        // include credentials if required:
        // credentials: 'include',
        headers: {
          // Add headers if your endpoint requires them (auth etc.)
          // 'Authorization': 'Bearer ...'
        },
      });

      if (!res.ok) throw new Error(`Download failed: ${res.status}`);

      const blob = await res.blob();
      // Try to get filename from content-disposition if provided
      const disposition = res.headers.get("content-disposition");
      let filename = "My_CV.pdf";
      if (disposition) {
        const match = disposition.match(/filename\*=UTF-8''(.+)|filename="(.+)"|filename=(.+)/);
        if (match) {
          filename = decodeURIComponent(match[1] || match[2] || match[3]);
        }
      }

      // create a link and click to download
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      // minimal user feedback — you can replace with a toast
      console.error(err);
      alert("Could not download CV. Check console for details.");
    }
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
          <h2 className="about-title" style={{fontFamily:"tiempos,serif"}}>A Glimpse Into My World</h2>
          <p className="about-sub">Who I am, What I do, and what inspires me.</p>
                    <p className="about-bio" style={{fontFamily:"Georgia, 'Times New Roman', Times, serif;"}}>
            I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things. I thrive in dynamic environments and am driven by a strong desire to continuously improve. My diverse skill set allows me to adapt quickly and efficiently tackle a wide range of tasks. Committed to collaboration and teamwork, I am excited to work with others to achieve shared goals and drive success.
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
      border: 2px solid transparent;
      background: linear-gradient(90deg, #e03b3b, #ff6b6b);
      color: white;
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
      color: black !important;
      border-color: yellow !important;
      transform: translateY(-2px);
      box-shadow: 0 8px 18px rgba(255, 255, 0, 0.25);
    }
    .contact-btn:hover svg path {
      stroke: black !important;
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
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 11l4 4 4-4"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 21H3"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
    <span className="text-white">Download CV</span>
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
