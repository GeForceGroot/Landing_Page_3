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
                                        What is bookkeeping, and why is it important?
                                    </label>
                                    <div className="accordion-item-desc">
                                        It is the process of recording financial transactions systematically. Bookkeeping ensures accurate financial records, aids in decision-making, and is essential for tax purposes.
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <input type="checkbox" id="accordion2" />
                                    <label htmlFor="accordion2" className="accordion-item-title">
                                        <span className="icon"></span>
                                        How can payroll services benefit my business?
                                    </label>
                                    <div className="accordion-item-desc">
                                    Its services automate salary processing, tax deductions, and compliance with labor laws, saving time and reducing errors while providing employees with timely pay.
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <input type="checkbox" id="accordion3" />
                                    <label htmlFor="accordion3" className="accordion-item-title">
                                        <span className="icon"></span>
                                        What are accounts payable (AP) and accounts receivable (AR)?
                                    </label>
                                    <div className="accordion-item-desc">
                                    Accounts Payable (AP) refers to money owed by a business to suppliers, while Accounts Receivable (AR) is the money owed to the business by customers. Both are crucial for cash flow management.
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <input type="checkbox" id="accordion4" />
                                    <label htmlFor="accordion4" className="accordion-item-title">
                                        <span className="icon"></span>
                                        What is GST/HST, and how do I manage it?
                                    </label>
                                    <div className="accordion-item-desc">
                                    GST (Goods and Services Tax) and HST (Harmonized Sales Tax) are value-added taxes in Canada. Proper bookkeeping ensures accurate collection and remittance to avoid penalties.
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <input type="checkbox" id="accordion5" />
                                    <label htmlFor="accordion5" className="accordion-item-title">
                                        <span className="icon"></span>
                                        Why are tax services essential for my business?
                                    </label>
                                    <div className="accordion-item-desc">
                                    Tax services help minimize tax liabilities through strategic planning and ensure compliance with regulations, reducing the risk of audits and penalties.
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
