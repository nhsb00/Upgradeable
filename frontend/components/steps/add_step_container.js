import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import AddStep from './add_step';
import { createStep, updateStep, deleteStep, fetchAllSteps } from '../../actions/step_actions';

const mapStateToProp = (state, ownProps) => {
    return {
        projectId: ownProps.match.params.id,
        history: ownProps.history
        
    }
};

const mapDispatchToProp = dispatch => ({
    fetchAllSteps: (projectId) => dispatch(fetchAllSteps(projectId)),
    createStep: (step, projectId) => dispatch(createStep(step, projectId)),
    updateStep: (step) => dispatch(updateStep(step)),
    deleteStep: (stepId) => dispatch(deleteStep(stepId))
});

export default withRouter(connect(mapStateToProp, mapDispatchToProp)(AddStep))