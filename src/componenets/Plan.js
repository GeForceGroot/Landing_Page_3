import React from 'react'
import '../style/plan.css'
import { Link } from 'react-scroll';
import plan from '../images/plan.png'

const Plan = () => {
    return (
        <>
            <div class="about3-section-area section-padding5" id="about" style={{ marginTop: "75px" }}>
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-6 aos-init aos-animate" data-aos="fade-right" data-aos-duration="1000">
                            <div class="about-3-images">
                                <img src={plan} alt="Plan" />
                            </div>
                        </div>
                        <div class="col-lg-6 aos-init aos-animate" data-aos="fade-left" data-aos-duration="1000" style={{ textAlign: 'start' }}>
                            <div class="about3-textarea">
                                <span class="finance1 font-16 font-nunito lineh-16 weight-600 color-25 margin-b24">About Us</span>
                                <h1 class="font-lora font-44 weight-600 color-ni lineh-54" style={{ marginTop: '25px', color: '#10886F', textShadow: 'rgba(0, 0, 0, 0.3) 4px 4px 5px' }}>We'll help you create a customized <span class="success1 font-44 lineh-54 color-25">financial</span> plan.</h1>
                                <p class="font-nunito font-18 lineh-26 weight-600 color-26 margin-t" style={{ marginTop: '25px' }}>Maximize your business's financial potential with our expert advice. <br /> From financial analysis to risk management, we'll assist you in making <br /> well. We'll help you create a customized financial plan, manage </p>
                                <div class="about3-listarea">
                                    <div className="row">
                                        <div className="col-lg-6 aos-init aos-animate" data-aos="fade-left" data-aos-duration="1000">
                                            <div className="about3-author-list margin-t32">
                                                <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
                                                    <li style={{ textAlign: 'left' }}>
                                                        <span className="check3-icon margin-b"><i className="fa-solid fa-check"></i></span>
                                                        <span className="freedom font-nunito font-16 lineh-16 color-ni weight-600" style={{ marginLeft: '10px' }}>
                                                            Financial Freedom Consulting
                                                        </span>
                                                    </li>
                                                    <li style={{ textAlign: 'left' }}>
                                                        <span className="check3-icon"><i className="fa-solid fa-check"></i></span>
                                                        <span className="freedom font-nunito font-16 lineh-16 color-ni weight-600" style={{ marginLeft: '10px' }}>
                                                            Money Management Consulting
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 aos-init aos-animate" data-aos="fade-left" data-aos-duration="1000">
                                            <div className="about3-author-list margin-t32">
                                                <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
                                                    <li style={{ textAlign: 'left' }}>
                                                        <span className="check3-icon margin-b"><i className="fa-solid fa-check"></i></span>
                                                        <span className="freedom font-nunito font-16 lineh-16 color-ni weight-600" style={{ marginLeft: '10px' }}>
                                                            Financial Freedom Consulting
                                                        </span>
                                                    </li>
                                                    <li style={{ textAlign: 'left' }}>
                                                        <span className="check3-icon"><i className="fa-solid fa-check"></i></span>
                                                        <span className="freedom font-nunito font-16 lineh-16 color-ni weight-600" style={{ marginLeft: '10px' }}>
                                                            Money Management Consulting
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div class="about-3-afterbefore aos-init aos-animate" data-aos="fade-left" data-aos-duration="1200">
                                    <p class="font-nunito font-16 lineh-26 color-ni weight-600">We'll help you create a customized financial plan, manage budgets, and make informed investment decisions for Console.</p>
                                </div>
                                <Link to="contactUs" smooth={true} duration={600}>
                                    <button id="btnSubmit" className="font-16 font-ks weight-700 color lineh-16 homepagebtn10 d-inline-block margin-t32 ts"><span>Explore More...</span><span><img src="assets/images/icons/arrowben.svg" alt="" className="ts" /></span></button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Plan
