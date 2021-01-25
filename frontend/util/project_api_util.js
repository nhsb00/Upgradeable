export const fetchAllProjects = () => {
    return $.ajax({
        url: '/api/projects',
        method: 'GET'
    })
};

export const fetchProject = (projectId) => {
    return $.ajax({
        url: `/api/projects/${projectId}`,
        method: 'GET'
    })
};

export const createProject = (project) => {
    return $.ajax({
        url: '/api/projects',
        method: 'POST',
        data: { project },
        // processData: false,
        // contentType: false
    })
};

export const updateProject = (project) => {
    return $.ajax({
        url: `/api/projects/${project.id}`,
        method: 'PATCH',
        data: { project }
    })
};

export const deleteProject = (projectId) => {
    return $.ajax({
        url: `/api/projects/${projectId}`,
        method: 'DELETE'
    })
};