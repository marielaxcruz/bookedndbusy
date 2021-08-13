import React from 'react';
import SideBar from "./SideBar";
import './AddNewDate.css';
import { useHistory } from "react-router";

import {DateTimePickerComponent} from '@syncfusion/ej2-react-calendars';
//import { Container } from 'postcss';


const NewDate = () => {
    let history = useHistory();
    const handleClick =() => {
        history.push("/newphoto");
    };
    return (
        <div class="container">
            <div className="row">
            <div className ="col-sm">
            <SideBar />
            </div>
            <div className ="col-sm">
    <DateTimePickerComponent placeholder="Choose a date"></DateTimePickerComponent>
    </div>
    </div>
    <div className="row">
    <button className ="color" onClick={handleClick} class="btn btn-secondary btn-lg btn-block" >next</button>
    </div>
    </div>

    );
    }
    
    
export default NewDate;