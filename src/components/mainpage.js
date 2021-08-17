import React from 'react';
import './mainpage.css';
import newone from '../images/newone.png';
const MainPage = () => {
    return (
    <div className="container-md">
        <div className="row">
            <div className ="col" class="wrapper">
                <h2 class="static-txt">keep all your</h2>
                    <ul class="dynamic-txts">
                        <li><span>memories</span></li> 
                        <li><span>photos</span></li>
                        <li><span>places visited</span></li>
                        <li><span>journal entries </span></li>
                    </ul>
                        <h2 class="static-txt">in your adventure book</h2>          
            </div>
            <div className="container-md" className ="col">
            <img src={newone} width="800"  alt='google map with pins'/>
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