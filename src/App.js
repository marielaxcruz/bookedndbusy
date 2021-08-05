import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AuthProvider } from "./auth";
import firebase from './firebase';
import Home from './components/home'
import PrivateRoute from "./PrivateRoute";
import SignUp from "./components/signup";
import Login from "./components/loginn";
//import SignIn from './components/login'

// wrapping our layer with auth provider so everything below it will have access to current user through the context api
//function App() {
const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div>
          <PrivateRoute exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;



//function App() {
//  return (
//    <div className="App">
//      <header className="App-header">

//        {/*<SignIn/>*/}
//      </header>
//    </div>
//  );
//}

//export default App;
