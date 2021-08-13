import React from "react";
import SideBar from "./SideBar";
import Maps from "./googlemaps";
import { useHistory } from "react-router";
// import React, { useCallback, useContext } from "react";
////import { withRouter, Redirect } from "react-router";
//import firebaseConfig from 'firebase';

// this component will redirect to the form for adding a new city and country to their map using google maps search 
const NewCity = () => {
    let history = useHistory();
    const handleClick =() => {
        history.push("/newphoto");    
    }
    //function setColor(color){}
return (
    <div class="container">
        <div className ="row">
        <div className ="col-md-2">
        <SideBar />
            </div>
            <div className ="col">
            <h1 class="display-6">Add A New Adventure</h1>
    {/*<form >
        <label>
        City 
        <input name="city" placeholder="City Name" />
        </label>
        <label>
        Country
        <input name="country" placeholder="Country" />
        </label>*/}
    {/*</form>*/}
            <Maps />
            </div>
        </div>
        <div className ="row">
        <button onClick={handleClick} className="btn btn-secondary btn-lg btn-block" type="submit">Next</button>
        </div>
    </div>
);
}

//onSubmit={handleAddNew}

export default NewCity;


// onClick = {(handleClick) => setColor(#FFC2B4)}