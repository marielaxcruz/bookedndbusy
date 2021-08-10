//import React, { useCallback, useContext } from "react";
//import { withRouter, Redirect } from "react-router";
//import firebaseConfig from 'firebase';

// this component will redirect to the form for adding photos to their adventure  


import React from "react";

const NewPhotos = () => {
    return (
        //<div>
        <div>
            <h1 class="display-6">Add Photos to your adventure in CITY NAME COUNTRY NAME</h1>
        <form>
        <div class="form-group">
        <label for="exampleFormControlFile1">Example file input</label>
        <input type="file" class="form-control-file" id="exampleFormControlFile1"/>
        </div>
        </form>
        {/*<button class="btn btn-primary" type="submit">Next</button>*/}
        </div>
    );
    }
    
    //onSubmit={handleAddNew}

    
    export default NewPhotos;