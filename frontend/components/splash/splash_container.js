import { connect } from 'react-redux';
import { fetchAllProjects } from '../../actions/project_actions';
import Splash from './splash';

const mapStateToProps = state => {
    return {
        projects: state.entities.projects
    }
}

const mapDispatchToProps = disptach => {
    return {
     fetchAllProjects: (() => disptach(fetchAllProjects()))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Splash)