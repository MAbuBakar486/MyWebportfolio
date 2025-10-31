import React from "react";
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet-async";
import Projects from "../Pages/Project/Project.jsx";
import Clients from "../Pages/Project/Clients.jsx";
import About from "../Pages/Project/About.jsx";
import Timeline from "../Pages/Project/Timeline.jsx";
import Reason from "../Pages/Project/Reason.jsx";
import Tech from "../Pages/Project/Tech.jsx";
import Demo from "../Pages/Project/Demo.jsx";
import Services from "../Pages/Project/Services.jsx";
import Contact from "../Pages/Project/Contact.jsx";
import { FaHeart, FaCalendarAlt, FaStar, FaUsers } from "react-icons/fa";

const Home = () => {

  const faqs = [
  {
    question: "What is Madani Marriage?",
    answer: "Madani Marriage is a trusted Muslim matrimonial platform dedicated to helping Muslims worldwide find halal, compatible, and lifelong partners based on Islamic values."
  },
  {
    question: "Is my information private and secure?",
    answer: "Absolutely. We prioritize your privacy and use strong security measures to protect your personal details. Only registered members can view limited profile information."
  },
  {
    question: "Do you provide halal matchmaking?",
    answer: "Yes, Madani Marriage strictly follows Islamic guidelines, ensuring all connections and interactions are halal, respectful, and guided by the principles of Nikah."
  },
  {
    question: "Can I search for matches from different countries?",
    answer: "Yes, our global Muslim matrimonial platform allows you to connect with potential life partners from various countries, cultures, and backgrounds."
  },
  {
    question: "Do families get involved in the process?",
    answer: "Yes, we encourage family participation to ensure the matrimonial process remains transparent, halal, and in accordance with Islamic traditions."
  },
  {
    question: "How do I contact support?",
    answer: "You can reach our support team anytime at madanimarriagebureau12@gmail.com or +923204402940 for assistance with your account, profile, or matchmaking process."
  }
  ];

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
        <div className="py-5" />
        <Timeline />
        <div className="py-4" />
        <Projects />
        <div className="py-4" />
        <Services />
        <div className="py-4" />
        <Reason />
        <div className="py-4" />
        <Tech />
        <Clients />
        <Contact />
      </div>
    </>
  );
};

export default Home;