import React, { useState } from 'react';
import config from './config';

const AuthContext = React.createContext({});

export const AuthProvider = ({ children }) => {
    const [islogin, setIsLogin] = useState({ isLoggedIn: config.DEFAULTLOGINFLAG });
    return <AuthContext.Provider value={{ islogin, setIsLogin }}>{children} </AuthContext.Provider>
};
export const AuthConsumer = AuthContext.Consumer;
export default AuthContext;