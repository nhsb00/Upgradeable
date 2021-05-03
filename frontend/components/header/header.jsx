import React from 'react';
import {  } from "../modal/modal";
import SearchContainer from "../search/search_container";

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
                <div className="header-title">
                    <img id="instructables-logo" alt="Instructables" src="https://www.instructables.com/assets/img/instructables-logo-v2.png"></img>
                    <a href="/">Upgradeables</a>
                    <a href="#/projects"><button className="header-title-button">Projects</button></a>
                </div>
                <div className="search-bar">
                    <SearchContainer />
                </div>
        </nav>
        )
    }
};

export default Header;