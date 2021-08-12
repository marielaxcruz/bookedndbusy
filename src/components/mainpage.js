import React from 'react';
//import { Link } from 'react-router-dom';
//import firebaseConfig from "../firebase.js";
//import './mainpage.css';
import Maps from "./googlemaps";
const MainPage = () => {
    return (
        <div class="happy">
    <div>
    <div class="wrapper">
    <div class="static-txt">keep all your</div>
    <ul class="dynamic-txts">
        <li><span>memories</span></li>
        <li><span>photos</span></li>
        <li><span>places visited</span></li>
        <li><span>journal entries </span></li>
    </ul>
    <div class="static-txt">in your adventure book</div>
    </div>
    <img src="src/images/googlemap.png" width="800" height="800"></img>

</div>
</div>
);
};

export default MainPage; 