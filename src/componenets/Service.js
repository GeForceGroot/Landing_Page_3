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
                                <h3 className="service-title" style={{ color: '#10886F', textShadow: 'rgba(0, 0, 0, 0.3) 4px 4px 5px' }}>Outsourcing</h3>
                                <ul className='service-text'>
                                    <li>Bookkeeping and Year-end finalization</li>
                                    <li>Payroll preparation and filing</li>
                                    <li>Sales tax (GST/PST/HST) preparation and filing</li>
                                    <li>Accounts Receivable/Payable Management</li>
                                    <li>Tax return preparation, review and filing</li>
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
                                    <li>Entry of Bills, Invoices and Payroll reports</li>
                                    <li>Record Bank and Credit Card tranactions</li>
                                    <li>Bank and credit card reconciliations</li>
                                    <li>Promptly address client Queries</li>
                                    <li>Promptly address client QuerBookkeeping Review and Management reports</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-4 col-sm-6">
                            <div className="service">
                                <div className="service-icon">
                                    <img src={img8} alt="" width={'45px'} height={'45px'} />
                                </div>
                                <h3 className="service-title" style={{ color: '#10886F', textShadow: 'rgba(0, 0, 0, 0.3) 4px 4px 5px' }}>Sales tax/GST/HST</h3>
                                <ul className='service-text'>
                                    <li>Record every transactions</li>
                                    <li>Cross-check transactions</li>
                                    <li>Verify credits and exemptions</li>
                                    <li>Ensure accurate, timely filing</li>
                                    <li>Stay compliant with regulations</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-4 col-sm-6">
                            <div className="service">
                                <div className="service-icon">
                                    <img src={img3} alt="" width={'45px'} height={'45px'} />
                                </div>
                                <h3 className="service-title" style={{ color: '#10886F', textShadow: 'rgba(0, 0, 0, 0.3) 4px 4px 5px' }}>Payroll - US & Canada</h3>
                                <ul className='service-text'>
                                    <li>Time and Attendance verifying</li>
                                    <li>Paystub of hourly & salaried based staff</li>
                                    <li>Direct deposit and Tax withholding filing</li>
                                    <li>941, 940, Withholding Tax and Unemployement</li>
                                    <li>Payroll Reconiliation at year-end</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-4 col-sm-6">
                            <div className="service">
                                <div className="service-icon">
                                    <img src={img4} alt="" width={'45px'} height={'45px'} />
                                </div>
                                <h3 className="service-title" style={{ color: '#10886F', textShadow: 'rgba(0, 0, 0, 0.3) 4px 4px 5px' }}>Accounts Payable/Receivable</h3>
                                <ul className='service-text'>
                                    <li>Record Vendor bill and Customer Invoice</li>
                                    <li>Payment processing for Bill and Invoice</li>
                                    <li>Analyst AP Aging and AR Aging</li>
                                    <li>Vendor reconiliations and reports</li>
                                    <li>Automation and Technology Integration</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-4 col-sm-6">
                            <div className="service">
                                <div className="service-icon">
                                    <img src={img6} alt="" width={'45px'} height={'45px'} />
                                </div>
                                <h3 className="service-title" style={{ color: '#10886F', textShadow: 'rgba(0, 0, 0, 0.3) 4px 4px 5px' }}>Audit</h3>
                                <ul className='service-text'>
                                    <li>Federal/State Tax Audit</li>
                                    <li>Payroll Audit</li>
                                    <li>Sales Tax/GST/HST Audit</li>
                                    <li>Unemployment Tax Audit</li>
                                    <li>Complied Federal/State tax Law</li>
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
