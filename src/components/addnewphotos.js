



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
import { storageRef , usersCollection} from '../firebase.js'
// import { storage, storageRef , usersCollection} from '../firebase.js'
//import { withRouter, Redirect } from "react-router";
import SideBar from "./SideBar";

// the props that are being passed down is the user id and the lat/lng of pin the user is currently adding photos to their adventure book 
const UploadNewPhoto = ( { id,lat, lng } ) => {
    
    const handleChange =  (event) => {
        event.preventDefault()
        
        const image = event.target.files[0]
        // const image = await resizeFile(originalImage)
        
        storageRef.child(`/user/images/${image.name}`)
        
        .put(image)
        .then(async(uploadSnapshot) => {
            // uploadSnapshot.ref.getDownloadURL expression gets resolved into a promise. we have to use await to unwrap the promise 
            const downloadURL = await uploadSnapshot.ref.getDownloadURL()

            usersCollection.doc(id).update({
            
                photo_URL : downloadURL,
                dateUploaded : image.lastModifiedDate
            })
            
            
            
            console.log('this is the Uploaded image', image.name)
        })
    
    }
    
    
    return(
        <div class="container">
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
                </div> 
            </div>
                
           
        </div>
)
}
export default UploadNewPhoto;

