import React, { use } from 'react';
import { AuthContext } from '../ContextAPI/ContextAuth';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
    const location = useLocation();
    console.log(location.pathname);
    const {users, loading} = use(AuthContext);
    if(loading){
        return <div className="flex justify-center items-center h-screen">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
        </div>;
    }
    if(!users){
        return <Navigate state={location.pathname} to="/login"/>
    } 
    return children;
};

export default PrivateRoute;