import React from "react";
import firebaseConfig from "../firebase.js";


const SignOut = () => {
    return (
    <div>
        <button class="btn btn-primary" onClick={() => firebaseConfig.auth().signOut()}>
            Sign Out
        </button>
    </div>
);
};

export default SignOut;