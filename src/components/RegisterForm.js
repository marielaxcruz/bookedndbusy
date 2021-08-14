import React from 'react';
import UploadNewProfilePhoto from './ProfilePic';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useHistory } from "react-router";

// I will make a form that will hold the user's information 


const RegisterForm = () => {
    let history = useHistory();
    const handleClick =() => {
    history.push("/");
    }
    return(
        <div class="container">
                <h1 class="display-6">Start Your Adventure Book</h1>
            <form>
                <div className='form'>
                <p>Name</p>
                    <input
                        type='text' placeholder="First Name"
                    />
                    <p>Add your Bio</p>
                    <input
                        type='text' placeholder="My next adventure is .."
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
