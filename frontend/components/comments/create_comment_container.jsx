import { connect } from 'react-redux';
import CommentForm from './comment_form';
import { createComment } from '../../actions/comment_action';
import { withRouter } from 'react-router-dom'

const mapStateToProps = (state, ownProps) => {
    return ({
        comment: {
            project_id: ownProps.match.params.id,
            user_id: state.session.id,
        }
    })
};

const mapDispatchToProps = dispatch => ({
    createComment: comment => dispatch(createComment(comment)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CommentForm));

