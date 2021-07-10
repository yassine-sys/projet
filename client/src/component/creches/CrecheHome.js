import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getPartenaire } from '../../JS/actions/partenaireAction';
import Card from '../Card';

const CrecheHome = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPartenaire());
  }, []);
  const partenaires = useSelector((state) => state.partenaires);
  return (
    <div>
         
    <div style={{ display: "flex", flexwrap :"wrap", justifyContent:"space-between", margin:"50px" }}>
        {partenaires &&
        partenaires.filter(partenaire=>partenaire.categorie=='creche').slice(0,3).map((partenaire) => (
          <Card key={partenaire._id} partenaire={partenaire} />
        ))}
    </div>
    </div>
  );
};

export default CrecheHome
