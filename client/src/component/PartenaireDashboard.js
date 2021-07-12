import React from 'react'
import { useSelector } from 'react-redux';

const PartenaireDashboard = () => {
    const partenaire = useSelector((state) => state.authReducer.partenaire);

    return (
        <div>
<h1 className="mb-3 ml-4">
        {partenaire.responsable_name} {partenaire.responsable_lastName}
      </h1>
      <h5 className="mb-3 ml-4">{partenaire.email} </h5>
            
        </div>
    )
}

export default PartenaireDashboard
