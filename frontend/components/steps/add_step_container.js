import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import AddStep from './add_step';
import { createStep } from '../../actions/step_actions';

const mapStateToProp = (state, ownProps) => {
    return {
        projectId: ownProps.match.params.id,
        history: ownProps.history
        
    }
};

const mapDispatchToProp = dispatch => ({
    createStep: (step, projectId) => dispatch(createStep(step, projectId)),
});

export default withRouter(connect(mapStateToProp, mapDispatchToProp)(AddStep))