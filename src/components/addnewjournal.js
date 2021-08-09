import React from "react";


const NewJournal = () => {
    return (
        <div>
        <h1>Add a Journal Entry</h1>
        <form >
            <label>
            Journal: Reflect and write on your experience of the day. example prompts: Write about the people that you have interacted with.
            Write about the food.What did you like/dislike most about today, and why?
            <input class="form-control form-control-lg" type="text" placeholder=".form-control-lg"></input>
            </label>
            <label>
            Country
            <input name="country" placeholder="Country" />
            </label>
            <button class="btn btn-primary" type="submit">Next</button>
        </form>
        </div>
    );
    }
    
    //onSubmit={handleAddNew}
    
    export default NewJournal;