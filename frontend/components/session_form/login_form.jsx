import React from 'react';


class LogInForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            country: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemoSubmit = this.handleDemoSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    };

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    handleDemoSubmit(e) {
        e.preventDefault();
        const user = { username: 'test', password: 'password', email: 'test@gmail.com', country: 'United States'}
        this.props.demologin(user);
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
                                placeholder="Password"
                                type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                            />
                        </label>
                        <br />
                    </div>            
                        <button className="login-button" type="submit" onClick={this.handleSubmit} value={this.props.formType}>Log In</button>
                    <br />
                        <button className="login-button" type="submit" onClick={this.handleDemoSubmit}>Demo LogIn</button>
                    <br />
                    <p>
                        <span>New to Upgradeable? {this.props.link}</span>
                    </p>
                </form>
                
            </div>
        );
    }

};

export default LogInForm;