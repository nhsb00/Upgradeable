import React from 'react';

class SignUpForm extends React.Component {
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
                {/* <img className="login-img" src="https://i.ytimg.com/vi/Vsu20TNOI8Y/maxresdefault.jpg" alt="background" /> */}
                <div className="empty-div"></div>
                <form className="login-form-box">
                    <p>Welcome to Upgradeable</p>
                    <br />
                    <br />
                    <p>Please {this.props.formType}</p>
                    <br />
                    <br />
                    <div className="login-form">
                        <label>
                        <input className="login-input"
                                placeholder="Username"
                                type="text"
                                value={this.state.username}
                                onChange={this.update('username')}
                            />
                        </label>
                        <br />
                        <br />
                        <label>
                            <input className="login-input"
                                placeholder="E-mail"
                                type="text"
                                value={this.state.email}
                                onChange={this.update('email')}
                            />
                        </label>
                        <br />
                        <br />
                        <label>
                        <input className="login-input"
                                placeholder="Password"
                                type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                            />
                        </label>
                        <br />
                        <br />
                        <label>
                        <input className="login-input"
                                placeholder="Country"
                                type="text"
                                value={this.state.country}
                                onChange={this.update('country')}
                            />
                        </label>
                        <br />

                    </div>
                    <br />
                    <button className="login-button" type="submit" value={this.props.formType}>{this.props.formType}</button>
                    <br />
                    <br />
                    <p>Already a member? {this.props.link}</p>
                </form>
            </div>
        );
    }

};

export default SignUpForm;