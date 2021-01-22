import { connect } from 'react-redux';
import React from 'react';
import LogInForm from './login_form';
import { demologin, login } from '../../actions/session_actions';
import { Link } from 'react-router-dom';

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'login',
        link: <Link to="/signup">Sign Up >></Link>
    }
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(login(user)),
        demologin: (user) => dispatch(demologin(user))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LogInForm);