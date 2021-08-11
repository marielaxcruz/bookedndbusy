import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AuthProvider } from "./auth";
//import firebase from './firebase';
import Home from './components/home'
import PrivateRoute from "./PrivateRoute";
import SignUp from "./components/signup";
import Login from "./components/loginn";
import Header from "./components/header";
import Users from './components/userinfo';
import Maps from './components/googlemaps';
import MainPage from "./components/mainpage";
import NewCity from "./components/addnewcity";
import NewYelp from "./components/addnewyelp";
import NewPhotos from "./components/addnewphotos";
import NewJournal from "./components/addnewjournal";

// wrapping our layer with auth provider so everything below it will have access to current user through the context api
//function App() {
const App = () => {
  return (
    
    <AuthProvider>
      <Router>
        <div>
          <Header />
          <PrivateRoute exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <PrivateRoute  exact path="/users" component={Users} />
          <PrivateRoute exact path="/map" component={Maps} />
          <Route exact path="/home" component={MainPage} />
          <PrivateRoute exact path="/newcity" component={NewCity} />
          <PrivateRoute exact path="/newyelp" component={NewYelp} />
          <PrivateRoute exact path="/newphoto" component={NewPhotos} />
          <PrivateRoute exact path="/newjournal" component={NewJournal} />
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
