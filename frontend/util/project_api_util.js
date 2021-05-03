export const fetchAllProjects = (search) => {
    return $.ajax({
        url: '/api/projects',
        method: 'GET',
        data: {
            search
        }
    })
};

export const fetchSearchProjects = (search) => {
    return $.ajax({
        url: `/api/projects`,
        method: 'GET',
        data: { search }
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
        // contentType: false,
        // processData: false
    })
};

export const deleteProject = (projectId) => {
    return $.ajax({
        url: `/api/projects/${projectId}`,
        method: 'DELETE'
    })
};