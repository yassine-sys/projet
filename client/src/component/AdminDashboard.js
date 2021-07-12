import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getusers } from '../JS/actions/userAction';

const AdminDashboard = () => {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getusers());
    }, []);
    const users = useSelector((state) => state.userReducer.users);
    return (
        <div>
            <h1>admin dashboard</h1>
        </div>
    )
}

export default AdminDashboard

