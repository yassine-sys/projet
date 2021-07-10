import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getPartenaire } from '../../JS/actions/partenaireAction';
import PartenaireCard from "../creches/crecheDetail";
const JardinHome = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPartenaire());
  }, []);
  const partenaires = useSelector((state) => state.partenaires);
  return (
    <div style={{ display: "flex", flexWrap: "wrap", margin: "20px" }}>
      {partenaires &&
        partenaires.filter(partenaire=>partenaire.categorie=='jardin').slice(0,3).map((partenaire) => (
          <PartenaireCard key={partenaire._id} partenaire={partenaire} />
        ))}
    </div>
  );
};

export default JardinHome
