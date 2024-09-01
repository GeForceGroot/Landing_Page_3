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
            <h5 style={{ marginTop: '25px' }}>
              Take a look at the recent facts and numbers to find out more about Lintense and how we help companies.
            </h5>
            <p className="font-16 lineh-26 weight-500 color-30 font-ks" style={{ marginTop: '20px', fontFamily: 'inherit' }}>
              lordjashdasjd dhsaiodkasnd admhsaiodnas dmashifosa f sbisna fdmkajfoijsdf smdfjiosjfnm fmnksjdogfndsmnf klsjflks dfmkjsfojsnnm dsfkj
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
