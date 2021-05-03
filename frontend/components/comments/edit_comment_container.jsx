import { connect } from 'react-redux';
import  CommentIndexItem from './comment_index_item';
import { updateComment } from '../../actions/comment_action';
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
    updateComment: comment => dispatch(updateComment(comment)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CommentIndexItem));

