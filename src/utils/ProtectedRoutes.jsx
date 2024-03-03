import React from 'react'
import { useUser } from './userProvider';
import {useLocation, Navigate} from "react-router-dom"
const ProtectedRoute = ({children}) => {
    const {user, handleUser} = useUser();
    let location = useLocation();

    if(!user && !localStorage.getItem('userData')) {
        return <Navigate to="/login" state={{ from: location}} replace />
    }
 return children

};

export default ProtectedRoute;