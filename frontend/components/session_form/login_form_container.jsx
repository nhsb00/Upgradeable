import { connect } from 'react-redux';
import React from 'react';
import LogInForm from './login_form';
import { demologin, login, receiveErrors } from '../../actions/session_actions';
import { Link } from 'react-router-dom';

const mapStateToProps = ( state ) => {
    return {
        errors: state.errors.session,
        formType: 'login',
        link: <Link to="/signup">Sign Up</Link>
    }
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(login(user)),
        demologin: (user) => dispatch(demologin(user)),
        receiveErrors: (errors) => dispatch(receiveErrors(errors))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LogInForm);