export const fetchAllSteps = (projectId) => {
    return $.ajax({
        url: `/api/projects/${projectId}/steps`,
        method: 'GET'
    })
};

export const fetchStep = stepId => {
    return $.ajax({
        url: `/api/steps/${stepId}`,
        method: 'GET',
        data: { stepId }
    })
};

export const createStep = (step, projectId) => {
    return $.ajax({
        url: `/api/projects/${projectId}/steps`,
        method: 'POST',
        data: { step }
    })
};

export const updateStep = (step) => {
    return $.ajax({
        url: `/api/steps/${step.id}`,
        method: 'PATCH',
        data: { step }
    })
};

export const deleteStep = (stepId) => {
    return $.ajax({
        url: `/api/steps/${stepId}`,
        method: 'DELETE',
        data: { stepId }
    })
};