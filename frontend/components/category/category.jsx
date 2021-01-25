import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({ currentUser, logout }) => {
    const loggedIn = () => (
        <nav className="main-head">
            <Link to="/"><button className="btn"><i className="fa fa-home">Home</i></button></Link>
            <div className="main-logout-button">
                <h2>Welcome, {currentUser.username} !</h2>
                <button onClick={logout}>Log Out</button>
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
