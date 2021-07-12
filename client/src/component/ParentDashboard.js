import React from 'react'
import { useSelector } from 'react-redux';

const ParentDashboard = () => {
    const parent = useSelector((state) => state.authReducer.user);

    return (
        <div>
<h1 className="mb-3 ml-4">
        {parent.name} {parent.lastName}
      </h1>
      <h5 className="mb-3 ml-4">{parent.email} </h5>
            
        </div>
    )
}

export default ParentDashboard
