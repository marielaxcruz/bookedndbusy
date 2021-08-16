import React from 'react';
import { Link } from 'react-router-dom';
import SignOut from './SignOut';


const LoggedInHeader = () => {
    return (
        <header>
            
            {/*<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous"></link>*/}
            {/*<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script>*/}
            <div class="container" >
            <nav class="navbar navbar-expand-lg ">
            <img src="https://img.icons8.com/plasticine/100/000000/suitcase.png" 
            alt = "suitcase" width="40" height="40"  />
                <Link  className="navbar-brand" to="/bookedndbusy">booked&busy</Link>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">home</Link>
                        </li>
                    </ul>
                    <SignOut />
                </div>
                
            </nav>
            </div>
        </header>
    );
};

export default LoggedInHeader;