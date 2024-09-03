/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../style/service.css'
import icon from '../images/icon.png'
import logo from '../images/bookK.png'
import img8 from '../images/risk.png'
import img3 from '../images/s.png'
import img4 from '../images/cfo.png'
import img5 from '../images/po.png'
import img6 from '../images/gst.png'

const ServicesSection = () => {
    return (
        <>
            <section className="section section-lg bg-transparent" id="services" style={{ textAlign: "start", marginTop: "75px" }}>
                <div className="container">
                    <h1 style={{ color: '#10886F', textShadow: 'rgba(0, 0, 0, 0.3) 4px 4px 5px', textAlign:'center' }}>What we offer</h1>
                    <h4 style={{ marginTop: "10px", textAlign:'center' }}>Your Satisfaction is our motto</h4>
                    <div className="row row-30 row-xl-50 justify-content-end" style={{ marginTop: "25px" }}>
                        <div className="col-xl-4 col-sm-6">
                            <div className="service">
                                <div className="service-icon">
                                    <img src={img5} alt="" width={'45px'} height={'45px'} />
                                </div>
                                <h3 className="service-title" style={{ color: '#10886F', textShadow: 'rgba(0, 0, 0, 0.3) 4px 4px 5px' }}>Outsourcing Service</h3>
                                <ul className='service-text'>
                                    <li>Seek only the required services</li>
                                    <li>Get Professional assistance for general accounting and bookkeeping</li>
                                    <li>Combine your accounts payable and accounts</li>
                                    <li>Receivable accounts</li>
                                    <li>Outsource complete solution from order to cash.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-4 col-sm-6">
                            <div className="service">
                                <div className="service-icon">
                                    <img src={logo} alt="" width={'45px'} height={'45px'} />
                                </div>
                                <h3 className="service-title" style={{ color: '#10886F', textShadow: 'rgba(0, 0, 0, 0.3) 4px 4px 5px' }}>Bookkeeping
                                </h3>
                                <ul className='service-text'>
                                    <li>StripeBookkeeping keeps track of all your financial transactions, including expenses and sales.</li>
                                    <li>Customers receive regular financial statements that help you understand your business’s financial health.</li>
                                    <li>We categorize your expenses, making it easier to keep an eye on your spending.</li>
                                    <li>Organized records make tax time a breeze, ensuring you’re prepared for filing.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-4 col-sm-6">
                            <div className="service">
                                <div className="service-icon">
                                    <img src={img8} alt="" width={'45px'} height={'45px'} />
                                </div>
                                <h3 className="service-title" style={{ color: '#10886F', textShadow: 'rgba(0, 0, 0, 0.3) 4px 4px 5px' }}>Risk Assessment Audits</h3>
                                <ul className='service-text'>
                                    <li>We help you find potential financial risks in your business.</li>
                                    <li>Together, we create strategies to minimize those risks and protect your assets.</li>
                                    <li>Ensures that your business meets all legal requirements to avoid penalties.</li>
                                    <li>Ongoing assessments keep your risk management updated and effective.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-4 col-sm-6">
                            <div className="service">
                                <div className="service-icon">
                                    <img src={img3} alt="" width={'45px'} height={'45px'} />
                                </div>
                                <h3 className="service-title" style={{ color: '#10886F', textShadow: 'rgba(0, 0, 0, 0.3) 4px 4px 5px' }}>Comprehensive Budgeting Services</h3>
                                <ul className='service-text'>
                                    <li>We create personalized budgets based on your specific business goals.</li>
                                    <li>Predict your future expenses to manage your finances better.</li>
                                    <li>We monitor your budget performance and suggest adjustments as needed.</li>
                                    <li>Helps you align your spending with your long-term financial objectives.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-4 col-sm-6">
                            <div className="service">
                                <div className="service-icon">
                                    <img src={img4} alt="" width={'45px'} height={'45px'} />
                                </div>
                                <h3 className="service-title" style={{ color: '#10886F', textShadow: 'rgba(0, 0, 0, 0.3) 4px 4px 5px' }}>On-Demand CFO Services</h3>
                                <ul className='service-text'>
                                    <li>Access strategic advice from a seasoned CFO when you need it.</li>
                                    <li>Pay for CFO services only when necessary, without a full-time commitment.</li>
                                    <li>Assistance in creating financial forecasts and growth plans.</li>
                                    <li>Gain insights into your business performance from a financial perspective.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-4 col-sm-6">
                            <div className="service">
                                <div className="service-icon">
                                    <img src={img6} alt="" width={'45px'} height={'45px'} />
                                </div>
                                <h3 className="service-title" style={{ color: '#10886F', textShadow: 'rgba(0, 0, 0, 0.3) 4px 4px 5px' }}>GST/HST</h3>
                                <ul className='service-text'>
                                    <li>We help calculate Goods and Services Tax (GST) and Harmonized Sales Tax (HST) correctly.</li>
                                    <li>We guide you through the process of filing your GST/HST returns.</li>
                                    <li>Ensure you maximize any tax credits available to you.</li>
                                    <li>Stay informed on any changes in tax rates or rules that could affect your business.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ServicesSection;
