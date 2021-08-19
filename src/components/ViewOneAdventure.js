import React, { Component, useEffect, useContext, useState } from "react";
import { firebaseLooper } from "../tools/firebaselooper";
import { usersCollection } from "../tools/firebase";
import { AuthContext } from "./AuthConnect";
import firstday1 from "/Users/marielacruz/ada/bookedndbusy/src/images/firstday.JPG";
import brunch from "/Users/marielacruz/ada/bookedndbusy/src/images/brunch.JPG";
import toy from "/Users/marielacruz/ada/bookedndbusy/src/images/toy.JPG";
import effiel from "/Users/marielacruz/ada/bookedndbusy/src/images/effiel.jpg";
import secondary from "/Users/marielacruz/ada/bookedndbusy/src/images/seconday.JPG";
import protest from "/Users/marielacruz/ada/bookedndbusy/src/images/protest.jpg";
import nortedame from "/Users/marielacruz/ada/bookedndbusy/src/images/nortedame.JPG";
import mus from "/Users/marielacruz/ada/bookedndbusy/src/images/mus.JPG";
import mac from "/Users/marielacruz/ada/bookedndbusy/src/images/mac.JPG";

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
      <h2>Day 1 November 16th, 2018</h2>

      {results.map((result) => (
        <p>
          {/*<span> {result.day}</span>*/}
          <span>Journal Entry: {result.journalentry}</span>
          <p>Images</p>
         
          <div>
          <img
            src={effiel}
            alt="image"
            width="300"
            height="400"
          ></img>
          <img
            src={secondary}
            alt="image"
            width="400"
            height="400"
          ></img>
          <img
            src={protest}
            alt="image"
            width="400"
            height="400"
          ></img>
          </div>
          <h2>Day 2 November 17th, 2018</h2>
          <p>In the morning, we had french toast for breakfast and it was surprisingly very delicious since there was no syrup added. I wanted to check out the Louvre aka Beyonce APESHIT music video set. Comfort over style when it comes to traveling. We walked much at the museum that we had to take mini breaks. We spent all day at the museum and then just walked home.  </p>
          <div>
          <img
            src={firstday1}
            alt="image"
            width="300"
            height="400"
          ></img>
          <img
            src={brunch}
            alt="image"
            width="400"
            height="400"
          ></img>
          <img
            src={toy}
            alt="image"
            width="400"
            height="400"
          ></img>
          
          </div>
          <h2>Day 3 November 18th, 2018</h2>
          <p>
          Today, we went to Notre-Dame de Paris, I tried macaroons for the first time, and ended our day at a museum. Overall, I feel in love with this city. Being in Paris made me fall in love with traveling to new place all over again. My favorite thing about the city would have to be the ease of taking public transportation everywhere to visit all these different places. There is so much to see, you will never need to visit the same place twice. 
          </p>
          <div>
          <img
            src={nortedame}
            alt="image"
            width="350"
            height="400"
          ></img>
          <img
            src={mac}
            alt="image"
            width="400"
            height="400"
          ></img>
          <img
            src={mus}
            alt="image"
            width="400"
            height="400"
          ></img>
          </div>
        </p>
      ))}
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
