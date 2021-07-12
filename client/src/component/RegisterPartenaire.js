import React, { useState } from 'react'
import {Link} from "react-router-dom"
import { useDispatch } from 'react-redux';
import {registerPartenaire} from '../JS/actions/authAction'


const RegisterPartenaire=()=> {
  const [partenaire_name,setPartenaire_name] = useState('');
  const [responsable_name, setResponsable_name] = useState('');
  const [responsable_lastName, setResponsable_lastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [categorie, setCategorie] = useState('');
  const [address, setAddress] = useState('');
  const [ville, setVille] = useState('');

  const [code_postal, setCode_postal] = useState('');
  const [tel, setTel] = useState('');

  const dispatch = useDispatch();
  const handleRegister = ()=>{
    const newUser={partenaire_name,responsable_name,responsable_lastName,email,password,categorie,address,ville,code_postal,tel}
    dispatch(registerPartenaire(newUser))
    setPartenaire_name('')
    setResponsable_name('')
    setResponsable_lastName('')
    setEmail('')
    setPassword('')
    setCategorie('')
    setAddress('')
    setVille('')
    setCode_postal('')
    setTel('')

  }
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
                  <input type="text" className="form-control" placeholder="Nom commercial" value={partenaire_name} onChange={(e) => setPartenaire_name(e.target.value)} required />
                </div>  
                <div className="form-group">
                  <label>Nom du responsable</label>
                  <input type="text" className="form-control" placeholder="Nom du responsable" value={responsable_name} onChange={(e) => setResponsable_name(e.target.value)} required/>
                </div>
                <div className="form-group">
                  <label>Prénom du responsable</label>
                  <input type="text" className="form-control" placeholder="Prénom du responsable" value={responsable_lastName} onChange={(e) => setResponsable_lastName(e.target.value)} required />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="text" className="form-control" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="form-group">
                  <label>Numéro de téléphone</label>
                  <input type="text" className="form-control" placeholder="Numéro de téléphone" value={tel} onChange={(e) => setTel(e.target.value)} required />
                </div>
                <div className="form-group">
                  <label>Mot de passe</label>
                  <input type="text" className="form-control" placeholder="Mot de passe" value={password} onChange={(e) => setPassword(e.target.value)} required />
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
                  <select class="form-control"  placeholder="Ville" name="Ville" value={categorie} onChange={(e) => setCategorie(e.target.value)}>
                  <option value="">--Categorie--</option>
                        <option value="Crèche">Crèche</option>
                        <option value="Jardin d'enfant">Jardin d'enfant</option>
                        <option value="Ecole">Ecole</option>
                        <option value="Club">Club</option>
                  </select>
                </div>
                {/* <div className="form-group">
                  <label>Activités de l'établissement</label>
                  <input type="text" className="form-control" placeholder="Activités de l'établissement"/>
                </div> */}
                <div className="form-group">
                  <label>Adresse</label>
                  <input type="text" className="form-control" placeholder="Adresse" value={address} onChange={(e) => setAddress(e.target.value)}/>
                </div>
                <div className="form-group">
                  <label>Ville</label>
                  {/* <input type="text" className="form-control" placeholder="Ville"/> */}
                  <select class="form-control" placeholder="Ville" name="Ville" value={ville} onChange={(e) => setVille(e.target.value)}>
                        <option value="">--Ville--</option>
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
                <input type="text" className="form-control" placeholder="Code Postal" value={code_postal} onChange={(e) => setCode_postal(e.target.value)}/>
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
        </div>
    )
}

export default RegisterPartenaire
