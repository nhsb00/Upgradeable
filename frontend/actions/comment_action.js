import * as CommentApiUtil from '../util/comment_api_util';

export const RECEIVE_ALL_COMMENTS = 'RECEIVE_ALL_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

const receiveAllComments = (comments) => ({
    type: RECEIVE_ALL_COMMENTS,
    comments
});

const reciveComment = (comment) => ({
        type: RECEIVE_COMMENT,
        comment
});

const removeComment = (commentId) => ({
    type: REMOVE_COMMENT,
    commentId
});

export const fetchAllComments = (projectId) => dispatch => {
    return CommentApiUtil.fetchAllComments(projectId)
        .then((comments) => dispatch(receiveAllComments(comments)));
};

export const fetchComment = (commentId) => dispatch => {
    return CommentApiUtil.fetchComment(commentId)
        .then((comment) => dispatch(reciveComment(comment)));
};

export const createComment = (comment) => dispatch => {
    return CommentApiUtil.createComment(comment)
        .then((comment) => {
            dispatch(reciveComment(comment))
            return comment.comment;
        })
};

export const updateComment = (comment) => dispatch => {
    return CommentApiUtil.updateComment(comment)
        .then((comment) => {
            dispatch(reciveComment(comment))
            return comment.comment
        })
};

export const deleteComment = (comment) => dispatch => {
    return CommentApiUtil.deleteComment(comment)
        .then(() => (dispatch(removeComment(comment))))
};