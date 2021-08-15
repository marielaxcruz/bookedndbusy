import React from "react";
import firebaseConfig from "../tools/firebase.js";


const SignOut = () => {
    return (
    <div>
        <button class="myButtonB" onClick={() => firebaseConfig.auth().signOut()}>
            Sign Out
        </button>
    </div>
);
};

export default SignOut;