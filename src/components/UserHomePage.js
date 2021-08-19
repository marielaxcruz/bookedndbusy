//import React from "react";
import React, {useState} from "react";
//import firebaseConfig from "../firebase.js";
import Maps from "./googlemaps";
import SignOut from './SignOut';
import { useHistory } from "react-router";
import { usersCollection } from '../tools/firebase';
import { AuthContext } from './AuthConnect';
import {useContext} from "react";
import { Redirect } from "react-router-dom";
import './UserHomePage.css';
import SideBar from './SideBar';
import karina from '/Users/marielacruz/ada/bookedndbusy/src/images/karina.png'
// pass as a prop user data 
// save user data as state 
// or usecontext 

const Home = () => {
    // hook - stands alone 
    let history = useHistory();
    const handleClick =() => {
    history.push("/newcity");
    }
    const handleAdventure =() => {
        history.push("/alladventures");
    }
    // carrying the user info over 
    const {currentUser, userDetails} = useContext(AuthContext);

    if (!currentUser) {
        return <Redirect to="/login" />;
    }

    return (
    <div className="container">
        <div  class="row justify-content-md-center">
            <div className ="col-md-2">
            <img 
            src={karina}
            width="210"
            height="170"
            ></img>
            </div>
            <div class="col-md-auto">
            <h1 class="display-6">Welcome {userDetails.name}!</h1>
            <p class="fst-italic">If I could teleport anywhere it would be {userDetails.bio}!</p>
            </div>
            <div class="col col-lg-2">
                <button onClick={handleClick} 
                class="myButton" 
                type="submit">
                    Add a New Adventure
                    </button>
                    <div className="row"></div>
                    <button class="myButton" 
                    onClick={handleAdventure} 
                    >
                    View All Adventures
                    </button>
                    </div>
            <div>
                <div>
            <div className="map" >
            <Maps showNext={false}/>
            </div>
            </div>
            </div>
            </div>

        </div>

);
};

export default Home;


// button to send over to the next page 
