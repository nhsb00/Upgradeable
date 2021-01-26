import React from 'react';
import { withRouter } from 'react-router-dom';

class UserDropdwon extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdown: true
        };

        this.handleToggle = this.handleToggle.bind(this);
        this.handleOpenModal = this.handleOpenModal.bind(this);
    }

    handleToggle() {
        this.setState({ dropdown: !this.state.dropdown });
    }

    handleOpenModal(e) {
        e.preventDefault();
        this.props.openModal();
    }

    render() { 
        let dropdown = this.state.dropdown ? 'hide' : 'show';
        return (
            <div className="user-icon">
                <p onClick={this.handleToggle}>
                    <img className="user-dropdown" src="https://content.instructables.com/ORIG/FCY/R6ZT/KJPPWPO4/FCYR6ZTKJPPWPO4.png?auto=webp&amp;frame=1&amp;crop=1:1&amp;width=48" width="28px" height="28px" />
                </p>
                <div onClick={this.handleToggle}
                    className={dropdown}>
                    <div className="logout">
                        <button className="logout-button" onClick={this.props.logout}>Log Out</button>
                    </div>
                    <div className="new-upgradeable">
                        <button className="new-upgradeable-button" onClick={this.handleOpenModal}>New Upgradeable</button>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default withRouter(UserDropdwon);
