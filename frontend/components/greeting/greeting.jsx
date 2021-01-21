import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) =>{
    const loggedIn = () => (
        <div>
            <h1 className="header-name">Greeting, { currentUser.username } !</h1>
            <button onClick={logout}>Log Out</button>
        </div>
    );

    const notLoggedIn = () => (
        <div>
            <Link to='/login'>Login</Link>
            <br/>
            <Link to='/signup'>Sign Up</Link>
        </div>
    );

    if (currentUser) {
        return loggedIn();
    } else {
        return notLoggedIn();
    };
}

export default Greeting;
