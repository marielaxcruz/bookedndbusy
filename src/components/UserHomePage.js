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
        <div className="row gx-5">
            <div className ="col-md-2">
            <img src = "https://lh3.googleusercontent.com/proxy/rGmte5ziIGUt5sKtWDXqfbXUHbRlGj0v6wAamoFrcwydYlAmlcxCL5V4NpAfSJDRchLwebs1GfdOsNLRhM0Mk47XfniEK5MArLLTjvBOrNMzehfNwTE" alt="user pic"/>
            </div>
            <div className ="col">
            <h1 class="display-6">Welcome {userDetails.name}!</h1>
            <p class="fst-italic">{userDetails.bio}</p>
            {/*<p>{userDetails.profilepic}</p>*/}
            </div>
            <div className="col">
                <button onClick={handleClick} 
                class="myButton" 
                type="submit">
                    Add a new Adventure
                    </button>
                    <button class="myButton" 
                    onClick={handleAdventure} 
                    >
                    View all your adventures
                    </button>
                    <SignOut />
                    </div>
            <div className="row">
            <div/>
            <div  class="d-flex justify-content-center"className="row">
            <Maps />
            </div>
            </div>

        </div>
        </div>

);
};

export default Home;


// button to send over to the next page 
