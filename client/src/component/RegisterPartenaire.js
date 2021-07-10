import React from 'react'
import {Link} from "react-router-dom"


function RegisterPartenaire() {
    return (
        <div className="row ">
	        <div className="medium-12 columns">
            
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
                  <label>Nom commercial</label>
                  <input type="text" className="form-control" placeholder="Nom commercial" />
                </div>  
                <div className="form-group">
                  <label>Nom du responsable</label>
                  <input type="text" className="form-control" placeholder="Nom du responsable" />
                </div>
                <div className="form-group">
                  <label>Prénom du responsable</label>
                  <input type="text" className="form-control" placeholder="Prénom du responsable" />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="text" className="form-control" placeholder="Email" />
                </div>
                <div className="form-group">
                  <label>Numéro de téléphone</label>
                  <input type="text" className="form-control" placeholder="Numéro de téléphone" />
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
                <div className="form-group">
                  <label>Catégorie de l'établissement</label>
                  {/* <input type="text" className="form-control" placeholder="Catégorie de l'établissement"/> */}
                  <select class="form-control" placeholder="Ville" name="Ville">
                        <option value="Categorie">Catégorie</option>
                        <option value="Crèche">Crèche</option>
                        <option value="Jardin d'enfant">Jardin d'enfant</option>
                        <option value="Ecole">Ecole</option>
                        <option value="Club">Club</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Activités de l'établissement</label>
                  <input type="text" className="form-control" placeholder="Activités de l'établissement"/>
                </div>
                <div className="form-group">
                  <label>Adresse</label>
                  <input type="text" className="form-control" placeholder="Adresse"/>
                </div>
                <div className="form-group">
                  <label>Ville</label>
                  {/* <input type="text" className="form-control" placeholder="Ville"/> */}
                  <select class="form-control" placeholder="Ville" name="Ville">
                        <option value="Ville">Ville</option>
                        <option value="Ariana">Ariana</option>
                        <option value="Bizerte">Bizerte</option>
                        <option value="El kef">El kef</option>
                        <option value="Gabes">Gabes</option>
                        <option value="Sfax">Sfax</option>
                        <option value="Tozeur">Tozeur</option>
                        <option value="Tunis">Tunis</option>
                        <option value="Nabeul">Nabeul</option>
                        <option value="Zaghouan">Zaghouan</option>
                        <option value="Monastir">Monastir</option>
                        <option value="Mahdia">Mahdia</option>
                        <option value="Mednine">Mednine</option>   
                        </select>
                </div>
                <div className="form-group">
                <label>Code postal</label>
                <input type="text" className="form-control" placeholder="Code Postal"/>
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
        </div>
    )
}

export default RegisterPartenaire
