import { connect } from 'react-redux';
import StepIndex from './step_index';
import { fetchAllSteps, deletestep, updateStep } from '../../actions/step_actions';
import { withRouter } from 'react-router-dom';


const mapStateToProp = (state, ownProps) => ({
    steps: state.entities.steps,
    projectId: state.entities.projects[ownProps.match.params.id].id,
});

const mapDispatchToProp = dispatch => ({
    fetchAllSteps: (projectId) => dispatch(fetchAllSteps(projectId)),
    updateStep: (step) => dispatch(updateStep(step)),
    deletestep: (stepId) => dispatch(deletestep(stepId))
});

export default withRouter(connect(mapStateToProp, mapDispatchToProp)(StepIndex));