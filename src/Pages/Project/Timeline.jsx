import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Timeline() {
  const [activeRow, setActiveRow] = useState(null);

  const rows = [
    {
      leftTitle: 'BS in Software Engineering',
      leftBadge: '3.03 CGPA',
      leftDesc: 'University of agriculture Faisalabad (2021 - 2025)\nStudied Software Engineering related subjects like Programming, OS, DBMS, OOPS, ML, Web Development, AI, DSA.',
      rightTitle: 'Flutter and Flutterflow Dev',
      rightPill: 'Onsite',
      rightDesc: 'Sovanza — (01/2024 - 10/2024)\nLearned Flutter, Flutterflow, Firebase, Node and made various projects using the skills in this course.'
    },
    {
      leftTitle: 'Higher Secondary Education',
      leftBadge: '88.15%',
      leftDesc: 'Superior Group of colleges (2019 - 2021)\nStudied in this college from 11th to 12th std. FSC Subjects: Chemistry, Physics, Math, English etc.',
      rightTitle: 'Full Stack Web Dev',
      rightPill: 'Online / Onsite',
      rightDesc: 'Career Institute — (01/04/2023 - 01/08/2023)\nIntro to HTML, CSS, Js, React Js with skill and practical exercises.'
    },
    {
      leftTitle: 'Primary & Secondary School Education',
      leftBadge: '94.20%',
      leftDesc: 'Govt. school (2017 - 2019)\nStudied from Nursery to 10th std. Subjects: English, Urdu, Maths, Science, Social Sciences, Computer.',
      rightTitle: 'Machine Learning in Python',
      rightPill: 'Online',
      rightDesc: 'Udemy — (25/06/2020 - 30/08/2020)\nIntro to ML, projects and practical exercises.'
    }
  ];

  const renderDesc = (text) =>
    text.split('\n').map((t, i) => (
      <p key={i} className="mb-1 small">
        {t}
      </p>
    ));

  return (
    <>
      <div className="container py-4" id='skills'>
        <h2 className="text-white text-center py-4" style={{fontFamily:"tiempos,serif"}}>Education & Experience</h2>

        <style>{`
          :root{ --bg:#0f1114; --card:#15171a; --muted:#9aa3ae; --accent:#e03b3b; --radius:12px }
          .timeline-wrap{ max-width:1100px; margin:0 auto; }
          .timeline-grid{ display:grid; grid-template-columns:1fr 64px 1fr; gap:24px 16px; align-items:start; position:relative; }
          .timeline-grid::before{ content:''; position:absolute; left:50%; transform:translateX(-50%); top:57px; bottom:0; width:4px; background:linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.02)); border-radius:4px; z-index:1 }
          .card-custom{ background:linear-gradient(180deg, rgba(255,255,255,0.02), rgba(0,0,0,0.02)); border-radius:var(--radius); padding:18px; box-shadow:0 10px 30px rgba(0,0,0,0.6); color:#e6eef3; min-height:110px; position:relative; z-index:2; }
          .card-custom:hover{ transform:translateY(-6px); transition:transform .18s ease }
          .badge-custom{ background:rgba(224,59,59,0.12); color:yellow; padding:6px 8px; border-radius:8px; font-weight:700; font-size:12px }
          .pill{ display:inline-block; padding:6px 8px; border-radius:8px; background:rgba(255,255,255,0.02); color:yellow; font-size:12px }
          .node-wrap{ display:flex; align-items:center; justify-content:center; padding:18px 0; }
          .node{ width:18px; height:18px; border-radius:50%; background:transparent; border:2px solid rgba(255,255,255,0.06); box-shadow:0 6px 18px rgba(0,0,0,0.6); transition: background .18s ease, transform .18s ease, box-shadow .18s ease; z-index:3 }
          .node.filled{ background:var(--accent); box-shadow:0 8px 18px rgba(224,59,59,0.18); transform:scale(1.06) }
          .section-title{ text-align:center; color:#e6eef3; font-weight:700; font-size:20px; margin-bottom:10px; }
          @media (max-width:900px){
            .timeline-grid{ grid-template-columns:1fr; }
            .timeline-grid::before{ display:none }
            .node-wrap{ display:none }
            .section-title{ text-align:left; margin-top:20px; }
          }
        `}</style>

        <div className="timeline-wrap">
          <div className="timeline-grid">

            {/* Section Headings */}
            <div className="section-title" style={{ gridColumn: '1' ,fontFamily:"tiempos,serif"}}>
              Study Detail
            </div>
            <div></div> {/* spacer for center column */}
            <div className="section-title" style={{ gridColumn: '3' ,fontFamily:"tiempos,serif"}} >
              Experience Detail
            </div>

            {rows.map((r, idx) => (
              <React.Fragment key={idx}>
                {/* Left card */}
                <div
                  className="card-custom"
                  tabIndex={0}
                  onMouseEnter={() => setActiveRow(idx)}
                  onMouseLeave={() => setActiveRow(null)}
                  onFocus={() => setActiveRow(idx)}
                  onBlur={() => setActiveRow(null)}
                >
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <div className="fw-bold">{r.leftTitle}</div>
                    <div className="badge-custom">{r.leftBadge}</div>
                  </div>
                  <div>{renderDesc(r.leftDesc)}</div>
                </div>

                {/* Center node */}
                <div className="node-wrap" aria-hidden>
                  <div
                    className={'node' + (activeRow === idx ? ' filled' : '')}
                  ></div>
                </div>

                {/* Right card */}
                <div
                  className="card-custom"
                  tabIndex={0}
                  onMouseEnter={() => setActiveRow(idx)}
                  onMouseLeave={() => setActiveRow(null)}
                  onFocus={() => setActiveRow(idx)}
                  onBlur={() => setActiveRow(null)}
                >
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <div className="fw-bold">{r.rightTitle}</div>
                    <div className="pill">{r.rightPill}</div>
                  </div>
                  <div>{renderDesc(r.rightDesc)}</div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
