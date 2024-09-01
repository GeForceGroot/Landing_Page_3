/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../style/benefits.css'
import { Link } from 'react-scroll';
import img from '../images/benfits.svg'

const BenefitsSection = () => {
    return (
        <>
            <section className="section section-lg bg-primary-lighten" id="benefits" style={{ marginTop: '75px' }}>
                <div className="container">
                    <div className="row row-50 align-items-center" >
                        <div className="col-md-6" style={{ marginTop: "50px", textAlign: 'center' }}>
                            <img src={img} className="img-fluid" />
                        </div>
                        <div className="col-xl-5 col-md-6" style={{ marginTop: "50px", textAlign: 'start' }}>
                            <h1 style={{ color: '#10886F', textShadow: 'rgba(0, 0, 0, 0.3) 4px 4px 5px' }}>We want to improve your business</h1>
                            <h5 className=" font-weight-medium" style={{ color: 'gray' }}>
                                Our experts are ready to develop a strategy that will lead you to financial success!
                            </h5>
                            <p>
                                We aim at supporting companies in making informed and value-maximizing decisions and paving their way through the challenges of implementation.
                            </p>
                            <p>
                                Our delivery is backed by profound research and rigorous analysis of the situation in place and surrounding factors.
                            </p>
                            <Link to="contactUs" smooth={true} duration={600}>
                                <button id="btnSubmit" className="font-16 font-ks weight-700 color lineh-16 homepagebtn10 d-inline-block margin-t32 ts"><span>Learn More ...</span><span><img src="assets/images/icons/arrowben.svg" alt="" className="ts" /></span></button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BenefitsSection;
