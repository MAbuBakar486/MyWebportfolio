// src/components/Services.jsx
import React from "react";
import { FaHeadset, FaBook, FaLaptop } from "react-icons/fa";

const services = [
  {
    Icon: FaHeadset,
    title: "24/7 Support",
    text: "We offer continuous support so your product remains stable and improved over time.",
  },
  {
    Icon: FaBook,
    title: "Top Guide",
    text: "Practical guides and best practices so your team ships faster with fewer bugs.",
  },
  {
    Icon: FaLaptop,
    title: "Best Course",
    text: "Hands-on courses tailored to real world projects — learn by building actual products.",
  },
];

export default function Services() {
  return (
    <section className="services-section" style={{paddingBottom:"50px"}}>
      <div className="services-inner container">
        <div className="header text-center">
          {/* <h2 className="title">3 Reasons To Choose Us</h2> */}
        </div>

        <div className="row cards-row">
          <div className="sc-iNWwEs dueNOl py-3" style={{fontFamily:"tiempos,serif"}}>03 Resons to Choose Me</div>
          {services.map((s, idx) => (
            <div key={idx} className="col-12 col-sm-6 col-lg-4 card-col">
              <article className="service-card">
                <div className="card-inner">
                  <div className="icon-box" aria-hidden>
                    <s.Icon className="icon" />
                  </div>

                  {/* decorative border pieces (bottom-left + top-right) */}
                  <div className="border-piece bl" aria-hidden />
                  <div className="border-piece tr" aria-hidden />

                  <div className="content">
                    <h5 className="service-title">{s.title}</h5>
                    <p className="service-desc">{s.text}</p>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
