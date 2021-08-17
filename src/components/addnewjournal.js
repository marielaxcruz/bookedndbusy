import React, { useState, useContext } from "react";
import SideBar from "./SideBar";
import { useHistory } from "react-router";
import './AddNewJournal.css';
import { usersCollection } from '../tools/firebase';
import { AuthContext } from "./AuthConnect";
import swal from 'sweetalert';

//import NewDate from "./AddNewDate";

const NewJournal = ({currentLocation, setNext, currentDate}) => {
    // state callback function when submit save state into firebase/put 
    let history = useHistory();
    const handleClick =() => {
        //history.push("/newdate");
        setNext('date');
    };
    const redirectToHome =() => {
        //history.push("/review");
        history.push("/")
    };
    const {currentUser, userDetails} = useContext(AuthContext);
    // set the state before you begin 
    const [journalNote, setJournalNote] = useState('')
    
    function addJournal(event) {
        // prevents the browser from refreshing 
        event.preventDefault()
        usersCollection
        .doc(currentUser.uid)
        .collection('locations')
        .doc(currentLocation)
        .collection('dates')
        .doc(currentDate)
        .update({
            journalentry: journalNote,
        })
        .then(() => {
            // function being called to change the state of journal
            //alert("Journal Note added")
            swal("Your journal entry was added!");
            console.log ('This is the journal note being added :', journalNote) 
            setJournalNote('')
        })
    }

    return(
        
        <div class="container">
            <div className="row">
                <div className ="col-md-2">
                    <SideBar />
                </div>
                <div className ="col-sm">
                    <h2 class="display-6">Add A Journal Entry </h2>
                        <p class="fst-italic" >Example Prompts: 
                            <ul>
                                <li>Write about the people that you have interacted with.</li>
                                <li>Write about the food.</li>
                                <li>What did you like/dislike most about today, and why?</li>
                                <li>What plan/adventure are you looking forward to on your trip?</li>
                            </ul>
                            </p>
                            <form onSubmit={addJournal}>
                            <label>Reflect & write on your experience of the day </label>
                            <input 
                                    className="box"
                                    type="text" 
                                    placeholder="Today was an adventurous day because ..."
                                    value={journalNote}
                                    onChange={event => setJournalNote(event.currentTarget.value)}
                            />
                            <button  type="submit" class="myButton">submit journal</button>
                            </form>
                            </div>
                            
                            <div className="row">
                            <button className ="color" onClick={handleClick} class="btn btn-secondary btn-lg btn-block" >add another date</button>
                            <button className ="color" onClick={redirectToHome} class="btn btn-secondary btn-lg btn-block" >all done! let's go home</button>
                </div>
            </div>
        </div>

    );

};
export default NewJournal;