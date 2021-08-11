import React from "react";
import firebaseConfig from "../firebase.js";
import Maps from "./googlemaps"

const Home = () => {
    return (
    <div>
        <Maps />
    <h1>Welcome USER NAME!</h1>
    <p>profile pic</p>
    <p>bio</p>
    <p>google maps should show up with all the pins </p>
    <button class="btn btn-primary" onClick={() => firebaseConfig.auth().signOut()}>Sign out</button>
    </div>
);
};

export default Home;