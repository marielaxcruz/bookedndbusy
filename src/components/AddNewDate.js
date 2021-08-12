import React from 'react';
import SideBar from "./SideBar";



const NewDate = () => {
    return (
        <div>
            <SideBar />
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
            <input class="input-group input-group-lg" type="text" placeholder="Today was an adventurous day because ..."></input>
            </label>
            <button class="btn btn-primary" type="submit">Next</button>
        </form>
        </div>

    );
    }
    
    
    export default NewDate;