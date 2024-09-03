/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../style/benefits.css'
import { Link } from 'react-scroll';
import img from '../images/benfits.svg'

const BenefitsSection = () => {
    return (
        <>
            <section className="section section-lg bg-primary-lighten" id="benefits" style={{ marginTop: '75px', paddingBottom:"50px" }}>
                <div className="container">
                    <div className="row row-50 align-items-center" >
                        <div className="col-md-6" style={{ marginTop: "50px", textAlign: 'center' }}>
                            <img src={img} className="img-fluid" />
                        </div>
                        <div className="col-xl-5 col-md-6" style={{ marginTop: "50px", textAlign: 'start' }}>
                            <span id='team' className="font-16 font-outfit weight-500 lineh-16 color36 d-inline-block consultingspan margin-b20" btnAbout>
                                Our work speaks for itself
                            </span>
                            <h1 style={{ color: '#10886F', textShadow: 'rgba(0, 0, 0, 0.3) 4px 4px 5px' }}>Our Words and Commitment</h1>
                            {/* <h5 className=" font-weight-medium" style={{ color: 'gray' }}>
                                Our experts are ready to develop a strategy that will lead you to financial success!
                            </h5> */}
                            <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
                                <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '10px' }}>
                                    <span className="check3-icon" style={{ minWidth: '20px', textAlign: 'center', marginTop: "5px" }}>
                                        <i className="fa-solid fa-check"></i>
                                    </span>
                                    <span className="freedom font-nunito font-16 lineh-16 color-ni weight-600" style={{ marginLeft: '10px' }}>
                                        StripeBookkeeping provides precise and timely bookkeeping services tailored to your business needs.
                                    </span>
                                </li>
                                <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '10px' }}>
                                    <span className="check3-icon" style={{ minWidth: '20px', textAlign: 'center', marginTop: "5px" }}>
                                        <i className="fa-solid fa-check"></i>
                                    </span>
                                    <span className="freedom font-nunito font-16 lineh-16 color-ni weight-600" style={{ marginLeft: '10px' }}>
                                        StripeBookkeeping payroll solutions ensure accurate and compliant processing for peace of mind.
                                    </span>
                                </li>
                                <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '10px' }}>
                                    <span className="check3-icon" style={{ minWidth: '20px', textAlign: 'center', marginTop: "5px" }}>
                                        <i className="fa-solid fa-check"></i>
                                    </span>
                                    <span className="freedom font-nunito font-16 lineh-16 color-ni weight-600" style={{ marginLeft: '10px' }}>
                                        We manage AP/AR efficiently to optimize your cash flow and enhance vendor relationships.
                                    </span>
                                </li>
                                <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '10px' }}>
                                    <span className="check3-icon" style={{ minWidth: '20px', textAlign: 'center', marginTop: "5px" }}>
                                        <i className="fa-solid fa-check"></i>
                                    </span>
                                    <span className="freedom font-nunito font-16 lineh-16 color-ni weight-600" style={{ marginLeft: '10px' }}>
                                        Our team ensures all GST/HST obligations are fulfilled accurately, reducing your risk of audits.
                                    </span>
                                </li>
                                <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '10px' }}>
                                    <span className="check3-icon" style={{ minWidth: '20px', textAlign: 'center', marginTop: "5px" }}>
                                        <i className="fa-solid fa-check"></i>
                                    </span>
                                    <span className="freedom font-nunito font-16 lineh-16 color-ni weight-600" style={{ marginLeft: '10px' }}>
                                        We offer personalized tax planning and preparation to maximize your tax efficiency and savings.
                                    </span>
                                </li>
                                <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '10px' }}>
                                    <span className="check3-icon" style={{ minWidth: '20px', textAlign: 'center', marginTop: "5px" }}>
                                        <i className="fa-solid fa-check"></i>
                                    </span>
                                    <span className="freedom font-nunito font-16 lineh-16 color-ni weight-600" style={{ marginLeft: '10px' }}>
                                        Our professionals provide meticulous audit assistance, helping you navigate through any scrutiny with ease.
                                    </span>
                                </li>
                                <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '10px' }}>
                                    <span className="check3-icon" style={{ minWidth: '20px', textAlign: 'center', marginTop: "5px" }}>
                                        <i className="fa-solid fa-check"></i>
                                    </span>
                                    <span className="freedom font-nunito font-16 lineh-16 color-ni weight-600" style={{ marginLeft: '10px' }}>
                                        We deliver insightful financial advice to empower your business decisions and encourage growth.
                                    </span>
                                </li>
                            </ul>
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
