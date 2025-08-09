import React from 'react';
import { AuthContext } from './ContextAuth';

const AuthProvider = () => {
    


    const user = {
        createUser,
    }
    return (
        <AuthContext value ={user}>
            
        </AuthContext>
    );
};

export default AuthProvider;