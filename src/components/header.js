import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-md fixed-top ">
                <Link className="navbar-brand" to="/home">booked&busy</Link>
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
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;