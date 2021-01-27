import React from 'react';
import { Link } from 'react-router-dom';
import TitleFormContainer from '../modal/title_form_container';

const Greeting = ({ currentUser, logout }) =>{
    const loggedIn = () => (
        <nav className="header">
            <h1 className="header-title">
                <a href="/">Upgradeable</a>
            </h1>
            <div className="session-logout-button">
                <h2>Welcome, { currentUser.username } !</h2>
                <button onClick={logout}>Log Out</button>
            </div>
        </nav>
    );

    const notLoggedIn = () => (
        <nav className="header">
            <h1 className="header-title">
                <a href="/">Upgradeable</a>
            </h1>
            <div className="session-button">
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

export default Greeting;
