/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import { Link } from 'react-scroll';
import logo from '../images/logo-stripe.png';
import introImage from '../images/home-01-767x703.svg'
import '../style/contact.css';
import '../style/navbar.css';



const Carousel = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  return (
    <>
      <section id="carousel">
        <section className={`Nav ${scrolled ? 'scrolled' : ''}`} id="NavId">
          <div className="container" style={{ marginTop: "25px" }}>
            <div className="row align-items-center">
              <a href="/">
              <div className="col-md-2">
                <img id="imgLogo" src={logo} alt="logo" className="img-fluid" />
              </div>
              </a>
              <div className="col-md-8">
                <ul className="nav justify-content-center">
                  <li className="nav-item" >
                    <Link to="home" smooth={true} duration={600} className="nav-link" style={{ color: scrolled ? '#015c91' : '#10886F', fontWeight: '500', fontSize: '16px' }}>Home</Link>
                  </li>
                  <li className="nav-item" >
                    <Link to="about-us" smooth={true} duration={600} className="nav-link" style={{ color: scrolled ? '#015c91' : '#10886F', fontWeight: '500', fontSize: '16px' }}>
                      About&nbsp;Us
                    </Link>
                  </li>
                  <li className="nav-item" >
                    <Link to="services" smooth={true} duration={600} className="nav-link" style={{ color: scrolled ? '#015c91 ' : '#10886F', fontWeight: '500', fontSize: '16px' }}>
                      Services
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <div className="container" style={{ marginTop: "100px" }}>
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="header10-textarea aos-init aos-animate" data-aos="zoom-out" data-aos-duration="1000">
                <span className="font-ks lineh-16 weight-500 color aboutspan font-16 d-inline-block margin-b24">Bookkeeping by Professionals</span>
                <h1 style={{ fontWeight: '600', marginBottom: "24px" }} className="font-lora font-48 lineh-54 weight-600 color margin-b24 aos-init aos-animate" data-aos="fade-right" data-aos-duration="1000">Perfect, Precise And Accurate</h1>
                <p style={{ marginTop: "0px", marginBottom: '1rem', color: '#10886F', fontWeight: '600' }} className="font-ks font-16 weight-500 color opacity2 lineh-26">At Stripe Bookkeeping, our team of seasoned professionals delivers precise and reliable bookkeeping services, allowing you to focus on growing your business with confidence.</p>
                <div className="div aos-init aos-animate" data-aos="fade-up" data-aos-duration="1200">
                  <Link to="contactUs" smooth={true} duration={600}>
                    <button id="btnSubmit" className="font-16 font-ks weight-700 color lineh-16 homepagebtn10 d-inline-block margin-t32 ts"><span>Contact Us</span><span><img src="assets/images/icons/arrowben.svg" alt="" className="ts" /></span></button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 d-none d-md-block" >
              <img className="intr-image" src={introImage} />
            </div>
          </div>
        </div>
      </section >
    </>
  );
};

export default Carousel;
