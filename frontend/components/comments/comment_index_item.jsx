import React from 'react';

class CommentIndexItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.comment

        this.deleteComment = this.deleteComment.bind(this)

        this.edit = false
        this.editComment = this.editComment.bind(this)

        this.handleUpdateComment = this.handleUpdateComment.bind(this)
    }

    deleteComment(e) {
        e.preventDefault();
        this.props.deleteComment(this.props.comment.id)
    }

    editComment(e) {
        e.preventDefault();
        this.edit = true
        this.forceUpdate()
    }

    update(field) {
        return e => this.setState({[field]: e.currentTarget.value});
    }

    handleUpdateComment(e) {
        e.preventDefault();
        this.props.updateComment(this.state)
        this.edit = false
    }
    
    commentDeleteEdit() {
        return (
            <div>
                <button  className="project-button" onClick={this.deleteComment}>Delete</button>
                <button  className="project-button" onClick={this.editComment}>Edit</button>
            </div>
        )
    }
    render() {
        const delelteEditButtion = (this.props.comment.user_id === this.props.currentUser) ? this.commentDeleteEdit() : null
        let comment
        if (this.edit === false) {
            comment = 
                <div className="comment-list">
                    <div className="comment-head">
                        <div className="comment-head">
                            <img className="comment-img" src="https://content.instructables.com/static/image/user.default.png?auto=webp&frame=1&crop=1:1&width=48" />
                            <div className="comment-by">by {this.props.comment.user.username}</div>
                        </div>
                        {delelteEditButtion}                                
                    </div>
                    <div className="comment-content">{this.props.comment.content}</div>
                </div>
        } else {
            comment = 
            <div className="comment-container">
                <div className="comment-box">
                    <div className="comment-content">
                        <img className="comment-img" src="https://content.instructables.com/ORIG/FCY/R6ZT/KJPPWPO4/FCYR6ZTKJPPWPO4.png?auto=webp&amp;frame=1&amp;crop=1:1&amp;width=48" />
                        <textarea
                            className="comment-textarea"
                            value={this.state.content}
                            onChange={this.update('content')}>    
                        </textarea>
                    </div>
                    <div>
                        <div className="comment-post">
                            <div className="comment-policy">
                                <p>We have a <span>be nice</span> policy.</p>
                                <p>Please be positive and constructive.</p>
                            </div>
                        <button  className="project-button postbtn" onClick={this.handleUpdateComment}>Update</button>
                        </div>
                    </div>
                </div>
            </div>
        }
        return (
            <div className="comment-border">{comment}</div>
        )
    }

}

export default CommentIndexItem;