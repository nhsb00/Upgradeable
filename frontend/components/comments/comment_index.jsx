import React from 'react';
import CommentIndexItem from './comment_index_item';

class CommentIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchAllComments(this.props.projectId);
    }

    render() {        
        if (!this.props.comments) return null;
        const { comments, projectId, currentUser, deleteComment, updateComment } = this.props;
        return (
            <div>
                <div className="comments-title">Comments</div>
                    {
                        Object.values(comments).map((comment, idx) => (
                            <CommentIndexItem
                                key={idx}
                                comment={comment}
                                projectId={projectId}
                                currentUser={currentUser}
                                deleteComment={deleteComment}
                                updateComment={updateComment}
                            />
                        ))
                    } 
            </div>
        )
    }
}

export default CommentIndex;