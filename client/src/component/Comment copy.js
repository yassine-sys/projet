import React from 'react'

function Comment() {
    return (
        <div className="row ">
	        <div className="medium-12 columns">
                
           <section className="testimonials-area pt-100 pb-100">
          <div className="container">
            <div className="testimonials-slides owl-carousel owl-theme owl-loaded owl-drag">
              <div className="owl-stage-outer">
                <div className="owl-stage" style={{transform: 'translate3d(-1520px, 0px, 0px)', transition: 'all 0.25s ease 0s', width: '4560px'}}>
                  <div className="owl-item cloned" style={{width: '350px', marginRight: '30px'}}>
                    <div className="testimonials-item">
                      <div className="testimonials-item-box">
                        <div className="icon">
                        <i className="bx bxs-quote-left" />
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                        <div className="info-box">
                          <h3>Glims Bond</h3>
                          <span>Music Teacher</span>
                          </div>
                          </div>
                          <div className="testimonials-image">
                            <img src="assets/img/testimonials/testimonials-1.png" alt="image" />
                            </div>
                            </div>
                            </div>
                              
                              </div>
                              
                              </div>
              <div className="owl-nav">
                <button type="button" role="presentation" className="owl-prev">
                  <i className="bx bx-chevron-left" />
                  </button>
                <button type="button" role="presentation" className="owl-next">
                  <i className="bx bx-chevron-right" />
                  </button>
              </div>
              {/* <div className="owl-dots disabled" /> */}
              </div>
            </div>
        </section>
                
          </div>
        </div>
    )
}

export default Comment
