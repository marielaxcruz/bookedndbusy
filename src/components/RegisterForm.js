import React from 'react';
import UploadNewProfilePhoto from './ProfilePic';

// I will make a form that will hold the user's information 
const RegisterForm = () => {
    return(
        <div>
                <h1 class="display-6">Start Your Adventure Book</h1>
            <form>
                <div className='form'>
                <p>Name</p>
                    <input
                        type='text' placeholder="First Name"
                    />
                    <p>Bio</p>
                    <input
                        type='text' placeholder="My next adventure is .."
                    />
                    <UploadNewProfilePhoto />
                </div>
                <button
                type='submit'
                className='btn btn-primary'
                //onClick={handleUpload}
                >
                    register
                </button>
            </form>
        </div>
)
};
export default RegisterForm;
