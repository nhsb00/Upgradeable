import { connect } from 'react-redux';
import ProjectIndex from './project_index';
import { fetchAllProjects, deleteProject } from '../../actions/project_actions';
import { withRouter } from "react-router-dom";


const mSTP = state => ({
    projects: Object.values(state.entities.projects)
});

const mDTP = dispatch => ({
    fetchAllProjects: (search) => dispatch(fetchAllProjects(search)),
    deleteProject: () => dispatch(deleteProject())
});

export default withRouter(connect(mSTP, mDTP)(ProjectIndex));