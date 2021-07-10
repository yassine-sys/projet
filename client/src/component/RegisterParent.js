import React from 'react'
import {Link} from "react-router-dom"


function RegisterParent() {
    return (
        // <div className="row ">
	    //     <div className="medium-12 columns">
        <div>

                <div className="page-banner-area item-bg4">
          <div className="d-table">
            <div className="d-table-cell">
              <div className="container">
                <div className="page-banner-content">
                  <h2>S'inscrire</h2>
                  <ul>
                    <li>
                      <Link to='/'><a>Home</a></Link>
                    </li>
                    <li>S'inscrire</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="register-area ptb-50">
          <div className="container">
            <div className="register-form">
              <h2>S'inscrire</h2>
              <form>
                <div className="form-group">
                  <label>Nom</label>
                  <input type="text" className="form-control" placeholder="Nom" />
                </div>
                <div className="form-group">
                  <label>Prénom</label>
                  <input type="text" className="form-control" placeholder="Prénom" />
                </div>
                
                <div className="form-group">
                  <label>Email</label>
                  <input type="text" className="form-control" placeholder="Email" />
                </div>
                <div className="form-group">
                  <label>Mot de passe</label>
                  <input type="text" className="form-control" placeholder="Mot de passe" />
                </div>
                <div className="row align-items-center">
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="form-check">
                      <input type="checkbox" className="form-check-input" id="checkme" />
                      <label className="form-check-label" htmlFor="checkme">Afficher mot de passe?</label>
                    </div>
                  </div>
                </div>
                <button type="submit">S'inscrire maintenant</button>
              </form>
              <div className="important-text">
                <p>Vous êtes déjà inscrit? <a href="login.html">Se connecter!</a></p>
              </div>
            </div>
          </div>
        </section>

        
      </div>
        //     {/* </div>
        // </div> */}
    )
}

export default RegisterParent
