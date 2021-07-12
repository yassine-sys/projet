import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

import {registerParent} from '../JS/actions/authAction'

const RegisterParent=()=> {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const dispatch = useDispatch();
  const handleRegister = () => {
    const newUser = { name, lastName, email, password };
    dispatch(registerParent(newUser));
    setEmail('');
    setName('');
    setLastName('');
    setPassword('');
  };
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
                      <a href="index.html">Home</a>
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
                  <input type="text" className="form-control" placeholder="Nom" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div className="form-group">
                  <label>Prénom</label>
                  <input type="text" className="form-control" placeholder="Prénom" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                </div>
                
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" className="form-control" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="form-group">
                  <label>Mot de passe</label>
                  <input type="password" className="form-control" placeholder="Mot de passe" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                </div>
                <div className="row align-items-center">
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="form-check">
                      <input type="checkbox" className="form-check-input" id="checkme" />
                      <label className="form-check-label" htmlFor="checkme">Afficher mot de passe?</label>
                    </div>
                  </div>
                </div>
                <button onClick={handleRegister}>S'inscrire maintenant</button>
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
