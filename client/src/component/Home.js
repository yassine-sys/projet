import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getPartenaire } from '../JS/actions/partenaireAction';
import Card from './Card';
import CommentaireList from './CommentaireList';

const Home =()  =>{

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPartenaire());
  }, []);
  const partenaires = useSelector((state) => state.PartenaireReducer.partenaires);    
	    return (
		<div className="row ">
	    <div className="medium-12 columns">
                
            {/* <div className="preloader">
          <div className="loader">
            <div className="wrapper">
              <div className="circle circle-1" />
              <div className="circle circle-1a" />
              <div className="circle circle-2" />
              <div className="circle circle-3" />
            </div>
          </div>
        </div> */}
            
            <div className="main-banner">
          <div className="main-banner-item">
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container-fluid">
                  <div className="row align-items-center">
                    <div className="col-lg-6">
                      <div className="main-banner-content">
                        <span>Jouer, apprendre et grandir</span>
                        <h1>Soyez en contact avec le monde des enfants</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                        <div className="banner-btn">
                          <a href="#" className="default-btn">
                            Learn More
                          </a>
                          <a href="#" className="optional-btn">
                            Find Out More
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="main-banner-image">
                        <img src="assets/img/main-banner/education-girl.png" alt="image" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="main-banner-shape">
            <div className="banner-bg-shape">
              <img src="assets/img/main-banner/banner-bg-shape-1.png" alt="image" />
            </div>
            <div className="shape-1">
              <img src="assets/img/main-banner/banner-shape-1.png" alt="image" />
            </div>
            <div className="shape-2">
              <img src="assets/img/main-banner/banner-shape-2.png" alt="image" />
            </div>
            <div className="shape-3">
              <img src="assets/img/main-banner/banner-shape-3.png" alt="image" />
            </div>
            <div className="shape-4">
              <img src="assets/img/main-banner/banner-shape-4.png" alt="image" />
            </div>
          </div>
        </div>

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
                  <span>Qui nous sommes</span>
                  <h3>L'enfance est notre passion</h3>
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
                    <a href="#" className="default-btn">Voir plus</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="who-we-are-shape">
            <img src="assets/img/who-we-are/who-we-are-shape.png" alt="image" />
          </div>
        </section>
        
            <section className="blog-area pt-100 pb-70">
              {/* ***creche container*** */}
              <div className="container">
                       
            <div className="section-title">
              <span>Nos Crèches</span>
            </div>
            <div className="row">
                {partenaires && partenaires.filter(partenaire=>partenaire.categorie=='creche')
                            .slice(0,3)
                            .map((partenaire) => (<Card key={partenaire._id} partenaire={partenaire} />
                            ))}
            </div>
              </div>

          {/* *** Jardin d'enfant container*** */}
          <div className="container">
            <div className="section-title">
              <span>Nos Jardins d'enfant</span>
              {/* <h2>Latest News</h2> */}
            </div>
            <div className="row">
                {partenaires && partenaires.filter(partenaire=>partenaire.categorie=='jardin')
                            .slice(0,3)
                            .map((partenaire) => (<Card key={partenaire._id} partenaire={partenaire} />
                            ))}
            </div>
          </div>
          {/* *** Ecoles container *** */}
          <div className="container">
            <div className="section-title">
              <span>Nos Ecoles</span>
              {/* <h2>Latest News</h2> */}
            </div>
            <div className="row">
                {partenaires && partenaires.filter(partenaire=>partenaire.categorie=='ecole')
                            .slice(0,3)
                            .map((partenaire) => (<Card key={partenaire._id} partenaire={partenaire} />
                            ))}
            </div>
          </div>

          {/* *** club container *** */}
          <div className="container">
            <div className="section-title">
              <span>Nos Clubs</span>
              {/* <h2>Latest News</h2> */}
            </div>
            <div className="row">
                {partenaires && partenaires.filter(partenaire=>partenaire.categorie=='club')
                            .slice(0,3)
                            .map((partenaire) => (<Card key={partenaire._id} partenaire={partenaire} />
                            ))}
            </div>
          </div>

        </section>
        
      </div>
    </div>
	     );
    }

export default Home;