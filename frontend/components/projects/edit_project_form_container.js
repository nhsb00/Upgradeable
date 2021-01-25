import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import ProjectForm from './project_form';
import { updateProject } from '../../actions/project_actions';
import { fetchProject } from '../../util/project_api_util';

const mapStateToProps = state => {
    return {
        project: {
            title: '',
            body: ''
        },
        formType: 'Publish Upgradeable'
    }
};

const mapDispatchToProps = dispatch => {
    return {
        openeModal: () => dispatch(openModal()),
        fetchProject: projectId => dispatch(fetchProject(projectId)),
        createProject: project => dispatch(updateProject(project))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectForm);