import * as StepApiUtil from '../util/steps_api_util';

export const RECEIVE_ALL_STEPS = 'RECEIVE_ALL_STEPS'
export const RECEIVE_STEP = 'RECEIVE_STEP'
export const REMOVE_STEP = 'REMOVE_STEP'

const receiveAllSteps = (steps) => ({
    type: RECEIVE_ALL_STEPS,
    steps
});

const receiveStep = (step) => ({
        type: RECEIVE_STEP,
        step
});

const removeStep = (stepId) => ({
    type: REMOVE_STEP,
    stepId
});

export const fetchAllSteps = (projectId) => dispatch => {
    return StepApiUtil.fetchAllSteps(projectId)
        .then((steps) => dispatch(receiveAllSteps(steps)));
};

export const fetchStep = (stepId) => dispatch => {
    return StepApiUtil.fetchStep(stepId)
        .then((step) => dispatch(receiveStep(step)));
};

export const createStep = (step, projectId) => dispatch => {
    return StepApiUtil.createStep(step, projectId)
        .then((step) => {
            dispatch(receiveStep(step))
            return step.step;
        })
};

export const updateStep = (step) => dispatch => {
    return StepApiUtil.updateStep(step)
        .then((step) => {
            dispatch(receiveStep(step))
            return step.step;
        });
};

export const deleteStep = (step) => dispatch => {
    return StepApiUtil.deleteStep(step)
        .then(() => dispatch(removeStep(step)))
};
