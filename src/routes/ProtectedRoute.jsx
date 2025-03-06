import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const ProtectedRoute = ({ children }) => {
    const { user } = useContext(AuthContext);
    const location = useLocation();

    // If the user is not authenticated, redirect to the login page
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    // If the user is authenticated, render the children (protected content)
    return children;
};

export default ProtectedRoute;