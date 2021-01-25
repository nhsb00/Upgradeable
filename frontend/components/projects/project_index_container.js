import { connect } from 'react-redux';
import ProjectIndex from './project_index';
import { fetchAllProjects, deleteProject } from '../../actions/project_actions';


const mSTP = state => ({
    projects: Object.values(state.entities.projects)
});

const mDTP = dispatch => ({
    fetchAllProjects: () => dispatch(fetchAllProjects()),
});

export default connect(mSTP, mDTP)(ProjectIndex);