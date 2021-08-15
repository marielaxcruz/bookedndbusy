import React, {useState} from 'react';
import SideBar from "./SideBar";
import './AddNewDate.css';
import { useHistory } from "react-router";
import DatePicker from 'react-date-picker'

// Use by adding <DatePicker />. Use onChange prop for getting new values

const NewDate = () => {
    let history = useHistory();
    const handleClick =() => {
        history.push("/newphoto");
    };
    const [value, onChange] = useState(new Date());
    return (
        <div class="container">
            <div className="row">
            <div className ="col">
            <SideBar />
            </div>
            <div className ="col">
                <h1>Add your First Travel Date</h1>
            <DatePicker
        onChange={onChange}
        value={value}
    />
    </div>
    </div>
    <div className="row">
    <button className ="color" onClick={handleClick} class="btn btn-secondary btn-lg btn-block" >next</button>
    </div>
    </div>

    );
    }
    
    
export default NewDate;