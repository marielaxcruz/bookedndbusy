import firebase from 'firebase/app';
//import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCM3zwJoyaWBdm1CT42bOZGti7M96rrkbE",
    authDomain: "virtual-scrapbook-capstone.firebaseapp.com",
    projectId: "virtual-scrapbook-capstone",
    storageBucket: "virtual-scrapbook-capstone.appspot.com",
    messagingSenderId: "937277524601",
    appId: "1:937277524601:web:1ec6bea3c450037a7d62a8",
    measurementId: "G-R4LFR8WG40"
};

// our first attempt 
// our db has an instance of firestore 
// we are working with collections 
// we want to access the collection 
//export const db = firebase.firestore();
// you get specific methods using the sdk of firebase 
// if you just do get you are getting all the  documents you have on that one collection 
// we will then get a promise back and we will catch it using then 
// so we want to tell our database once you have reached our collection we want u to return a snap shot from the database 
// if something goes wrong we want to catch the error and return something 
//db.collection('users').get().then( snapshot => {
//    //console.log(snapshot) 
//    // for each loop will go through the documents that are tied to this collection 
//    // fire base has many methods to use, when we use data it returns our data from our database in a way we can read it 
//    snapshot.forEach((doc) => {
//        console.log(doc.data())
//    })
//}).catch (e => {
//    console.log(e)
//});

// second attempt 
// instead of exporting the const db 
// we can make a new variable 
// will point to the collection users 
// there will be ref examples too but they will not work here bc that is for realtime database
// use firestore database to find the right info 

// initialize our Firebase app using the configuration details we got from Firebase
firebase.initializeApp(firebaseConfig);


// exporting the one collection we currently have
const db = firebase.firestore()
export const usersCollection = db.collection('users');

//  we need to get references to Cloud Firestore and the Authentication service and export them
export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase; 
