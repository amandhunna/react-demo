import React from 'react';
import { BrowserRouter as Router, Redirect } from 'react-router-dom';

export const RedirectTo = (route) => {
    console.log(`Redirecting to ${route} page`);
    return (<><Router><Redirect to={`/${route}`} /></Router></>);
}

