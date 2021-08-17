import React, {useContext, useState} from "react";
import SideBar from "./SideBar";
import Maps from "./googlemaps";
import { useHistory } from "react-router";
import { usersCollection } from '../tools/firebase';
import { AuthContext } from "./AuthConnect";
import NewDate from "./AddNewDate";
import AddNewPhotos from "./AddNewPhotos";
import NewJournal from "./AddNewJournal";

// I have a location collection per user i, and each time I receive the marker click you would call the firestore sdk to add this data like in the add data section here, and during your app initialization use the read data to serialize your geopoints (the supported data type for geolocation in firebase) and put then in the map as markers.


// this component will redirect to the form for adding a new city and country to their map using google maps search 
const NewCity = () => {
    const [currentLocationId, setCurrentLocationId] = useState(null);
    const [currentDateId, setCurrentDateId] = useState(null);
    const [nextStep, setNextStep] = useState();
    //let history = useHistory();
    //const handleClick =() => {
    //    history.push("/newdate");    
    //}

    const setCurrentLocation = (locationId) => {
        console.log("Parent Location", locationId)
        setCurrentLocationId(locationId)
    }

    const setCurrentDate = (dateId) => {
        console.log("Parent Date", dateId)
        setCurrentDateId(dateId)
    }

    const renderNext = () => {
        //console.log("Insdie Render next with nextStep value:", nextStep);
        switch (nextStep){
            case 'date':
                return (<NewDate currentLocation={currentLocationId} setNext={setNextStep} setCurrentDate={setCurrentDate}/>);
            case 'photo':
                return (<AddNewPhotos currentLocation={currentLocationId} setNext={setNextStep} currentDate={currentDateId}/>);
            case 'journal':
                return (<NewJournal currentLocation={currentLocationId} setNext={setNextStep} currentDate={currentDateId}/>);
            //case ''
            default:
                return (<></>);
        }
    }
    //const {currentUser, userDetails} = useContext(AuthContext);
    // map state 
    //const [marker, setMarker] = useState('')
    
    //function addMarker(event) {
    //    event.preventDefault()
    //    usersCollection
    //    .doc(currentUser.uid)
    //    .collection('locations')
    //    .doc('')
    //    .set({
    //        newcity: marker,
    //    })
    //    .then(() => {
    //        // function being called to change the state of journal 
    //        setMarker('')
    //    })
    //}

    //Location -> new date -> new photos - >new journal

    if(nextStep){
        return (
            <>
            {renderNext()}
            </>
        )
        
    }

    return (
        <div class="container">
            <div className ="row">
            <div className ="col-md-2">
            <SideBar />
                </div>
                <div className ="col">
                <h1 class="display-6">Add A New Adventure</h1>
                <Maps setCurrentLocation = {setCurrentLocation} showNext={true} setNext={setNextStep}/>
                {/*{renderNext()}*/}
                </div>
            </div>
            {/*<div className ="row">
            <button onClick={handleClick} className="btn btn-secondary btn-lg btn-block" type="submit">Next</button>
            </div>*/}
        </div>
);
}

//onSubmit={handleAddNew}

export default NewCity;


// onClick = {(handleClick) => setColor(#FFC2B4)}