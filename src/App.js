import React from 'react';
import Routes from './Route';
import './App.css';
import AuthProvider from './Context'

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Routes />
      </div >
    </AuthProvider>
  );
}

export default App;