import React, { useState, useContext, useEffect } from "react";
import {
    GoogleMap,
    useLoadScript,
    Marker,
    InfoWindow,
    //MarkerClusterer,
} from "@react-google-maps/api";
//import { optionalArrayOfString } from 'assert-plus';
// date formating of when the pointer was added 
import { formatRelative } from 'date-fns';

import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
} from "use-places-autocomplete";

// Accessible combobox (autocomplete or autosuggest) component for React.
import {
    Combobox,
    ComboboxInput,
    ComboboxPopover,
    ComboboxList,
    ComboboxOption,
} from "@reach/combobox";

//import "@reach/combobox/styles.css"
import mapstyles from './mapstyles';
//import { map } from 'core-js/core/array';
// new variable to avoid too many rerenders 
import { AuthContext } from "./AuthConnect";
import { usersCollection } from '../tools/firebase';

const libraries = ["places"]
const mapContainerStyle = {
    width: '50vw',
    height: "50vh",
};
const center = {
    lat: 10,
    lng: 0,
}
const options ={
    styles: mapstyles,
    disableDefaultUI: true,
    zoomControl:true
}

const Maps= ()=> {
    
       // state that holds the pins objects
    //const [pinsData, setpinsData]  = useState([]);

    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries,

    });
    // create state for the markers on our map
    const [markers, setMarkers] = React.useState([]);
    // new state for what is the current info for the marker selected - pop up window
    // the state will get its valued once it is clicked on by the user 
    const [selected, setSelected] = React.useState(null);
    // access to the current user logged in 
    const {currentUser, userDetails} = useContext(AuthContext);

    //fetch the list of markers for currentUser from db
    useEffect(() => {
        usersCollection
        .doc(currentUser.uid)
        .collection('locations').onSnapshot((snapshot) => setMarkers(snapshot.docs.map(doc => doc.data())))
    }, [])

    console.log("CURERENT MARKERS", markers)

    // function to start a add a new location/document to the database 
    function addMarker(marker) {
        usersCollection
        .doc(currentUser.uid)
        .collection('locations')
        .add(marker)
        .then(() => {
            //alert('Your adventure has been added!');
            // function being called to change the state of selected 
            setSelected('')
        })
    }





    // usecallback allows you to create a function that will always retain the same value unless the event has changed
    // once the map is clicked a pin will show up 
    const onMapClick = React.useCallback((event) => {
        
        const newMarker = {
            lat: event.latLng.lat(),
            lng: event.latLng.lng(),
            time: new Date(),
        };
        const existingMarkers = markers;
        existingMarkers.push(newMarker)

        setMarkers(existingMarkers);
        addMarker(newMarker);
    }, [])

    // map instance - used later for searching to pan and zoom 
    // you use ref when you want react to retain state without re rendering 
    const mapRef = React.useRef();
    const onMapLoad = React.useCallback((map) => {
        mapRef.current = map;
    }, []);

    const panTo = React.useCallback(({lat, lng}) => {
        mapRef.current.panTo({lat,lng});
        mapRef.current.setZoom(14);
    }, []);

    if (loadError) return "Error loading maps";
    if (!isLoaded) return  "Loading Maps";

    return (
    <div>
        <Search panTo ={panTo} />
        <GoogleMap 
        mapContainerStyle={mapContainerStyle} 
        zoom={2}
        center={center}
        options={options}
        onClick={onMapClick}
        onLoad={onMapLoad}

        >
            <script src="//maps.googleapis.com/maps/api/js?key=AIzaSyDif6oRl4k8ZlmtDyZrKW6O64KM8Ib7Ob"></script>
            {markers.map((marker) => (
            <Marker 
            key={marker.time}
            position ={{lat:marker.lat, 
                lng: marker.lng}}
            onClick = {() => {
                setSelected(marker);

            }}
            />
            
            // we can add a unique icon as well, something for later
            ))}
            {selected ? (
            <InfoWindow 
            position ={{lat:selected.lat, lng: selected.lng}}
            onCloseClick={()=> {
            setSelected(null);
            }}
            >
                
                <div>
                    <button className="myButton">view this adventure</button>
                </div>
            </InfoWindow>
            ) : null}

        </GoogleMap>



    </div>
    );
}


function Search({panTo}){
    const {ready,value, suggestions: {status, data}, setValue, clearSuggestions} = usePlacesAutocomplete({
        requestOptions:{
            location: {lat: () => 43.653225, lng: () => -79.383186},
            radius: 500 *1000
        }
    });

    return <div>
    <Combobox 
    onSelect={async (address)=> {
        setValue(address,false);
        clearSuggestions()
        try {
            const results = await getGeocode({address});
            const {lat, lng} = await getLatLng(results[0]);
            panTo({lat,lng});
            console.log(lat, lng);
        }catch(error){
            console.log("error!")
        }
        //console.log(address);
    }}
    >
        <ComboboxInput 
        value={value} 
        onChange={(event)=> {
        setValue(event.target.value);
        }} 
        disabled={!ready}
        placeholder="Find Your Adventure"
        />
        <ComboboxPopover>
            <ComboboxList>
            {status === "OK" && 
                data.map(({id, description}) => (
                <ComboboxOption 
                key={id} 
                value={description} />
                ))}
                </ComboboxList>
        </ComboboxPopover>

    </Combobox>

    </div>
    

}

export default Maps;