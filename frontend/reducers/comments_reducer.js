import { RECEIVE_ALL_COMMENTS, RECEIVE_COMMENT, REMOVE_COMMENT } from '../actions/comment_action';

const commentsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_ALL_COMMENTS:
            
            if (!action.comments.comments) {
                return null
            } else {
                return action.comments.comments;
            }
        case RECEIVE_COMMENT:
            return Object.assign({}, state, {[action.comment.comment.id]: action.comment.comment })
        case REMOVE_COMMENT:
            delete nextState[action.commentId];
            return nextState;
        default:
            return state;
    }
}

export default commentsReducer;