import { connect } from 'react-redux';
import React from 'react';
import { signup, receiveErrors } from '../../actions/session_actions';
import SignUpForm from './signup_form';
import { Link } from 'react-router-dom';

const mapStateToProps = ( state ) => {
    return {
        errors: state.errors.session,
        formType: 'signup',
        link: <Link to="/login">Log In</Link>
    }
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(signup(user)),
        receiveErrors: errors => dispatch(receiveErrors(errors))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);