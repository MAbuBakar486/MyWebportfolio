import React, { useState, useEffect, useRef } from "react";
import {
  SiGithub,
  SiYoutube,
  SiInstagram,
  SiFacebook,
  SiLinkedin,
  SiWhatsapp,
  SiFlutter,
  SiReact,
  SiFirebase,
  SiNodedotjs,
  SiPython,
} from "react-icons/si";
import { FaTwitter } from "react-icons/fa";


const SOCIALS = [
  { id: "youtube", Icon: SiYoutube, label: "YouTube", href: "https://youtube.com/yourchannel", desc: "Video tutorials & demos." },
  { id: "instagram", Icon: SiInstagram, label: "Instagram", href: "https://instagram.com/yourprofile", desc: "Designs & snapshots." },
  { id: "facebook", Icon: SiFacebook, label: "Facebook", href: "https://facebook.com/yourprofile", desc: "Social presence." },
  { id: "linkedin", Icon: SiLinkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/yourprofile", desc: "Connect with me professionally." },
  { id: "x", Icon: FaTwitter, label: "X / Twitter", href: "https://x.com/yourprofile", desc: "Quick updates." },
  { id: "whatsapp", Icon: SiWhatsapp, label: "WhatsApp", href: "https://wa.me/yourphonenumber", desc: "Contact me on WhatsApp." },
];

const TECHS = [
  { id: "github", Icon: SiGithub, label: "GitHub", href: "https://github.com/yourusername", desc: "My GitHub profile: repos & projects." },
  { id: "flutter", Icon: SiFlutter, label: "Flutter", href: "https://flutter.dev", desc: "Cross-platform UI toolkit." },
  { id: "react", Icon: SiReact, label: "React", href: "https://reactjs.org", desc: "UI library I use frequently." },
  { id: "firebase", Icon: SiFirebase, label: "Firebase", href: "https://firebase.google.com", desc: "Realtime DB, Auth, Hosting." },
  { id: "node", Icon: SiNodedotjs, label: "Node.js", href: "https://nodejs.org", desc: "JS runtime for servers." },
  { id: "python", Icon: SiPython, label: "Python", href: "https://python.org", desc: "General-purpose & backend." },
];

export default function Technologies() {
  const [openItem, setOpenItem] = useState(null);
  const overlayRef = useRef(null);

  // close modal on ESC
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setOpenItem(null);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // click outside to close modal
  useEffect(() => {
    function onClick(e) {
      if (!overlayRef.current) return;
      if (openItem && e.target === overlayRef.current) setOpenItem(null);
    }
    window.addEventListener("click", onClick);
    return () => window.removeEventListener("click", onClick);
  }, [openItem]);

  const renderTile = (it) => {
    const { id, Icon, label } = it;
    return (
      <button
        key={id}
        className="tech-card"
        onClick={() => setOpenItem(it)}
        aria-label={`Open ${label} link`}
      >
        <div className="tech-icon"><Icon /></div>
        <div className="tech-label">{label}</div>
      </button>
    );
  };

  return (
    <section className="tech-section">
      <div className="tech-inner container">
        <h3 className="text-center pb-4 fw-bold" style={{fontFamily:"tiempos,serif"}}>Technologies</h3>

        <div className="two-column">
          <div className="col socials-col">
            <h4 className="col-title text-center pb-2" >Socials</h4>
            <div className="tech-grid" role="list">
              {SOCIALS.map(renderTile)}
            </div>
          </div>

          <div className="col techs-col">
            <h4 className="col-title text-center pb-2">Tech Stack</h4>
            <div className="tech-grid" role="list">
              {TECHS.map(renderTile)}
            </div>
          </div>
        </div>
      </div>

      {openItem && (
        <div className="tech-modal-overlay" ref={overlayRef} role="dialog" aria-modal="true">
          <div className="tech-modal">
            <header className="modal-header">
              <h4>{openItem.label}</h4>
              <button className="modal-close" onClick={() => setOpenItem(null)} aria-label="Close">✕</button>
            </header>

            <div className="modal-body">
              <p className="modal-desc">{openItem.desc}</p>
              <div className="modal-link-row">
                <a className="modal-open-btn" href={openItem.href} target="_blank" rel="noopener noreferrer">Open Link</a>
                <button className="modal-copy-btn" onClick={() => {
                  navigator.clipboard?.writeText(openItem.href)
                    .then(()=> alert("Link copied to clipboard"))
                    .catch(()=> alert("Could not copy"));
                }}>Copy Link</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
