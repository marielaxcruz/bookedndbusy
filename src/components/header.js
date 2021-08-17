import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import { useHistory } from "react-router";



const LoggedOutHeader = () => {
    let history = useHistory();
    const handleClick =() => {
        history.push("/login");    
    }
    const handleClicks =() => {
        history.push("/signup");    
    }
    return (
        <header>
            
            {/*<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script>*/}
            <div class="container" >
            <nav class="navbar navbar-expand-lg navbar-light">
            <img src="https://img.icons8.com/plasticine/100/000000/suitcase.png" 
            alt = "suitcase" width="40" height="40" />
                <Link className="navbar-brand" to="/bookedndbusy">booked&busy</Link>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav mr-auto">
                        </ul>
                    <button onClick={handleClick} class="myButtonB" type="button">login</button>
                    <button onClick={handleClicks}class="myButtonB" type="button">register</button> 

                </div>
            </nav>
            </div>
        </header>
    );
};

export default LoggedOutHeader;