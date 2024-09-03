import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import '../style/impact.css';

const StatsSection = () => {
  const { ref: sectionRef, inView } = useInView({
    triggerOnce: false, // Set to false to ensure the count starts every time it comes into view
    threshold: 0.1, // The percentage of the element's visibility to trigger the effect
  });

  return (
    <section
      className="section section-lg bg-100"
      style={{ marginTop: "75px", backgroundColor: '#F9F8F6' }}
      ref={sectionRef}
    >
      <div className="container">
        <div className="row row-30 justify-content-between">
          <div className="col-lg-6" style={{ textAlign: 'start', marginTop: '50px' }}>
            <span
              id='team'
              className="font-16 font-outfit weight-500 lineh-16 color36 d-inline-block consultingspan margin-b20"
            >
              Team Members
            </span>
            <h1 style={{ color: '#10886F', textShadow: 'rgba(0, 0, 0, 0.3) 4px 4px 5px' }}>
              Lintense provides solutions that support businesses
            </h1>
            <h5 style={{ marginTop: '15px' }}>
              StripeBookkeeping takes care of all the acts related to the financial part, control, the incorporation of companies and the different records of expenses and income of your business.
            </h5>
            <p className="font-16 lineh-26 weight-500 color-30 font-ks" style={{ marginTop: '10px', fontFamily: 'inherit' }}>
              StripeBookkeeping puts people at the center of its activity. Our daily work is geared towards the professional and personal growth of our collaborators. Every day we seek technical excellence and the satisfaction of our clients by creating an environment of effort, rigor, camaraderie and a good working atmosphere. We want to enjoy what we do every day and for that to be the best guarantee of excellence for our clients.
            </p>
          </div>
          <div className="col-md-10 col-lg-6" style={{ marginTop: '50px', textAlign: 'start' }}>
            <div className="row row-30 row-xl-50">
              <div className="col-6">
                {/* Counter default */}
                <article className="counter-default text-white" id='col1'>
                  <div className="counter-default-main">
                    <h1 className="counter">
                      <CountUp start={0} end={inView ? 35 : 0} duration={2} suffix="+" />
                    </h1>
                  </div>
                  <div className="counter-default-title">Skilled professionals</div>
                </article>
              </div>
              <div className="col-6">
                {/* Counter default */}
                <article className="counter-default bg-primary-light text-white" id='col2'>
                  <div className="counter-default-main">
                    <h1 className="counter">
                      <CountUp start={0} end={inView ? 1596 : 0} duration={2} separator="," />
                    </h1>
                  </div>
                  <div className="counter-default-title">Happy clients</div>
                </article>
              </div>
              <div className="col-6">
                {/* Counter default */}
                <article className="counter-default" id='col3'>
                  <div className="counter-default-main">
                    <h1 className="counter">
                      <CountUp start={0} end={inView ? 17 : 0} duration={2} suffix="+" />
                    </h1>
                  </div>
                  <div className="counter-default-title">Years of experience</div>
                </article>
              </div>
              <div className="col-6">
                {/* Counter default */}
                <article className="counter-default" id='col4'>
                  <div className="counter-default-main">
                    <h1 className="counter">
                      <CountUp start={0} end={inView ? 17 : 0} duration={2} suffix="+" />
                    </h1>
                  </div>
                  <div className="counter-default-title">Years of experience</div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
