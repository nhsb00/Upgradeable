import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            country: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    };

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    render() {
        return (
            <div className="login-form-container">
                <form className="login-form-box" onSubmit={this.handleSubmit}>
                    Welcome to Upgradeable
                        <br />
                        Please {this.props.formType}
                    <br />
                    <div className="login-form">
                        <label>Username:
                        <input type="text"
                                value={this.state.username}
                                onChange={this.update('username')}
                            />
                        </label>
                        <br />
                        <label>Email:
                        <input type="text"
                                value={this.state.email}
                                onChange={this.update('email')}
                            />
                        </label>
                        <br />
                        <label>Password:
                        <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                            />
                        </label>
                        <br />
                        <label>Country:
                        <input type="text"
                                value={this.state.country}
                                onChange={this.update('country')}
                            />
                        </label>
                        <br />

                    </div>
                    <br />
                    <button className="login-button" type="submit" value={this.props.formType}>{this.props.formType}</button>
                </form>
            </div>
        );
    }

};

export default SessionForm;