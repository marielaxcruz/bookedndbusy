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
//import LoggedInHeader from"./components/LoggedInHeader";



// wrapping our layer with auth provider so everything below it will have access to current user through the context api
//function App() {

const App = () => {
    //<div>
    //  {user === null ? <LoggedOutHeader /> : <LoggedInHeader/>}
    //</div>
  return (
    
    <AuthProvider>
      <Router>
        <div>
        {/*<link href="/css/main.min.css" rel="stylesheet"></link>*/}
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous"></link>
          <LoggedOutHeader />
          <PrivateRoute exact path="/home" component={Home} />
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



