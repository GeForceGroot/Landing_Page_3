import React from 'react'
import '../style/faq.css'

const Faq = () => {
    return (
        <>
            <section style={{ backgroundColor: '#F1F7F5' }}>
                <div className='container' style={{ marginTop: "50px" }}>
                    <div className='row'>
                        <div className='col-lg-4 col-md-12' style={{ textAlign: 'start' }} >
                            <h2 style={{ marginTop: '50px', color: 'rgb(151 151 151)' }}>FAQ's</h2>
                            <h2 style={{ color: '#10886F', textShadow: 'rgba(0, 0, 0, 0.3) 4px 4px 5px' }}>Frequently Asked Questions</h2>
                        </div>
                        <div className='col-lg-8 col-md-12' style={{ textAlign: 'start' }}>
                            <div className="accordion">
                                <div className="accordion-item">
                                    <input type="checkbox" id="accordion1" />
                                    <label htmlFor="accordion1" className="accordion-item-title">
                                        <span className="icon"></span>
                                        What consulting services do you offer?
                                    </label>
                                    <div className="accordion-item-desc">
                                        We offer a wide range of consulting services including strategic planning, digital transformation, business process optimization, market analysis, and more. Our goal is to provide tailored solutions that address your organization's unique challenges and goals.
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <input type="checkbox" id="accordion2" />
                                    <label htmlFor="accordion2" className="accordion-item-title">
                                        <span className="icon"></span>
                                        How can consulting services benefit my business?
                                    </label>
                                    <div className="accordion-item-desc">
                                        Consulting services can bring valuable expertise, fresh perspectives, and strategic insights to your business. They help in identifying growth opportunities, improving operational efficiency, minimizing risks, and staying competitive in a rapidly changing market landscape.
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <input type="checkbox" id="accordion3" />
                                    <label htmlFor="accordion3" className="accordion-item-title">
                                        <span className="icon"></span>
                                        How do you ensure confidentiality and data security?
                                    </label>
                                    <div className="accordion-item-desc">
                                        Confidentiality and data security are paramount to us. We adhere to strict confidentiality agreements and implement robust data protection measures to safeguard your sensitive information. Our consultants operate with the highest ethical standards and integrity.
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <input type="checkbox" id="accordion4" />
                                    <label htmlFor="accordion4" className="accordion-item-title">
                                        <span className="icon"></span>
                                        What industries do you specialize in?
                                    </label>
                                    <div className="accordion-item-desc">
                                        We have experience working across various industries including technology, healthcare, finance, retail, manufacturing, and more. Our consultants bring industry-specific knowledge and best practices to deliver impactful solutions tailored to your sector.
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <input type="checkbox" id="accordion5" />
                                    <label htmlFor="accordion5" className="accordion-item-title">
                                        <span className="icon"></span>
                                        How do I get started with your consulting services?
                                    </label>
                                    <div className="accordion-item-desc">
                                        Getting started is easy! Simply contact us through our website or give us a call to schedule an initial consultation. We'll discuss your specific needs, objectives, and expectations. From there, we'll propose a customized consulting approach to help you achieve your business goals.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Faq
