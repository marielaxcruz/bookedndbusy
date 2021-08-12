import React from "react";
//import firebaseConfig from "../firebase.js";
import Maps from "./googlemaps"

const Home = () => {
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
                <button   class="btn btn-outline-success my-2 my-sm-0" type="submit">
                    Add a new Adventure
                    </button>
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
                    View all your adventures
                    </button>
                    </div>
            <div className="row">
            <Maps />
            </div>

        </div>
        </div>

);
};

export default Home;


// button to send over to the next page 
//  <button onClick={(event)=>{event.preventDefault(); 
// history.push("/newdate")}}  class="btn btn-outline-success my-2 my-sm-0" type="submit">