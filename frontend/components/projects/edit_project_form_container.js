import React from 'react';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import ProjectForm from './project_form';
import { fetchProject, updateProject, deleteProject } from '../../actions/project_actions';
import { withRouter } from 'react-router-dom';
import StepIndex from '../steps/step_index';

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
        deleteProject: (projectId) => dispatch(deleteProject(projectId))
    };
};


class EditProjectForm extends React.Component {
    componentDidMount() {
        this.props.fetchProject(this.props.match.params.id);
    }

    render() {
        const { updateProject, deleteProject, project } = this.props;
        
        if (!project) return null;
        return (
            <ProjectForm
                updateProject={updateProject}
                deleteProject={deleteProject}
                project={project}
                />
 
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditProjectForm));

