// src/App.js
import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import './index.css';
import logo from './images/logo-stripe.jpg';
import Carousel from './componenets/Carousel';
import ProgressBar from './componenets/ProgessBar'
import Plan from './componenets/Plan';
import ServicesSection from './componenets/Service';
import BenefitsSection from './componenets/Benifits';
import TeamMember from './componenets/Team';
import StatsSection from './componenets/Impact';
import Faq from './componenets/Faq';
import Contact from './componenets/Contact';
import Footer from './componenets/Footer';


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <div className="App">
      {loading ? <LoadingScreen /> : <MainContent />}
      <ProgressBar />
    </div>
  );
}

function LoadingScreen() {
  return (
    <div className="loading-screen">
      <img src={logo} alt="Loading..." className="loading-logo" />
    </div>
  );
}

function MainContent() {
  return (
    <div>
      <section id="home">
        <Carousel />
      </section>
      <Plan />
      <ServicesSection />
      <BenefitsSection />
      <TeamMember />
      <StatsSection />
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
