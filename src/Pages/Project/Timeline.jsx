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
        <h2 className="text-center py-4" style={{ fontFamily: "tiempos,serif", color: 'var(--text-color)' }}>Education & Experience</h2>

        <style>{`
          :root{ 
            --timeline-bg: rgba(255, 255, 255, 0.03);
            --timeline-node-border: rgba(255, 255, 255, 0.1);
          }
          body.light-mode {
            --timeline-bg: rgba(0, 0, 0, 0.05);
            --timeline-node-border: rgba(0, 0, 0, 0.1);
          }
          .timeline-wrap{ max-width:1100px; margin:0 auto; }
          .timeline-grid{ display:grid; grid-template-columns:1fr 64px 1fr; gap:24px 16px; align-items:start; position:relative; }
          .timeline-grid::before{ 
            content:''; position:absolute; left:50%; transform:translateX(-50%); top:57px; bottom:0; width:4px; 
            background: var(--timeline-bg); 
            border-radius:4px; z-index:1 
          }
          .card-custom{ 
            background: var(--card-bg); 
            border: 1px solid var(--card-border);
            border-radius: 12px; padding:18px; 
            box-shadow:0 10px 30px rgba(0,0,0,0.1); 
            color: var(--text-color); 
            min-height:110px; position:relative; z-index:2; 
            transition: all 0.3s ease;
          }
          .card-custom:hover{ transform:translateY(-6px); border-color: #F05A28; }
          .badge-custom{ background:rgba(240, 90, 40, 0.1); color: #F05A28; padding:6px 8px; border-radius:8px; font-weight:700; font-size:12px }
          .pill{ display:inline-block; padding:6px 8px; border-radius:8px; background: var(--bg-color); color: #F05A28; font-size:12px; border: 1px solid var(--card-border); }
          .node-wrap{ display:flex; align-items:center; justify-content:center; padding:18px 0; }
          .node{ width:18px; height:18px; border-radius:50%; background: var(--bg-color); border:2px solid var(--timeline-node-border); box-shadow:0 4px 10px rgba(0,0,0,0.1); transition: all 0.3s ease; z-index:3 }
          .node.filled{ background: #F05A28; border-color: #F05A28; box-shadow:0 0 15px rgba(240, 90, 40, 0.4); transform:scale(1.1) }
          .section-title{ text-align:center; color: var(--text-color); font-weight:700; font-size:1.25rem; margin-bottom:10px; }
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
            <div className="section-title" style={{ gridColumn: '1', fontFamily: "tiempos,serif" }}>
              Study Detail
            </div>
            <div></div> {/* spacer for center column */}
            <div className="section-title" style={{ gridColumn: '3', fontFamily: "tiempos,serif" }} >
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
