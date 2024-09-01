/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../style/service.css'
import icon from '../images/icon.png'

const ServicesSection = () => {
    return (
        <>
            <section className="section section-lg bg-transparent" id="services" style={{ textAlign: "start", marginTop: "75px" }}>
                <div className="container">
                    <h1 style={{ color: '#10886F', textShadow: 'rgba(0, 0, 0, 0.3) 4px 4px 5px' }}>Our Services</h1>
                    <h4 style={{ marginTop: "10px" }}>Our experts are able to find new growth opportunities in your business.</h4>
                    <div className="row row-30 row-xl-50 justify-content-end" style={{ marginTop: "25px" }}>
                        <div className="col-xl-4 col-sm-6">
                            <div className="service">
                                <div className="service-icon">
                                    <img src={icon} alt="" width={'45px'} height={'45px'} />
                                </div>
                                <h4 className="service-title">
                                    <a href="#">Financial Planning</a>
                                </h4>
                                <p className="service-text">We provide quality financial planning services.</p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-sm-6">
                            <div className="service">
                                <div className="service-icon">
                                    <img src={icon} alt="" width={'45px'} height={'45px'} />
                                </div>
                                <h4 className="service-title">
                                    <a href="#">Business Modelling</a>
                                </h4>
                                <p className="service-text">Delivering the best financial modelling solutions.</p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-sm-6">
                            <div className="service">
                                <div className="service-icon">
                                    <img src={icon} alt="" width={'45px'} height={'45px'} />
                                </div>
                                <h4 className="service-title">
                                    <a href="#">Investment Management</a>
                                </h4>
                                <p className="service-text">Ensuring that all your assets are put to the best use.</p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-sm-6">
                            <div className="service">
                                <div className="service-icon">
                                    <img src={icon} alt="" width={'45px'} height={'45px'} />
                                </div>
                                <h4 className="service-title">
                                    <a href="#">Investment Management</a>
                                </h4>
                                <p className="service-text">Ensuring that all your assets are put to the best use.</p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-sm-6">
                            <div className="service">
                                <div className="service-icon">
                                    <img src={icon} alt="" width={'45px'} height={'45px'} />
                                </div>
                                <h4 className="service-title">
                                    <a href="#">Strategic Planning</a>
                                </h4>
                                <p className="service-text">Creating a suitable financial strategy for your business.</p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-sm-6">
                            <div className="service">
                                <div className="service-icon">
                                    <img src={icon} alt="" width={'45px'} height={'45px'} />
                                </div>
                                <h4 className="service-title">
                                    <a href="#">Market Analysis</a>
                                </h4>
                                <p className="service-text">Creating a suitable financial strategy for your business</p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-sm-6">
                            <div className="service">
                                <div className="service-icon">
                                    <img src={icon} alt="" width={'45px'} height={'45px'} />
                                </div>
                                <h4 className="service-title">
                                    <a href="#">Investment Management</a>
                                </h4>
                                <p className="service-text">Ensuring that all your assets are put to the best use.</p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-sm-6">
                            <div className="service">
                                <div className="service-icon">
                                    <img src={icon} alt="" width={'45px'} height={'45px'} />
                                </div>
                                <h4 className="service-title">
                                    <a href="#">Strategic Planning</a>
                                </h4>
                                <p className="service-text">Creating a suitable financial strategy for your business.</p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-sm-6">
                            <div className="service">
                                <div className="service-icon">
                                    <img src={icon} alt="" width={'45px'} height={'45px'} />
                                </div>
                                <h4 className="service-title">
                                    <a href="#">Market Analysis</a>
                                </h4>
                                <p className="service-text">Creating a suitable financial strategy for your business</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ServicesSection;
