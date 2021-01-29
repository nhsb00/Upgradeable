import { connect } from 'react-redux';
import StepIndex from './step_index';
import { fetchAllSteps, deleteStep, updateStep } from '../../actions/step_actions';
import { withRouter } from 'react-router-dom';


const mapStateToProp = (state, ownProps) => {
    return {
        projectId: state.entities.projects[ownProps.match.params.id].id,
        steps: state.entities.steps,

    }
};

const mapDispatchToProp = dispatch => ({
    fetchAllSteps: (projectId) => dispatch(fetchAllSteps(projectId)),
    updateStep: (step) => dispatch(updateStep(step)),
    deleteStep: (stepId) => dispatch(deleteStep(stepId))
});

export default withRouter(connect(mapStateToProp, mapDispatchToProp)(StepIndex));