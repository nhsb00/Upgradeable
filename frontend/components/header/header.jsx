import React from 'react';
import {  } from "../modal/modal";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.openModal();
    }

    render() {
        return (
        <nav className="header">
            <h1 className="header-title">
                <a href="/">Upgradeable</a>
            </h1>
            <div>
                <button>Projects</button>
            </div>
        </nav>
        )
    }
};

export default Header;