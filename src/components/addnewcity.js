import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import firebaseConfig from 'firebase';

// this component will redirect to the form for adding a new city and country to their map using google maps search 

return (
    <div>
    <h1>Adding A New Adventure</h1>
    <form onSubmit={handleAddNew}>
        <label>
        City 
        <input name="city" type="email" placeholder="City Name" />
        </label>
        <label>
        Country
        <input name="country" type="password" placeholder="Country" />
        </label>
        <button type="submit">Next</button>
    </form>
    </div>
);