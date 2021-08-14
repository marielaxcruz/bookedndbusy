//import React from "react";
import React, {useState} from "react";
//import firebaseConfig from "../firebase.js";
import Maps from "./googlemaps";
import SignOut from './SignOut';
import Users from './userinfo';
import { useHistory } from "react-router";
import { usersCollection } from '../tools/firebase';
import { AuthContext } from './AuthConnect';
import {useContext} from "react";

// pass as a prop user data 
// save user data as state 
// or usecontext 

const Home = () => {
    // hook - stands alone 
    let history = useHistory();
    const handleClick =() => {
    history.push("/newcity");
    }

    const {currentUser, userDetails} = useContext(AuthContext);

    return (
    <div className="container-md">
        <div className="row gx-5">
            <div className ="col-md-2">
            <img src = " {https://via.placeholder.com/150}" alt="user pic"/>
            </div>
            <div className ="col">
            <h1 class="display-6">Welcome {userDetails.name}!</h1>
            <p class="fst-italic">{userDetails.bio}</p>
            </div>
            <div className="col">
                <button onClick={handleClick} class="btn btn-outline-success my-2 my-sm-0" type="submit">
                    Add a new Adventure
                    </button>
                    <button class="btn btn-outline-success my-2 my-sm-0" >
                    View all your adventures
                    </button>
                    <SignOut />
                    </div>
            <div className="row">
            <div/>
            <div className="row">
            <Maps />
            </div>
            </div>

        </div>
        </div>

);
};

export default Home;


// button to send over to the next page 
