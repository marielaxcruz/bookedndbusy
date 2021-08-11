import React from 'react';
import { Link } from 'react-router-dom';



const Header = () => {
    return (
        <header>
            
            {/*<link href="/css/main.min.css" rel="stylesheet"></link>*/}
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous"></link>
            {/*<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script>*/}
            
            <nav className="navbar navbar-expand-md fixed-top ">
            <img src="https://img.icons8.com/plasticine/100/000000/suitcase.png" 
            alt = "suitcase" />
                <Link  className="navbar-brand" to="/home">booked&busy</Link>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">user's Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/signup">Register</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">LOGIN</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/users">User Info from Firestore</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/map">Display Google Map</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/newcity">Add a new city</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/newyelp">Add a Yelp Place</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/newphoto">Add Photos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/newjournal">Add Journal</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;