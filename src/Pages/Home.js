import React from "react";

import { Helmet } from "react-helmet-async";
import Projects from "../Pages/Project/Project.jsx";
import Clients from "../Pages/Project/Clients.jsx";
import About from "../Pages/Project/About.jsx";
import Timeline from "../Pages/Project/Timeline.jsx";
import Reason from "../Pages/Project/Reason.jsx";
import Tech from "../Pages/Project/Tech.jsx";
import SkillsSection from "./Project/SkillsSection.jsx";
import Demo from "../Pages/Project/Demo.jsx";
import Services from "../Pages/Project/Services.jsx";
import Contact from "../Pages/Project/Contact.jsx";
import Expertise from "../Pages/Project/Expertise.jsx";
import SocialMedia from "../Pages/Project/SocialMedia.jsx";


const Home = () => {



  return (
    <>
      <Helmet>
        <title>Hafiz Abu Bakar — Portfolio</title>

        <meta
          name="description"
          content="Hi, I'm Hafiz Abu Bakar — a Full-Stack Web & Mobile App Developer specializing in React, Flutter, Firebase & UI/UX. I design and build modern, fast, and scalable applications."
        />

        <meta
          name="keywords"
          content="Hafiz Abu Bakar, Abu Bakar Portfolio, Web Developer, Flutter Developer, React Developer, Full Stack Developer, Pakistan Developer, Mobile App Developer, Firebase, UI UX"
        />

        <meta property="og:title" content="Hafiz Abu Bakar — Full Stack Developer" />
        <meta
          property="og:description"
          content="Welcome to my portfolio — see my React, Flutter, Firebase & UI-UX projects."
        />
        <meta property="og:image" content="/portfolio-banner.png" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Hafiz Abu Bakar — Developer Portfolio" />
        <meta
          name="twitter:description"
          content="Full Stack Developer specializing in React, Flutter & Firebase."
        />
        <meta name="twitter:image" content="/portfolio-banner.png" />
      </Helmet>

      <div className="wedding-container">
        <Demo />
        <About />
        <Expertise />
        <Tech />
        <Services />
        <Projects />
        <div className="py-5" />
        <Timeline />
        <div className="py-4" />
        <Reason />
        <div className="py-4" />
        <SkillsSection />
        <div className="py-4" />

        <div className="py-4" />

        <div className="py-4" />

        <Clients />
        <Contact />
        <SocialMedia />
      </div>
    </>
  );
};

export default Home;