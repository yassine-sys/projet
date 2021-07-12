import React , { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPartenaire } from '../../JS/actions/partenaireAction';
import Card from "../Card";


const EcoleList = () => {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getPartenaire());
    }, []);
    const partenaires = useSelector((state) => state.PartenaireReducer.partenaires);
    return (
      <div className="row ">
	        <div className="medium-12 columns">
                
                                      
        <section className="blog-area pt-100 pb-70">
          <div className="container">
            <div className="section-title">
              <span>Les écoles</span>
              <h2>Les écoles</h2>
            </div>
              <div className="row">
          {partenaires &&
           partenaires.filter(partenaire=>partenaire.categorie=='ecole').map((partenaire) => (
            <Card key={partenaire._id} partenaire={partenaire} />
          ))}
             
              </div>
          </div>
        </section>
        
        
             
        </div>
      </div>
    );
  };

export default EcoleList
