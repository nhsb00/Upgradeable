import * as ProjectApiUtil from '../util/project_api_util';

export const RECEIVE_ALL_PROJECTS = "RECEIVE_ALL_PROJECTS";
export const RECEIVE_PROJECT = "RECEIVE_PROJECT";
export const REMOVE_PROJECT = "REMOVE_PROJECT";
export const RECEIVE_PROJECT_ERRORS = "RECEIVE_PROJECT_ERRORS";

const receiveAllProjects = projects => ({
    type: RECEIVE_ALL_PROJECTS,
    projects
});

const receiveProject = project => ({
    type: RECEIVE_PROJECT,
    project
});

const removeProject = projectId => ({
    type: REMOVE_PROJECT,
    projectId
});

const receiveProjectErrors = errors => ({
    type: RECEIVE_PROJECT_ERRORS,
    errors
});

export const fetchAllProjects = () => dispatch => {
    return ProjectApiUtil.fetchAllProjects()
    .then((projects) => dispatch(receiveAllProjects(projects))
    , error => (dispatch(receiveProjectErrors(error.responseJSON))
    ))
};

export const fetchProject = (projectId) => dispatch => {
    return ProjectApiUtil.fetchProject(projectId)
    .then((project) => dispatch(receiveProject(project))
    , error => (dispatch(receiveProjectErrors(error.responseJSON))
    ))
};

export const createProject = (project) => dispatch => {
    return ProjectApiUtil.createProject(project)
    .then((project) => {
        dispatch(receiveProject(project))
        return project.project
    }
    , (error) => (dispatch(receiveProjectErrors(error.responseJSON))
    ))
};

export const updateProject = (project) => dispatch => {
    return ProjectApiUtil.updateProject(project)
    .then((project) => {
        dispatch(receiveProject(project))
        return project.project
    }
    , error => (dispatch(receiveProjectErrors(error.responseJSON))
    ))
};

export const deleteProject = (projectId) => dispatch => {
    return ProjectApiUtil.deleteProject(projectId)
    .then(() => dispatch(removeProject(projectId)))
};
