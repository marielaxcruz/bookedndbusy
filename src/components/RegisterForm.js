
import UploadNewProfilePhoto from './ProfilePic';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useHistory } from "react-router";
import { usersCollection} from '../tools/firebase.js'
import React, { useState, useContext } from 'react';
import { AuthContext } from "./AuthConnect";

// I will make a form that will hold the user's information 
const RegisterForm = () => {
    let history = useHistory();
    const handleClick =() => {
    history.push("/");
    }
    const {currentUser, userDetails} = useContext(AuthContext);
    
    const [userBio, setUserBio] = useState('')
    const [userName, setUserName] = useState('')
    //const [userPhoto, setUserPhoto] = useState('')

    function addUserInfo(event) {
        event.preventDefault()
        
    

        usersCollection
        .doc(currentUser.uid)
        .set({
            name: userName,
            bio: userBio,
            //profilepic: downloadURL
        })
        .then(() => {
            //where does the profile pic go ? 
            setUserBio('')
            setUserName('')
            //('')
        })
    
    }

    return(
        <div class="container">
                <h1 class="display-6">Start Your Adventure Book</h1>
            <form onSubmit={addUserInfo}>
                <div className='form'>
                    <label>Name</label>
                    <input
                        type='text' 
                        placeholder="First Name"
                        value={userName}
                        onChange={event => setUserName(event.currentTarget.value)}
                    />
                    <label>Bio</label>
                    <input
                        type='text' 
                        placeholder="My next adventure is .."
                        onChange={event => setUserBio(event.currentTarget.value)}
                    />
                    <UploadNewProfilePhoto />
                </div>
                <button
                type='submit'
                className='btn btn-primary'
                onClick={handleClick}
                style ={{color: 'FF69B4'}}
                >
                    register
                </button>
            </form>
        </div>
)
};
export default RegisterForm;
