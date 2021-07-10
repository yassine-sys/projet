import React, { Component,useEffect } from 'react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPartenaire } from '../../JS/actions/partenaireAction';

const ClubDetail = (props) => {
            console.log(props.match.params.id)

  
  const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getPartenaire());
    }, []);
    // const partenaires = useSelector((state) => state.partenaires);

  const clubFound= props.partenaires.filter(el=>el.categorie=='club').find(
        (club) => club._id==props.match.params.id
        );
      
  return (
    
    <div className="row ">
      <div className="medium-12 columns">

        <div className="page-banner-area item-bg3">
          <div className="d-table">
            <div className="d-table-cell">
              <div className="container">
                <div className="page-banner-content">
                  <h2>{clubFound.partenaire_name}</h2>
                  <ul>
                    <li>
                      <Link strict to='home-page'><a>Home</a></Link>
                    </li>
                    <li>{`Détails du ${clubFound.categorie}`} </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
                
         <section className="event-details-area ptb-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-12">
                <div className="event-details-desc">
                  <div className="event-desc-image">
                    <img src="assets/img/event-details.jpg" alt="image" />
                  </div>
                        
                </div>
              </div>
              <div className="col-lg-4 col-md-12">
                <div className="event-details-information">
                  <h3>Détails du partenaire</h3>
                  <ul>
                    <li>
                      <span>Le directeur/ice: </span>
                      {clubFound.responsable_name}
                    </li>
                    <li>
                      <span>Tel: </span>
                      {clubFound.tel}
                    </li>
                    <li>
                      <span>Adresse: </span>
                      {clubFound.adresse}
                    </li>
                    <li>
                      <span>Ville: </span>
                      {clubFound.ville}
                    </li>
                    <li>
                      <span>Code postale: </span>
                      {clubFound.code_postal}
                    </li>
                    <li>
                      <span>Siteweb: </span>
                      <a>{`www.${clubFound.partenaire_name}.com`}</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div> 
            {/* *hqui somme nous** */}
                  <section className="who-we-are ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="who-we-are-content">
                <span>Qui nous sommes</span>
                <h3>En savoir plus sur notre travail et nos activités</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                
              </div>
            </div>
            <div className="col-lg-6">
              <div className="who-we-are-image-wrap">
                <img src="assets/img/who-we-are/who-we-are-2.png" alt="image" />
              </div>
            </div>
          </div>
        </div>
      </section>
          </div>
        </section>
        
        {/* ****photos***** */}
        <div className="gallery-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span>Gallery</span>
            <h2>Our Activities Gallery</h2>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-gallery-box">
                <img src="assets/img/gallery/gallery-1.jpg" alt="image" />
                <a href="assets/img/gallery/gallery-1.jpg" className="gallery-btn" data-imagelightbox="popup-btn">
                  <i className="bx bx-search-alt" />
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-gallery-box">
                <img src="assets/img/gallery/gallery-2.jpg" alt="image" />
                <a href="assets/img/gallery/gallery-2.jpg" className="gallery-btn" data-imagelightbox="popup-btn">
                  <i className="bx bx-search-alt" />
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-gallery-box">
                <img src="assets/img/gallery/gallery-3.jpg" alt="image" />
                <a href="assets/img/gallery/gallery-3.jpg" className="gallery-btn" data-imagelightbox="popup-btn">
                  <i className="bx bx-search-alt" />
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-gallery-box">
                <img src="assets/img/gallery/gallery-4.jpg" alt="image" />
                <a href="assets/img/gallery/gallery-4.jpg" className="gallery-btn" data-imagelightbox="popup-btn">
                  <i className="bx bx-search-alt" />
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-gallery-box">
                <img src="assets/img/gallery/gallery-5.jpg" alt="image" />
                <a href="assets/img/gallery/gallery-5.jpg" className="gallery-btn" data-imagelightbox="popup-btn">
                  <i className="bx bx-search-alt" />
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-gallery-box">
                <img src="assets/img/gallery/gallery-6.jpg" alt="image" />
                <a href="assets/img/gallery/gallery-6.jpg" className="gallery-btn" data-imagelightbox="popup-btn">
                  <i className="bx bx-search-alt" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    
        {/* ****commentaires des parents**** */}
        <section className="testimonials-area pt-100 pb-100">
        <div className="container">
          <div className="section-title">
            <span>Témoignages</span>
            <h2>Ce que les parents disent de nous</h2>
          </div>
          <div className="testimonials-slides owl-carousel owl-theme">
            <div className="testimonials-item">
              <div className="testimonials-item-box">
                <div className="icon">
                  <i className="bx bxs-quote-left" />
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                <div className="info-box">
                  <h3>nom de parent</h3>
                  <span>Date de publication</span>
                </div>
              </div>
              <div className="testimonials-image">
                <img src="assets/img/testimonials/testimonials-1.png" alt="image" />
              </div>
            </div>
            <div className="testimonials-item">
              <div className="testimonials-item-box">
                <div className="icon">
                  <i className="bx bxs-quote-left" />
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                <div className="info-box">
                  <h3>nom de parent</h3>
                  <span>Date de publication</span>
                </div>
              </div>
              <div className="testimonials-image">
                <img src="assets/img/testimonials/testimonials-2.png" alt="image" />
              </div>
            </div>
            <div className="testimonials-item">
              <div className="testimonials-item-box">
                <div className="icon">
                  <i className="bx bxs-quote-left" />
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                <div className="info-box">
                  <h3>nom de parent</h3>
                  <span>Date de publication</span>
                </div>
              </div>
              <div className="testimonials-image">
                <img src="assets/img/testimonials/testimonials-3.png" alt="image" />
              </div>
            </div>
            <div className="testimonials-item">
              <div className="testimonials-item-box">
                <div className="icon">
                  <i className="bx bxs-quote-left" />
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                <div className="info-box">
                  <h3>nom de parent</h3>
                  <span>Date de publication</span>
                </div>
              </div>
              <div className="testimonials-image">
                <img src="assets/img/testimonials/testimonials-1.png" alt="image" />
              </div>
            </div>
            <div className="testimonials-item">
              <div className="testimonials-item-box">
                <div className="icon">
                  <i className="bx bxs-quote-left" />
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                <div className="info-box">
                  <h3>nom de parent</h3>
                  <span>Date de publication</span>
                </div>
              </div>
              <div className="testimonials-image">
                <img src="assets/img/testimonials/testimonials-2.png" alt="image" />
              </div>
            </div>
            <div className="testimonials-item">
              <div className="testimonials-item-box">
                <div className="icon">
                  <i className="bx bxs-quote-left" />
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                <div className="info-box">
                  <h3>nom de parent</h3>
                  <span>Date de publication</span>
                </div>
              </div>
              <div className="testimonials-image">
                <img src="assets/img/testimonials/testimonials-3.png" alt="image" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
        {/* ***carte et avis parents*** */}
        
        <section className="event-details-area ptb-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <div className="event-details-information">
                  <h3>carte</h3>
                  <div id="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9476519598093!2d-73.99185268459418!3d40.74117737932881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a3f81d549f%3A0xb2a39bb5cacc7da0!2s175%205th%20Ave%2C%20New%20York%2C%20NY%2010010%2C%20USA!5e0!3m2!1sen!2sbd!4v1588746137032!5m2!1sen!2sbd" />
                  </div>
                  
                </div>
              </div>
              <div className="col-lg-5 col-md-12">
                <div className="event-details-information">
                  <h3>Les avis des parents</h3>
                  
               <div id="reviews">

                    <p className="first-progress">Sécurité</p>
                    <div className="reviews-bars">
                      <div className="progress">
                    <div className="progress-bar first-progress" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} style={{width: '80%'}}/>
                      </div>
                    <span>4/5</span>
                    </div>

                    <p className="second-progress">Hygiène</p><div className="reviews-bars">
                    <div className="progress">
                      <div className="progress-bar second-progress" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} style={{width: '80%'}}/>
                        </div> 
                        <span>4/5</span>
                        </div>
                          
                    <p className="third-progress">Personnel</p><div className="reviews-bars">
                    <div className="progress">
                      <div className="progress-bar third-progress" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} style={{width: '80%'}}/>
                        </div> 
                        <span>4/5</span>
                        </div>
                            
                    <p className="fourth-progress">Niveau scolaire</p><div className="reviews-bars">
                    <div className="progress">
                      <div className="progress-bar fourth-progress" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} style={{width: '80%'}}/>
                        </div> 
                        <span>4/5</span>
                        </div>
                              
                    <p className="fifth-progress">Rapport Qualité / Prix</p><div className="reviews-bars">
                    <div className="progress">
                      <div className="progress-bar fifth-progress" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} style={{width: '80%'}}/>
                        </div> 
                        <span>4/5</span>
                        </div>
                 </div>
                </div>
              </div>

              
            </div>
            
          </div>
        </section>
      
      
      </div>
    </div>
    );
};

export default ClubDetail;