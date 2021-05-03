export const fetchAllComments = (projectId) => {
    return $.ajax({
        url: `/api/projects/${projectId}/comments`,
        method: 'GET'
    })
};

export const fetchComment = commentId => {
    return $.ajax({
        url: `/api/comments/${commentId}`,
        method: 'GET',
        data: { commnetId }
    })
};

export const createComment = (comment) => {
    return $.ajax({
        url: `/api/projects/${comment.project_id}/comments`,
        method: 'POST',
        data: { comment }
    })
};

export const updateComment = (comment) => {
    return $.ajax({
        url: `/api/comments/${comment.id}`,
        method: 'PATCH',
        data: { comment }
    })
};

export const deleteComment = (commentId) => {
    return $.ajax({
        url: `/api/comments/${commentId}`,
        method: 'DELETE',
        data: { commentId }
    })
};