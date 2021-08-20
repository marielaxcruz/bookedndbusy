import React, { Component, useEffect, useContext, useState } from "react";
import { firebaseLooper } from "../tools/firebaselooper";
import { usersCollection } from "../tools/firebase";
import { AuthContext } from "./AuthConnect";


const ViewOneAdventure = (props) => {
  const { currentUser, userDetails } = useContext(AuthContext);
  const [results, setResults] = useState([]);
  const currentLocationId = props.location.state.id;
  console.log("Adventure Props", props.location.state.id);
  console.log("we are here");
  // get Dates
  //const [date, setDates] = useState([]);
  useEffect(() => {
    //const unmount =
    usersCollection
      .doc(currentUser.uid)
      .collection("locations")
      .doc(currentLocationId)
      .collection("dates")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
          setResults([...results, doc.data()]);
        });
      });
  }, []);

  return (
    <div class="container">
      <h1 class="display-6">Your Adventure </h1>
      <h2>Day 1 </h2>

      {results.map((result) => (*
        <p>
          <span> {result.day}</span>
          <p>Images</p>
         
          <div>
          <img
            src={view}
            alt="image"
            width="300"
            height="400"
          ></img>
          <img
            src={cake}
            alt="image"
            width="400"
            height="400"
          ></img>
         
          </div>
          <h2>Day 2 August 14, 2021</h2>
          <p>We had a very relaxing day at Miami Beach, Nancy and I got henna tattoos. I think I can see myself living here 👀 </p>
          <div>
          <img
            src={beach}
            alt="image"
            width="300"
            height="400"
          ></img>
          <img
            src={tats}
            alt="image"
            width="400"
            height="400"
          ></img>
        
          
          </div>
          <h2>Day 3 August 15th,2021</h2>
          <p>
          Last day !! :( and had a fun time grabbing brunch at Bacon B**** . Definitely a gem! This trip was much needed. Next time I come to Miami I would love to spend more time here exploring more of the city and the rich culture. 
          </p>
          <div>
          <img
            src={food}
            alt="image"
            width="350"
            height="400"
          ></img>
          <img
            src={bye}
            alt="image"
            width="400"
            height="400"
          ></img>
          </div>
        </p>
    
    </div>
  );
};
export default ViewOneAdventure;
//    .onSnapshot((snapshot) => {
//        //setJournal(doc.data().journal || []);
//        // console.log("Adventure details", doc.data());
//        (snapshot.docs.map(doc => setResults(doc.data())));
//      });
//      return unmount
//  }, []);

//  db.collection("cities").get().then((querySnapshot) => {
//    querySnapshot.forEach((doc) => {
//        // doc.data() is never undefined for query doc snapshots
//        console.log(doc.id, " => ", doc.data());
//    });

//return(
//    <div className="container">
//        <h1>Your Adventure</h1>
//        <p>
//            location: Lat/LNG goes here {}
//        </p>
//        <p>
//            Date 1: DocID
//        </p>
//        <p>
//            Journal Entry
//        </p>
//        <p>
//        {results.map((result) => (
//        <aside key={result.name}>
//            <img src={result.url}
//            alt="image" />
//          </aside>
//        ))}
//        </p>
//    </div>
//);

// this shows up on the screen
// useEffect(() => {
//    //const unmount =
//    usersCollection
//    .doc(currentUser.uid)
//    .collection('locations')
//    .doc(currentLocationId)
//    .collection('dates')
//    .get()
//    .then((querySnapshot) => {
//        querySnapshot.forEach((doc) => {
//            // doc.data() is never undefined for query doc snapshots
//            console.log(doc.id, " => ", doc.data());
//        });
//    });
//});
