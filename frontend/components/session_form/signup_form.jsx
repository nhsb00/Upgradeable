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
                <div className="empty-div"></div>
                <form className="login-form-box">
                    <p className="gradient">Welcome to Upgradeable</p>
                    <br />
                    <p className="gradient">Please {this.props.formType}</p>
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
                        <label>
                            <input className="login-input"
                                placeholder="E-mail"
                                type="text"
                                value={this.state.email}
                                onChange={this.update('email')}
                            />
                        </label>
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
                        <label>
                                <input className="login-input"
                                    placeholder="Country"
                                    type="country"
                                    value={this.state.country}
                                    onChange={this.update('country')}
                                />
                            {/* <select className="login-input" >
                                <option value="United States">United States</option>
                                <option value="Republic of Korea">South Korea</option>
                            </select> */}
                        </label>
                    </div>
                    <button className="login-button" type="submit" value={this.props.formType}>Sign Me Up !</button>
                    <br />
                    <p>
                        <span>Already a member? {this.props.link}</span>
                    </p>
                </form>
            </div>
        );
    }

};

export default SignUpForm;