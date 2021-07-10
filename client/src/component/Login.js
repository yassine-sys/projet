import React from 'react'
import {Link} from "react-router-dom"

function Login() {
    return (
        <div className="row ">
	        <div className="medium-12 columns">
        <div className="page-banner-area item-bg3">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="page-banner-content">
                <h2>Connection</h2>
                <ul>
                  <li>
                    <Link to='/'><a>Home</a></Link>
                  </li>
                  <li>Connection</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
        <section className="login-area ptb-100">
        <div className="container">
          <div className="login-form">
            <h2>Connection</h2>
            <form>
              <div className="form-group">
                <label>Nom d'utilisateur</label>
                <input type="text" className="form-control" placeholder="Nom d'utilisateur" />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="text" className="form-control" placeholder="Email" />
              </div>
              <div className="form-group">
                <label>Mot de passe</label>
                <input type="text" className="form-control" placeholder="Mot de passe"/>
              </div>
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="checkme" />
                    <label className="form-check-label" htmlFor="checkme">Mémoriser le mot de passe</label>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 lost-your-password">
                  <a href="#" className="lost-your-password">Mot de passe oublié ?</a>
                </div>
              </div>
              <button type="submit">Connection</button>
            </form>
            <div className="important-text">
              <p>Vous n'avez pas de compte? <a href="register.html">S’inscrire</a></p>
            </div>
          </div>
        </div>
      </section>
      
      </div>
      </div>
    )
}

export default Login
