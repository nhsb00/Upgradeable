import React from 'react';
import { Link } from 'react-router-dom';
import DropdownContainer from '../dropdown/dropdown_container';

const Category = ({ currentUser, logout }) => {
    const loggedIn = () => (
        <nav className="main-head">
            <Link to="/"><button className="btn"><i className="fa fa-home">Home</i></button></Link>
            <div className="main-logout-button">
            <div className="current-username">Welcome, {currentUser.username} !</div>
                <DropdownContainer /> 
            </div>
        </nav>
    );

    const notLoggedIn = () => (
        <nav className="main-head">
            <Link to="/"><button className="btn"><i className="fa fa-home">Home</i></button></Link>
            <div className="main-button">
                <Link to='/login'>Log In</Link>
                <Link to='/signup'>Sign Up</Link>
            </div>
        </nav>
    );

    if (currentUser) {
        return loggedIn();
    } else {
        return notLoggedIn();
    };
}

export default Category;
