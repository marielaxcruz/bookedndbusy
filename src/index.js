import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { AuthProvider } from "./components/AuthConnect";


ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
    <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

//firebase.auth().onAuthStateChanged( user => {
//  if(user){
//    console.log(user.email);
//    console.log(user.uid);

//  } else {
//    console.log('no user')
//  }
//})
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
