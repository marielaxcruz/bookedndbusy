import React from "react";
import SideBar from "./SideBar";
import { useHistory } from "react-router";
import './AddNewJournal.css';

const NewJournal = () => {

    // state callback fucntion when submit save state into firebase/put 
        let history = useHistory();
        const handleClick =() => {
            history.push("/newyelp");
        }


    return (
        <div  class="container">
            <div className="row">
            <div className ="col-md-2">
            <SideBar />
            </div>
            <div className ="col">
            <h1 class="display-6">Add a Journal Entry</h1>
            <form >
            <label>
            <p class="fst-italic" >Example Prompts: 
            <ul>
                <li>Write about the people that you have interacted with.</li>
                <li>Write about the food.</li>
                <li>What did you like/dislike most about today, and why?</li>
                <li>What plan/adventure are you looking forward to on your trip?</li>
            </ul>
            </p>
            <p>Reflect & write on your experience of the day.</p>
            <textarea className="happy" type="text" placeholder="Today was an adventurous day because ..."></textarea>
            </label>
        </form>
            </div>
            </div>
            <div className="row">
            <button className ="color" onClick={handleClick} class="btn btn-secondary btn-lg btn-block" type="submit">next</button>
            </div>
        
        </div>

    );
    }
    
    //onSubmit={handleAddNew}

    // class="form-control form-control-lg" type="text" 
    
    export default NewJournal;