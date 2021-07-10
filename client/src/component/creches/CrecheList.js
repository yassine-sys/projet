import React , { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPartenaire } from '../../JS/actions/partenaireAction';
import Card from "../Card";


const CrecheList = () => {

  const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getPartenaire());
    }, []);
    
  const partenaires = useSelector((state) => state.partenaires);
  const crecheFiltred = useSelector((state) => state.partenaires.filter(el=>el.categorie=='creche'));
  console.log(partenaires)
  console.log(crecheFiltred)



    return (
    <div className="row ">
	        <div className="medium-12 columns">
                
                                      
        <section className="blog-area pt-100 pb-70">
          <div className="container">
            <div className="section-title">
              <span>Les crèches</span>
              <h2>Les crèches</h2>
            </div>
            <div className="row">
           {crecheFiltred &&
           crecheFiltred.map((partenaire) => (
            <Card key={partenaire._id} partenaire={partenaire} />
          ))}
             
            </div>
          </div>
        </section>
        
        
             
        </div>
        </div>
      
      
    );
  };
export default CrecheList
