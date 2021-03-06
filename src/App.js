import React, {useState, useEffect, useContext} from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AuthProvider } from "./components/AuthConnect";
import Home from './components/UserHomePage'
import PrivateRoute from "./PrivateRoute";
import SignUp from "./components/signup";
import Login from "./components/loginn";
import LoggedOutHeader from "./components/header";
import MainPage from "./components/mainpage";
import NewCity from "./components/addnewcity";
import NewYelp from "./components/addnewyelp";
import UploadNewPhoto from "./components/AddNewPhotos";
import NewJournal from "./components/AddNewJournal";
import NewDate from "./components/AddNewDate";
import ReviewPage from "./components/ReviewPage";
import LoggedInHeader from"./components/LoggedInHeader";
//import firebaseConfig from "../firebase.js";
import firebase from "./tools/firebase";
import AllAdventures from './components/ViewAllAdventures';
import { AuthContext } from './components/AuthConnect';
import ViewOneAdventure from './components/ViewOneAdventure';


// wrapping our layer with auth provider so everything below it will have access to current user through the context api


 //app will listen for a change in logged in or out this detects a change in user status
 // console will show the email and id 
 //get a user object back from this
// const [loggedIn, setLoggedIn]  = useState('');
// useEffect(() => {
//    firebase.auth().onAuthStateChanged( (user) => {
//        if (user) {
//            setLoggedIn(true)
//        }else{
//            setLoggedIn(false)
//      }})
//    }, []);
// call back 
// locatuon, l
const App = () => {
    // if the user is not logged in we show logged out nav bar else show loggedinnavbar
    const {currentUser, userDetails} = useContext(AuthContext);
// const, location, setloction =usestate (null) - props as 
    firebase.auth().onAuthStateChanged( user => {
      if (user) {
        
        console.log(user.email)
        const email = user.email;
        console.log(user.uid)
        //const displayName = user.displayName;
        console.log(user.displayName)
      } else{
        console.log('no user logged in from App.js bc not logged or logged out')
      }

    })
  return (
    
  
      <Router>
        <div>
        {/*<link href="/css/main.min.css" rel="stylesheet"></link>*/}
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous"></link>
            {(currentUser === null) ?  <LoggedOutHeader /> : <LoggedInHeader/> }
          <PrivateRoute exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/bookedndbusy" component={MainPage} />
          <PrivateRoute exact path="/newcity" component={NewCity} />
          <PrivateRoute exact path="/newyelp" component={NewYelp} />
          <PrivateRoute exact path="/newphoto" component={UploadNewPhoto} />
          <PrivateRoute exact path="/newjournal" component={NewJournal} />
          <PrivateRoute exact path="/newdate" component={NewDate} />
          <PrivateRoute exact path="/review" component={ReviewPage} />
          <PrivateRoute exact path="/alladventures" component={AllAdventures} />
          <PrivateRoute exact path="/viewadventure" component={ViewOneAdventure} />
        </div>
      </Router>
  
  );
};

export default App;



