import { connect } from 'react-redux';
import React from 'react';
import { signup } from '../../actions/session_actions';
import SignUpForm from './signup_form';
import { Link } from 'react-router-dom';

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'signup',
        link: <Link to="/login">Log in</Link>
    }
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(signup(user))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);