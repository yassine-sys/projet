import React from 'react'

function HoWeAre() {
    return (
            <div className="row ">
	        <div className="medium-12 columns">
                
                <div className="preloader">
          <div className="loader">
            <div className="wrapper">
              <div className="circle circle-1" />
              <div className="circle circle-1a" />
              <div className="circle circle-2" />
              <div className="circle circle-3" />
            </div>
          </div>
        </div>
        
        {/* ho we are */}

        <section className="who-we-are ptb-100">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="who-we-are-image">
                  <img src="assets/img/who-we-are/who-we-are.jpg" alt="image" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="who-we-are-content">
                  <span>Who We Are</span>
                  <h3>Kindergarten and Childhood is Our Passion</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <ul className="who-we-are-list">
                    <li>
                      <span>1</span>
                      Homelike Environment
                    </li>
                    <li>
                      <span>2</span>
                      Quality Educators
                    </li>
                    <li>
                      <span>3</span>
                      Safety and Security
                    </li>
                    <li>
                      <span>4</span>
                      Play to Learn
                    </li>
                  </ul>
                  <div className="who-we-are-btn">
                    <a href="#" className="default-btn">Read More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="who-we-are-shape">
            <img src="assets/img/who-we-are/who-we-are-shape.png" alt="image" />
          </div>
        </section>
        


      </div>
    </div>
    )
}

export default HoWeAre
