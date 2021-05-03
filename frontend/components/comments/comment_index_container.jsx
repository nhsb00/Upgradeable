import { connect } from 'react-redux';
import CommentIndex from './comment_index';
import { fetchAllComments, deleteComment, updateComment } from '../../actions/comment_action';
import { withRouter } from 'react-router-dom'

const mapStateToProps = (state, ownProps) => {
    
        return {
            comments: state.entities.comments,
            currentUser: state.session.id,
            projectId: state.entities.projects[ownProps.match.params.id].id,
        }

};

const mapDispatchToProps = dispatch => ({
    fetchAllComments: ((projectId) => dispatch(fetchAllComments(projectId))),
    deleteComment: ((commentId) => dispatch(deleteComment(commentId))),
    updateComment: ((comment) => dispatch(updateComment(comment)))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CommentIndex));