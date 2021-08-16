// this part of the form will allow for the user to add photos, I need to use google cloud storage in order to save them 

import React from 'react';
import SideBar from "./SideBar";
import { useHistory } from "react-router";



const NewDate = () => {
    let history = useHistory();
    const handleClick =() => {
        history.push("/newphoto");
    }
    return (
        <div class="container">
            <div className="row">
            <div className ="col-md-2">
            <SideBar />
            </div>
            <div className ="col-sm">
            <h1 class="display-6">Add a Travel Date</h1>
            </div>
        </div>
        <div className="row">
        <button onClick={handleClick} class="btn btn-outline-success my-2 my-sm-0" type="submit">next</button>
        </div>
        </div>

    );
    }
    
    
    export default NewDate;