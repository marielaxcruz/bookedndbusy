//import React from "react";

//const NewPhotos = () => {
//    return (
//        //<div>
//        <div>
//            <SideBar />
//            <h1 class="display-6">Add Photos to your adventure in CITY NAME COUNTRY NAME</h1>
//        <form>
//        <div class="form-group">
//        <label for="exampleFormControlFile1">Example file input</label>
//        <input type="file" class="form-control-file" id="exampleFormControlFile1"/>
//        </div>
//        </form>
//        {/*<button class="btn btn-primary" type="submit">Next</button>*/}
//        </div>
//    );
//    }
    
//    //onSubmit={handleAddNew}

    
//    export default NewPhotos;
// this component will redirect to the form for adding photos to their adventure  
import React from 'react';
// import React, { useState, useEffect } from 'react';
import { storageRef , usersCollection} from '../tools/firebase.js'
// import { storage, storageRef , usersCollection} from '../firebase.js'
//import { withRouter, Redirect } from "react-router";
import SideBar from "./SideBar";
import { useHistory } from "react-router";

// the props that are being passed down is the user id and the lat/lng of pin the user is currently adding photos to their adventure book 
const UploadNewPhoto = ( { id,lat,lng } ) => {
    let history = useHistory();
    const handleClick =() => {
        history.push("/newjournal");
    }
    const handleChange =  (event) => {
        event.preventDefault()
        
        const image = event.target.files[0]
        // const image = await resizeFile(originalImage)
        
        storageRef.child(`/user/images/${image.name}`)
        
        .put(image)
        .then(async(uploadSnapshot) => {
            // uploadSnapshot.ref.getDownloadURL then changes into a promise. await then takes in the promise 
            const downloadURL = await uploadSnapshot.ref.getDownloadURL()

            usersCollection
            .doc('mari')
            .collection('locations')
            .doc('location_1')
            .collection('dates')
            .doc("day_1")
            .update({
            
                photos : downloadURL,
            })
            
            
            
            console.log('this is the Uploaded image', image.name)
        })
    }
    
    
    return(
        
        <div class="container" >
            <div className="row">
            <div className ="col-md-2">
            <SideBar />
            </div>
                <div className ="col-md-2">
                <h1 class="display-6">Add Photos</h1>
                <form>
                <div className='form'>
                    <input
                        type='file'
                        onChange={handleChange}
                    />
                </div>
                <button
                type='submit'
                className='btn btn-primary'
                //onClick={handleUpload}
                >
                    Add Photo
                </button>
            </form>
            <div className="row">
            <button onClick={handleClick}  className="btn btn-secondary btn-lg btn-block" type="submit">Next</button>
            </div>
                </div> 
            </div>
        </div>
)
}
export default UploadNewPhoto;

