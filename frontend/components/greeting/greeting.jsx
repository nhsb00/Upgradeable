import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currenetUser, logout }) =>{
    const loggedIn = () => (
        <div>
            <h1>Welcome to Upgradeable, { currenetUser.username } !</h1>
            <button onClick={logout}>Log Out</button>
        </div>
    );

    const notLoggedIn = () => (
        <div>
            <Link to='/login'>Login</Link>
            <Link to='/signup'>Sign Up</Link>
        </div>
    );

    if (currenetUser) {
        return loggedIn();
    } else {
        return notLoggedIn();
    };
}

export default Greeting;
