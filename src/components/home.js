import React from "react";
import firebaseConfig from "../firebase.js";

const Home = () => {
    return (
    <div>
    <h1>Home, Welcome user!</h1>
    <button class="btn btn-primary" onClick={() => firebaseConfig.auth().signOut()}>Sign out</button>
    </div>
);
};

export default Home;