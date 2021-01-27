import { connect } from 'react-redux';
import TitleForm from './title_form';
import { closeModal } from '../../actions/modal_actions';
import { createProject } from '../../actions/project_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = ( state, ownProps ) => {
    return {
        project: {
            title: '',
            body: ''
        },
        formType: 'Publish Upgradeable',
        errors: state.errors.project,
        history: ownProps.history
    }
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal()),
        createProject: project => dispatch(createProject(project))
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TitleForm));