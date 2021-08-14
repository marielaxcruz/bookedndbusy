import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AuthProvider } from "./auth";
import Home from './components/UserHomePage'
import PrivateRoute from "./PrivateRoute";
import SignUp from "./components/signup";
import Login from "./components/loginn";
import LoggedOutHeader from "./components/header";
import Users from './components/userinfo';
import MainPage from "./components/mainpage";
import NewCity from "./components/addnewcity";
import NewYelp from "./components/addnewyelp";
import UploadNewPhoto from "./components/addnewphotos";
import NewJournal from "./components/addnewjournal";
import NewDate from "./components/AddNewDate";
import RegisterForm from "./components/RegisterForm";
import ReviewPage from "./components/ReviewPage";
import LoggedInHeader from"./components/LoggedInHeader";
//import firebaseConfig from "../firebase.js";
import firebase from "./tools/firebase";


// wrapping our layer with auth provider so everything below it will have access to current user through the context api
//function App() {
  // keeps track of user as state here 
  // logged in - function from app update state call back function 
// user is the variable that maintains state across my web app
//const conditionalNavbar = () =>{
//    return (
//      <div>{(user) === null ? <LoggedOutHeader /> : <LoggedInHeader/>}
//      </div>
//    )
  
//  }

 //this detects a change in user status login logout etc. everytime a user is logged in you get the email and id of user. we get a user object back 
const App = () => {
    firebase.auth().onAuthStateChanged( user => {
      if (user) {
        //console.log(user.email)
        const email = user.email;
        console.log(user.uid)
        //const displayName = user.displayName;
        console.log(user.displayName)
      } else{
        console.log('no user logged in from App.js bc not logged or logged out')
      }

    })
  return (
    
    <AuthProvider>
      <Router>
        <div>
        <conditionalNavbar />
        {/*<link href="/css/main.min.css" rel="stylesheet"></link>*/}
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous"></link>
          <LoggedOutHeader />
          <PrivateRoute exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/accountsetup" component={RegisterForm} />
          <Route exact path="/signup" component={SignUp} />
          <PrivateRoute  exact path="/users" component={Users} />
          <Route exact path="/bookedndbusy" component={MainPage} />
          <PrivateRoute exact path="/newcity" component={NewCity} />
          <PrivateRoute exact path="/newyelp" component={NewYelp} />
          <PrivateRoute exact path="/newphoto" component={UploadNewPhoto} />
          <PrivateRoute exact path="/newjournal" component={NewJournal} />
          <PrivateRoute exact path="/newdate" component={NewDate} />
          <PrivateRoute exact path="/review" component={ReviewPage} />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;



