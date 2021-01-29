import { connect } from 'react-redux';
import ProjectShow from './project_show';
import { fetchProject, deleteProject, updateProject } from '../../actions/project_actions';
import { fetchAllSteps } from '../../actions/step_actions';

const mapStateToProps = (state, ownProps) => ({
    project: state.entities.projects[ownProps.match.params.id],
    username: state.entities.users[ownProps.match.params.id],
    errors: state.errors.project,
    history: ownProps.history
});

const mapDispatchToProps = dispatch => ({
    fetchProject: projectId => dispatch(fetchProject(projectId)),
    updateProject: project => dispatch(updateProject(project)),
    deleteProject: (projectId) => dispatch(deleteProject(projectId)),
    fetchAllSteps: (projectId) => dispatch(fetchAllSteps(projectId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectShow);