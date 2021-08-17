import React, {useState, useContext} from 'react';
import SideBar from "./SideBar";
import './AddNewDate.css';
import { useHistory } from "react-router";
import DatePicker from 'react-date-picker';
import { AuthContext } from "./AuthConnect";
import { usersCollection } from '../tools/firebase';
import swal from 'sweetalert';

// Use by adding <DatePicker />. Use onChange prop for getting new values

const NewDate = ({setNext, currentLocation, setCurrentDate}) => {
    let history = useHistory();
    const handleClick =() => {
        //history.push("/newphoto");
        setNext('photo');
    };

    const {currentUser, userDetails} = useContext(AuthContext);
    const [selectedDate, onDateChange] = useState('');
    // I need to carry over the state of the location here 
    function addNewDate(event) {
        // prevents the browser from refreshing 
        event.preventDefault()
        usersCollection
        .doc(currentUser.uid)
        .collection('locations')
        .doc(currentLocation)
        .collection('dates')
        .add({
            day: selectedDate,
        })
        .then((data) => {
            // function being called to change the state of journal
            //console.log(data.id)
            setCurrentDate(data.id);
            swal("Your travel date was added!"); 
            onDateChange('')
        })
    }

    console.log (selectedDate)
    return (
        <div class="container">
            <div className="row">
            <div className ="col-md-2">
            <SideBar />
            </div>
            <div className ="col">
                <h2 class="display-6">Add A Travel Date</h2>
                <form>
            <DatePicker 
            placeholderText ="Select your date"
            onChange={onDateChange}
            value={selectedDate}
            
    />
    <button  onClick={addNewDate}  class="myButton" >submit date</button>
    </form>
    </div>
    </div>
    <div className="row">
    <button className ="color" onClick={handleClick} class="btn btn-secondary btn-lg btn-block" >Next</button>
    </div>
    </div>

    );
    }
    
    
export default NewDate;