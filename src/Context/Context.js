import React, { useState } from 'react';
import config from '../config';

const AuthContext = React.createContext({});

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLogin] = useState(config.DEFAULTLOGINFLAG);
    return (<AuthContext.Provider value={{ isLoggedIn, setIsLogin }}>{children} </AuthContext.Provider>);
};
export const AuthConsumer = AuthContext.Consumer;
