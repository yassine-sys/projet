import React from 'react'
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom';

const Card = ({partenaire}) => {
  const dispatch = useDispatch();
  console.log(partenaire)
    return (
              <div className="col-lg-4 col-md-6">
                <div className="single-blog-item">
                  <div className="blog-image">
                    <a href="#">
                      <img src={partenaire.image[0]} alt="image" />
                    </a>
                  </div>
                  <div className="blog-content">
                    <ul className="post-meta">
                      <li>
                        <span>Responsable: </span>
                        <a href="#">{partenaire.responsable_name}{partenaire.responsable_lastName}</a>
                      </li>
                      <li>
                        <span>Tel: </span>
                        {partenaire.tel}
                      </li>
                    </ul>
                    <h3>
                      <a href="blog-details.html">{partenaire.partenaire_name}</a>
                    </h3>
                    <p>texte descriptif de l'etablissement. texte descriptif de l'etablissement. texte descriptif de l'etablissement.</p>
                    <div className="blog-btn">
                              <Link to={`/description/${partenaire.categorie}/${partenaire._id}`}>
                              <a  className="default-btn">Voir plus</a>
                              </Link>
                    </div>
                  </div>
                </div>
              </div> 

              
      
    )
}

export default Card
