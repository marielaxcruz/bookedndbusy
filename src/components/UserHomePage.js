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
    <div className="container-md">
        <div  class="row justify-content-md-center">
            <div className ="col-md-2">
            <img src = "https://lh3.googleusercontent.com/proxy/VXjK_pWdFXfyRL63syK5TOmdpy4bSC4hFJhOnymefCzlGG1tir_ZYDBt1p8Qm_kf2_hyT-R6MsN6H4qJNHV7ZgqWWNhEVN03yxQT8gvewufik5vqr6s" alt="user pic"/>
            </div>
            <div class="col-md-auto">
            <h1 class="display-6">Welcome {userDetails.name}!</h1>
            <p class="fst-italic">If I could teleport anywhere it would be {userDetails.bio}!</p>
            {/*<p>{userDetails.profilepic}</p>*/}
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
