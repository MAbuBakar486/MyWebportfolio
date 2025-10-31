// routes.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home.js';
import NotFound from './Pages/NotFound.js';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    {/* <Route path="/about" element={<About />} />
    <Route path="/faq" element={<Faq />} />
    <Route path="/OurMission" element={<OurMission />} />
    <Route path="/Contactus" element={<Contact />} /> */}

    {/* More Link */}
    {/* <Route path="/Why-Choose-Us" element={<ChooseUs />} />
    <Route path="/Recentproposals" element={<Proposals />} />
    <Route path="/payment-methods" element={<Paymentmethods />} /> */}

    {/* Footer Links */}
    {/* <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
    <Route path="/terms" element={<Terms />} /> */}

    {/* Always Glow Button */}

    
    {/* <Route path="/Registration" element={<Register />} />
    <Route path="/Profiles/:userId" element={<MatchedProfiles />} />
    <Route path="/match-response" element={<MatchResponse />} /> */}

    {/* Page 404 */}
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default AppRoutes;
