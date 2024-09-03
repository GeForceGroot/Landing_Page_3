import React from 'react'
import '../style/team.css'
import img from '../images/kaushik.png'
import { Link } from 'react-scroll';

const TeamMember = () => {

    return (
        <>
            <div className="team-details-sectionarea section-padding5" style={{ marginTop: '75px' }}>
                <div className="container">
                    <div className="row align-items-center" id='temOClReverse'>
                        <div className="col-lg-6">
                            <div className="team-detailsimg">
                                <img
                                    btnAbout
                                    src={img}
                                    width={'400px'}
                                    height={'400px'}
                                    alt="Team Member"
                                    
                                />
                            </div>
                        </div>
                        <div className="col-lg-6" id='textSet'>
                            <div className="team-detailsarea">
                                <span
                                    id='team'
                                    className="font-16 font-outfit weight-500 lineh-16 color36 d-inline-block consultingspan margin-b20"
                                    btnAbout
                                >
                                    About Our Team
                                </span>
                                <h1
                                    btnAbout
                                    className="font-lora font-48 lineh-54 weight-600 color-29 margin-b"
                                    style={{color: '#10886F', textShadow: 'rgba(0, 0, 0, 0.3) 4px 4px 5px', margin: '0px' }}
                                    id='nameKau'
                                >
                                    Mr Kaushik Thakkar
                                </h1>
                                <p
                                    btnAbout
                                    className="font-16 lineh-26 weight-500 color-30 font-ks"
                                    style={{ marginTop: '20px', fontFamily: 'inherit' }}
                                >
                                    StripeBookkeeping has a solid, motivated, committed team that is eager to grow. Thanks to master mind behind all this success, Kaushik Thakkar, the man who led the foundation of this beautiful journey. Our talent attraction and retention programme and our training plan, together with our experience, our dedication to service and the trust placed in us by our clients over all these years establish us as one of the most prestigious companies in the sector.
                                </p>
                                <Link to="contactUs" smooth={true} duration={600}>
                                    <button
                                        btnAbout
                                        id="btnContact"
                                    >
                                        <span>Get In Touch</span>
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TeamMember
