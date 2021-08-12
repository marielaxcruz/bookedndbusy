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
import NewDate from "./components/addnewdates"
import RegisterForm from "./components/RegisterForm";
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
          <LoggedOutHeader />
          <PrivateRoute exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/accountsetup" component={RegisterForm} />
          <Route exact path="/signup" component={SignUp} />
          <PrivateRoute  exact path="/users" component={Users} />
          <Route exact path="/home" component={MainPage} />
          <PrivateRoute exact path="/newcity" component={NewCity} />
          <PrivateRoute exact path="/newyelp" component={NewYelp} />
          <PrivateRoute exact path="/newphoto" component={UploadNewPhoto} />
          <PrivateRoute exact path="/newjournal" component={NewJournal} />
          <PrivateRoute exact path="/newdate" component={NewDate} />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;



