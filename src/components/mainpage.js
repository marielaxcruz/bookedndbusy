import React from 'react';
//import { Link } from 'react-router-dom';
//import firebaseConfig from "../firebase.js";
//import './mainpage.css';
//import Maps from "./googlemaps";
import FinalMapPic from '../images/FinalMapPic.png';
const MainPage = () => {
    return (
    <div className="container-md">
        <div className="row">
            <div className ="col">
                <h2>keep all your</h2>
                    <ul>
                        <li><span>memories</span></li> 
                        <li><span>photos</span></li>
                        <li><span>places visited</span></li>
                        <li><span>journal entries </span></li>
                    </ul>
                        <h2>in your adventure book</h2>
            </div>
            <div className ="col">
            <img src={FinalMapPic} width="800"  alt='google map with pins'/>
            </div>
</div>
</div>

);
};

export default MainPage; 

// class="wrapper" class="static-txt">
//keep all your
//<ul class="dynamic-txts">
//    <li><span>memories</span></li>
//    <li><span>photos</span></li>
//    <li><span>places visited</span></li>
//    <li><span>journal entries </span></li>
//</ul>
//<div class="static-txt">in your adventure book</div>