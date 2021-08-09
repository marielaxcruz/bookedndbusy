// the user will interact with the yelp api and save the searches they visited on their trip 

import React from "react";

const NewYelp = () => {
    return (
        <div>
        <h1>Adding A new Yelp location</h1>
        <form >
            <label>
            Yelp Search Button 
            <input name="Yelp Search Button" placeholder="where did you go?" />
            </label>
            <button class="btn btn-primary" type="submit">Next</button>
        </form>
        </div>
    );
    }
    
    //onSubmit={handleAddNew}
    
    export default NewYelp;