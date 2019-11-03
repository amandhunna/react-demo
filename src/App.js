import React from 'react';
import Routes from './Route';
import './App.css';
import { AuthProvider, AuthConsumer } from './Context'

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <AuthConsumer>
          {({isLoggedIn}) =>{ console.log('--------', value)
           return <Routes />
           }}
        </AuthConsumer>

      </div >
    </AuthProvider>
  );
}

export default App;