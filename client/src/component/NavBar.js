import React, {useState} from 'react';
import { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {Link} from "react-router-dom"

import { logout } from '../JS/actions/authAction';
import authReducer from '../JS/reducer/authReducer';


const NavBar = () =>  {
  const dispatch = useDispatch();
  //  const role = useSelector(state=>state.authReducer.user.role)
  const isAuth = useSelector((state) => state.authReducer.isAuth);
  const logoutParent = () => {
    dispatch(logout());
  };



  const authLinks=(
    <Fragment>
    {/* <li className="nav-item">
      <Link to={`/${role=='parent' ? 'parent' : 'partenaire'}-dashboard`}>
        <a className="nav-link">
          Dashboard-Partenaire
        </a>
        </Link>
        </li> */}
      
      
      
      <li className="nav-item">
      <Link to="#" onClick={logoutParent}>
        <a className="nav-link">
          Logout
        </a>
        </Link>  
    </li>
    
    </Fragment>
  );
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
        <div className="navbar-area">
          <div className="main-responsive-nav">
            <div className="container">
              <div className="main-responsive-menu">
                <div className="logo">
                  <a>
                    <img src="assets/img/logo.png" alt="image" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="main-navbar">
            <div className="container">
              <nav className="navbar navbar-expand-md navbar-light">
                <a className="navbar-brand">
                  <img src="assets/img/logo.png" alt="image" />
                </a>
                <div className="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <Link to='/'><a className="nav-link ">
                        Home
                      </a></Link>
                      
                    </li>
                    <li className="nav-item">
                      <Link to='/liste-crèches'><a className="nav-link">
                        Creches
                      </a></Link>
                     
                    </li>
                    <li className="nav-item">
                      <Link to="/liste-jardins"><a className="nav-link">
                        Jardin d'Enfant
                      </a></Link>
                      
                    </li>
                    <li className="nav-item">
                      <Link to="/liste-écoles"><a className="nav-link">
                        Ecoles
                      </a></Link>
                      
                    </li>
                    
                    <li className="nav-item">
                      <Link to="/liste-clubs"><a className="nav-link">
                        Clubs
                      </a></Link>
                      
                    </li>
                    {isAuth ? authLinks :(  
                      <Fragment>
                    <li className="nav-item">
                      <a className="nav-link">
                        Parent
                        <i className="bx bx-chevron-down" /> 
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <Link to='/se-connecter-parent'><a className="nav-link">
                            Se connecter
                          </a></Link>
                        </li>
                        <li className="nav-item">
                          <Link to='/inscrire-parent'><a className="nav-link">
                            S'insrire
                          </a></Link>
                        </li>
                      </ul>
                    </li>
                    
                     
                      
                    
                    <li className="nav-item">
                      <a  className="nav-link">
                        Partenaire
                      <i className="bx bx-chevron-down" /> 
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <Link to='/se-connecter-partenaire'><a className="nav-link">
                            Se connecter
                          </a></Link>
                        </li>
                        <li className="nav-item">
                          <Link to='/inscrire-partenaire'><a className="nav-link">
                            S'insrire
                          </a></Link>
                        </li>
                      </ul>
                    </li>
                    </Fragment>
                    
                    )}
                   
                  </ul>
                    
                  <div className="others-options d-flex align-items-center">
                    <div className="option-item">
                      <div className="dropdown language-switcher d-inline-block">
                        <button className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <span>Langue <i className="bx bx-chevron-down" /></span>
                        </button>
                        <div className="dropdown-menu">
                          <a href="#" className="dropdown-item d-flex align-items-center">
                            <img src="assets/img/english.png" className="shadow-sm" alt="flag" />
                            <span>English</span>
                          </a>
                          <a href="#" className="dropdown-item d-flex align-items-center">
                            <img src="assets/img/arab.png" className="shadow-sm" alt="flag" />
                            <span>العربيّة</span>
                          </a>
                          <a href="#" className="dropdown-item d-flex align-items-center">
                            <img src="assets/img/francais.png" className="shadow-sm" alt="flag" />
                            <span>Français</span>
                          </a>
                          
                        </div>
                      </div>
                    </div>
                    <div className="option-item">
                      <a href="#" className="default-btn">Contact Us</a>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
          <div className="others-option-for-responsive">
            <div className="container">
              <div className="dot-menu">
                <div className="inner">
                  <div className="circle circle-one" />
                  <div className="circle circle-two" />
                  <div className="circle circle-three" />
                </div>
              </div>
              <div className="container">
                <div className="option-inner">
                  <div className="others-options d-flex align-items-center">
                    <div className="option-item">
                      <div className="dropdown language-switcher d-inline-block">
                        <button className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <span>Language <i className="bx bx-chevron-down" /></span>
                        </button>
                        <div className="dropdown-menu">
                          <a href="#" className="dropdown-item d-flex align-items-center">
                            <img src="assets/img/english.png" className="shadow-sm" alt="flag" />
                            <span>English</span>
                          </a>
                          <a href="#" className="dropdown-item d-flex align-items-center">
                            <img src="assets/img/arab.png" className="shadow-sm" alt="flag" />
                            <span>العربيّة</span>
                          </a>
                          <a href="#" className="dropdown-item d-flex align-items-center">
                            <img src="assets/img/francais.png" className="shadow-sm" alt="flag" />
                            <span>Français</span>
                          </a>
                          </div>
                      </div>
                    </div>
                    <div className="option-item">
                      <a href="#" className="default-btn">Contact Us</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
	     );
    }

export default NavBar;