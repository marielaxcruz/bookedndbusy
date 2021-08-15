// this will hold the user's:
// profile pic that will get stored in firebase storage 

import React from 'react';
// import React, { useState, useEffect } from 'react';
import { storageRef , usersCollection} from '../tools/firebase.js'
// import { storage, storageRef , usersCollection} from '../firebase.js'
//import { withRouter, Redirect } from "react-router";

// the props that are being passed down is the user id and the lat/lng of pin the user is currently adding photos to their adventure book 
const UploadNewProfilePhoto = ( { uid } ) => {
    
    const handleChange =  (event) => {
        event.preventDefault()
        
        const image = event.target.files[0]
        // const image = await resizeFile(originalImage)
        
        storageRef.child(`/profilepics/${image.name}`)
        
        .put(image)
        .then(async(uploadSnapshot) => {
            // uploadSnapshot.ref.getDownloadURL expression gets resolved into a promise. we have to use await to unwrap the promise 
            const downloadURL = await uploadSnapshot.ref.getDownloadURL()

            usersCollection
            .doc(uid)
            .update({
            
                profilepic : downloadURL
            })
            
            
            
            console.log('this is the Uploaded selfie', image.name)
        })
    
    }
    
    
    return(
        <div>
            <form>
            <label>Add a Profile Pic</label>
                <div className='form'>
                    <input
                        type='file'
                        onChange={handleChange}
                    />
                </div>
                <button
                type='submit'
                className='myButtonBB'
                //onClick={handleUpload}
                >
                    Add Selfie
                </button>
            </form>
        </div>
)
}
export default UploadNewProfilePhoto;

