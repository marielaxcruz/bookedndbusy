// this part of the form will allow for the user to add photos, I need to use google cloud storage in order to save them 

import React from 'react';
import SideBar from "./SideBar";



const NewDate = () => {
    return (
        <div class="container">
            <div className="row">
            <div className ="col-md-2">
            <SideBar />
            </div>
            <div className ="col">
            <h1 class="display-6">Add a Travel Date</h1>
            </div>
        </div>
        </div>

    );
    }
    
    
    export default NewDate;