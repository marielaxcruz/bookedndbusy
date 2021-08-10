import React from "react";
// import React, { useCallback, useContext } from "react";
////import { withRouter, Redirect } from "react-router";
//import firebaseConfig from 'firebase';

// this component will redirect to the form for adding a new city and country to their map using google maps search 
const NewCity = () => {
return (
    <div>
    <h1 class="display-6">Adding A New Adventure</h1>
    <form >
        <label>
        City 
        <input name="city" placeholder="City Name" />
        </label>
        <label>
        Country
        <input name="country" placeholder="Country" />
        </label>
        <button class="btn btn-primary" type="submit">Next</button>
    </form>
    </div>
);
}

//onSubmit={handleAddNew}

export default NewCity;