import React from "react";
//import React, {useState} from "react";
//import firebaseConfig from "../firebase.js";
import Maps from "./googlemaps";
import SignOut from './SignOut';
import Users from './userinfo';
import { useHistory } from "react-router";
//import { usersCollection } from '../firebase';
//const nextPage=(event)=> {
//    let history = useHistory();
//    event.preventDefault(); history.push("/newjournal")
//}


const Home = () => {
    // hook - stands alone 
    let history = useHistory();
    const handleClick =() => {
    history.push("/newcity");
    }
    //const [currentName, setName] = useState('')
    //function getUserInfo(event) {
    //    event.preventDefault()
    //    usersCollection
    //    .doc('mari')
    //    .get({
    //        name: currentName,
    //    })
    //    .then((snapshot) => {
    //      // display data
    //    })
    
//}
    return (
    <div className="container-md">
        <div className="row gx-5">
            <div className ="col-md-2">
            <img src = " https://via.placeholder.com/150" alt="user pic"/>
            </div>
            <div className ="col">
            <h1 class="display-6">Welcome USER NAME!</h1>
            <p class="fst-italic">I love good food and swimming</p>
            </div>
            <div className="col">
                <button onClick={handleClick} class="btn btn-outline-success my-2 my-sm-0" type="submit">
                    Add a new Adventure
                    </button>
                    <button >
                    View all your adventures
                    </button>
                    <SignOut />
                    </div>
            <div className="row">
            <Users />
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
