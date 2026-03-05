// Clients.jsx
import React, { useState } from "react";
import styled from "styled-components";
import { Slide } from "react-awesome-reveal";

const clients = [
  {
    name: "Al Muslim Tours",
    position: "SHEIK STUDIO",
    img_url:
      "https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg",
    stars: 5,
    disc: `I really liked to talk with them. His team gave me brilliant ideas about my project. Helped me clarify notions about crucial processes and added different angles of view. Thank you and looking forward to future projects!`,
  },
  {
    name: "Usman Ali",
    position: "Web Developer",
    img_url:
      "https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg",
    stars: 4,
    disc: `I highly suggest working with this team. They have done a great job throughout a long process. Excellent communication and technical knowledge. 5 stars.`,
  },
  {
    name: "Pak Industries",
    position: "Web Developer",
    img_url:
      "https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg",
    stars: 5,
    disc: `Very professional and on-time delivery. Excellent customer service and focus on client needs. Highly recommended!`,
  },
  {
    name: "John Michel",
    position: "Designer",
    img_url:
      "https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg",
    stars: 5,
    disc: `Work was fast and polished. He discussed what looked best and gave opinions when needed. Great collaboration!`,
  },
];

export default function Clients() {
  // Use boolean paused only — don't modify animation duration on hover
  const [paused, setPaused] = useState(false);

  // duplicate list for seamless loop
  const doubled = [...clients, ...clients];

  return (
    <Wrap id="client">
      <div className="container">
        <div className="row gx-5 align-items-start">
          {/* LEFT - static */}
          <div className="col-lg-6">
            <Slide direction="left">
              <span className="tag" style={{ fontFamily: "tiempos,serif" }}>Testimonials</span>
              <h1 className="heading">
                See what <span className="highlight">others</span> say about me
              </h1>
              <p className="lead sub">
                I have helped many businesses make a killer design for their product.
                Wanna be the next?
              </p>
              <a className="btn contact-btn" href="tel:+923037778240">Contact ↗</a>
            </Slide>
          </div>

          {/* RIGHT - marquee column */}
          <div className="col-lg-6">
            <div
              className={`marquee ${paused ? "paused" : ""}`}
              onClick={() => setPaused((p) => !p)}
              title="Hover to pause — click to toggle pause/resume"
            >
              <div className="track">
                {doubled.map((c, i) => (
                  <article className="card" key={`${c.name}-${i}`}>
                    <p className="text">“{c.disc}”</p>
                    <div className="meta">
                      <div className="user">
                        <img src={c.img_url} alt={c.name} onError={(e) => { e.currentTarget.style.display = 'none' }} />
                        <div className="info">
                          <div className="name">{c.name}</div>
                          <div className="pos">{c.position}</div>
                        </div>
                      </div>
                      <div className="stars">
                        {Array.from({ length: c.stars }).map((_, s) => <span key={s}>★</span>)}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="mt-2 small text-center text-white">Click to see Alll reviews on Google</div>
          </div>
        </div>
      </div>
    </Wrap>
  );
}

/* ---------- styled-components ---------- */
const Wrap = styled.section`
  background: var(--bg-color);
  color: var(--text-color);
  padding: 5rem 0;

  .tag{
    display:inline-block;
    background: var(--card-bg);
    color:#00e0c3;
    padding: .35rem .9rem;
    border-radius: 999px;
    font-weight:700;
    text-transform:uppercase;
    letter-spacing: .8px;
    font-size: .8rem;
    border: 1px solid var(--card-border);
  }

  .heading{
    font-size: clamp(1.9rem, 4.6vw, 3rem);
    margin-top: .9rem;
    line-height: 1.05;
    font-weight:700;
    color: var(--text-color);
  }
  .highlight{ color: #F05A28; }

  .sub{
    color: var(--text-muted);
    max-width: 520px;
    margin-top: 1rem;
    font-size: 1rem;
  }

  .contact-btn{
    display:inline-block;
    margin-top: 1.6rem;
    padding:.6rem 3rem;
    border-radius: 999px;
    border: 1px solid var(--card-border);
    color: var(--text-color);
    text-decoration:none;
    transition: all .25s;
    background: var(--card-bg);
  }
  .contact-btn:hover{
    background: #F05A28; color:#fff; border-color: #F05A28;
  }

  /* MARQUEE (right column) */
  .marquee{
    --speed: 20s;              /* fixed speed variable */
    height: 380px;             /* visible viewport height for cards */
    overflow: hidden;
    border-radius: 14px;
    padding: 1rem;
    background: var(--card-bg);
    border: 1px solid var(--card-border);
    box-shadow: 0 10px 30px rgba(0,0,0,0.05);
    cursor: pointer;
  }

  .track{
    display:flex;
    flex-direction:column;
    gap:1rem;
    /* continuous upward motion */
    animation-name: moveUp;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-duration: var(--speed);
    will-change: transform;
  }

  /* pause on hover or when class toggled */
  .marquee.paused .track,
  .marquee:hover .track{
    animation-play-state: paused;
  }

  @keyframes moveUp{
    0% { transform: translateY(0%); }
    100% { transform: translateY(-50%); } /* assumes duplicate list so -50% moves up exactly one list length */
  }

  .card{
    background: var(--bg-color);
    border-radius: 12px;
    padding: 1.1rem;
    border: 1px solid var(--card-border);
    color: var(--text-color);
    min-height: 120px;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    transition: transform .25s ease, box-shadow .25s ease;
  }

  .card:hover{
    transform: translateY(-6px);
    box-shadow: 0 18px 40px rgba(0,0,0,0.1);
    border-color: #F05A28;
  }

  .text{
    margin:0;
    color: var(--text-muted);
    line-height:1.45;
    font-size: .95rem;
  }

  .meta{
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-top:.9rem;
  }

  .user{
    display:flex;
    align-items:center;
    gap:.8rem;
  }
  .user img{
    width:44px; height:44px; border-radius:50%; object-fit:cover; border:1px solid var(--card-border);
  }
  .name{ font-weight:700; color: var(--text-color); }
  .pos{ font-size:.82rem; color: var(--text-muted); }

  .stars{ color: #ffc857; font-size: .98rem; }

  /* RESPONSIVE: stack on small screens */
  @media (max-width: 991px){
    .marquee{ height: 320px; }
    .sub{ max-width:100%; }
  }

  @media (max-width: 767px){
    padding: 3rem 0;
    .marquee{ height: 300px; }
    .heading{ font-size: 1.6rem; }
    .contact-btn{ margin-bottom: .6rem; }
  }
`;
