export const fetchAllSteps = (projectId) => {
    debugger
    return $.ajax({
        url: `/api/projects/${projectId}/steps`,
        method: 'GET'
    })
};

export const fetchStep = stepId => {
    debugger
    return $.ajax({
        url: `/api/steps/${stepId}`,
        method: 'GET',
        data: { stepId }
    })
};

export const createStep = (step, projectId) => {
    debugger
    return $.ajax({
        url: `/api/projects/${projectId}/steps`,
        method: 'POST',
        data: { step }
    })
};

export const updateStep = (step) => {
    debugger
    return $.ajax({
        url: `/api/steps/${step.id}`,
        method: 'PATCH',
        data: { step }
    })
};

export const deleteStep = (stepId) => {
    debugger
    return $.ajax({
        url: `/api/steps/${stepId}`,
        method: 'DELETE',
        data: { stepId }
    })
};