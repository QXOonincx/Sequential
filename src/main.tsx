import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./index";
import ServicesSection from "./onze-diensten"
import Process from "./proces";
import AboutSection from "./over-ons";
import ContactSection from "./contact";
import "./i18n";

import "./CSS/index.css";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/over-ons" element={<AboutSection />} />
        <Route path="/onze-diensten" element={< ServicesSection/>} />
        <Route path="/proces" element={<Process />} />
        <Route path="/contact" element={<ContactSection />} />
      </Routes>
    </Router>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(<App />);
