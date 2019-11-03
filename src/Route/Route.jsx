import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from '../scenes/Login';
import Dashboard from '../scenes/Dashboard';
import Navbar from '../Components/NabBar'
import AuthConsumer from '../Context'

const Routes = () => {
  return (
    <>
        <Navbar />
        <Router>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/" component={Dashboard} />
          </Switch>
        </Router>
    </>
  );
}
export default Routes;
