import { RECEIVE_ALL_STEPS, RECEIVE_STEP, REMOVE_STEP } from '../actions/step_actions';

const stepsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_ALL_STEPS:
            return action.steps.steps;
        case RECEIVE_STEP:
            return Object.assign({}, state, {[action.step.step.id]: action.step.step })
        case REMOVE_STEP:
            delete nextState[action.stepId];
            return nextState;
        default:
            return state;
    }
}

export default stepsReducer;