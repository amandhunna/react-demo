import React from 'react';
import { BrowserRouter as Router, Redirect } from 'react-router-dom';

export const RedirectToLogin = () => {
    console.log('Redirecting to Login page');
    return (<><Router><Redirect to='/login' /></Router></>);
}

