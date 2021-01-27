import { RECEIVE_ALL_PROJECTS, RECEIVE_PROJECT, REMOVE_PROJECT } from "../actions/project_actions";

const projectsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state)

    switch (action.type) {
        case RECEIVE_ALL_PROJECTS:
            return action.projects.projects
        case RECEIVE_PROJECT:
            return Object.assign({}, state, {[action.project.project.id]: action.project.project})
        case REMOVE_PROJECT:
            delete nextState[action.projectId];
            return nextState;
        default:
            return state;
    }
};

export default projectsReducer;