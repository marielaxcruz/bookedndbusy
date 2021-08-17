// the user will interact with the yelp api and save the searches they visited on their trip 
import React, { useState } from "react";
import { SearchResults } from "./searchresults";
// use state hook for functional component, every time we update term we will call set term function and we will show 2 items, if they dont pass anything it will be empty 

export default function NewYelp(props){
    const [term, setTerm]= useState(props.term || '');
    const [location, setLocation] = useState(props.location || '');

    function submit(e) {
        if(props.search && typeof props.search === 'function'){
            props.search(term,location)
        }
        console.log(term,location);
        e.preventDefault();
    }

    return (
        <div  class="container" >
            <link href="/css/main.min.css" rel="stylesheet"></link>
        <h1 className="display-6">Adding A new Yelp location</h1>
        <form onSubmit={submit} >
            <label class="d-flex p-2 bd-highlight"> 
            <input class="input-group input-group-lg" 
            onChange={(e)=> setTerm(e.target.value)}
            name="Yelp Search Button" 
            placeholder="Restaurants, Beaches, Spas, Trails" />
            <input class="input-group input-group-lg" 
            onChange={(e)=> setLocation(e.target.value)}
            name="Yelp Search Button" placeholder="WHERE" />
            </label>
            <button class="btn btn-primary" type="submit" onClick={submit}>Search</button>
        </form>
        <SearchResults  />
        </div>
    );
    }

    
    //onSubmit={handleAddNew}
