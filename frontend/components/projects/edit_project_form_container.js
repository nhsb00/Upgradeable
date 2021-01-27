import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import ProjectForm from './project_form';
import { fetchProject, updateProject, deleteProject } from '../../actions/project_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        project: state.entities.projects[ownProps.match.params.id],
        errors: state.errors.project,
        history: ownProps.history
    }
};

const mapDispatchToProps = dispatch => {
    return {
        openeModal: () => dispatch(openModal()),
        fetchProject: projectId => dispatch(fetchProject(projectId)),
        updateProject: project => dispatch(updateProject(project)),
        deleteProject: () => dispatch(deleteProject())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectForm);