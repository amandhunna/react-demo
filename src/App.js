import React from 'react';
import Routes from './Route';
import './App.css';
import { AuthProvider } from './Context';
import Navbar from './Components/NabBar';

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Navbar />
        <Routes />
      </div>
    </AuthProvider>
  );
}

export default App;