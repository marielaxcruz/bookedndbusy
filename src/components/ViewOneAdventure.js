import React, {Component, useEffect, useContext, useState} from 'react';
import {firebaseLooper} from '../tools/firebaselooper';
import { usersCollection } from '../tools/firebase';
import { AuthContext } from "./AuthConnect";

const ViewOneAdventure = (props) => {
    const {currentUser, userDetails} = useContext(AuthContext);
    const [results, setResults] = useState([]);
    const currentLocationId = props.location.state.id
    console.log("Adventure Props", props.location.state.id);
    // get Dates
    //const [date, setDates] = useState([]);
    useEffect(() => {
        const unmount = 
        usersCollection
        .doc(currentUser.uid)
        .collection('locations')
        .doc(currentLocationId)
        .collection('dates')
        .onSnapshot((snapshot) => {
            //setJournal(doc.data().journal || []);
            (snapshot.docs.map(doc => setResults(doc.data())));
            //console.log("Adventure details", doc.data());
          });
          return unmount
      }, []);



return(
    <div className="container">
        <h1>Your Adventure</h1>
        <p>
            location: Lat/LNG goes here {}
        </p>
        <p>
            Date 1: DocID 
        </p>
        <p>
            Journal Entry
        </p>
        {/*<p>
        {images.map((image) => (
        <aside key={image.name}>
            <img src={image.url} 
            alt="image" />
          </aside>
        ))}
        </p>*/}
    </div>
);


}
export default ViewOneAdventure;