import logo from './logo.svg';
import './App.css';
import React from "react";
import firebase from './firebase';
import SignIn from './components/login'

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <SignIn/>
      </header>
    </div>
  );
}

export default App;
