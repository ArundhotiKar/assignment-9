import React, { use } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
     const {user, loading}=use(AuthContext)

    if(loading){
        return <div>Loading...</div>
    }

    if(user){
        return children;
    }else{
        return <Navigate to="/login"></Navigate>
    }
};

export default PrivateRoute;