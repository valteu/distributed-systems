import React from 'react';
import Login from '../components/Login';
import Logout from '../components/Logout';
import pb from '../pocketbase/pocketbase';
import { Navigate } from 'react-router-dom';

const LoginRoute = () => {
    if(pb.authStore.isValid){
        return <Navigate to = "/files"/>
    }
    return (
        <div>
            <Login />
        </div>
    );
};

export default LoginRoute;