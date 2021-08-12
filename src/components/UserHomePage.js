import React from "react";
//import firebaseConfig from "../firebase.js";
import Maps from "./googlemaps"
import UploadNewProfilePhoto from "./ProfilePic.js";
import SideBar from "./SideBar";

const Home = () => {
    return (
    <div class="container">
        <h1 class="display-6">Welcome USER NAME!</h1>
        <UploadNewProfilePhoto />
        <p class="fst-italic">I love good food and swimming</p>
        <p>google maps should show up with all the pins </p>
        <Maps />
        <SideBar />
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Add a new Adventure</button>
        {/*<button class="btn btn-primary" onClick={() => firebaseConfig.auth().signOut()}>Sign out</button>*/}
    </div>
);
};

export default Home;