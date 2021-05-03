import React from 'react';

class CommentForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = this.props.comment
        this.state.content = ""

        this.handleSubmit = this.handleSubmit.bind(this);

    }

    update(field) {
        return e => this.setState({[field]: e.currentTarget.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        let comment = {
            content: this.state.content,
            user_id: this.state.user_id,
            project_id: this.state.project_id
        }
        this.props.createComment(comment)
        this.setState({content: ""})
    }

    render() {
        return (
            
                <div className="comment-box">
                    <div className="comment-content">
                        <img className="comment-img" src="https://content.instructables.com/ORIG/FCY/R6ZT/KJPPWPO4/FCYR6ZTKJPPWPO4.png?auto=webp&amp;frame=1&amp;crop=1:1&amp;width=48" />
                        <textarea 
                            className="comment-textarea"
                            value={this.state.content}
                            placeholder='Add comment'
                            onChange={this.update('content')}>    
                        </textarea>
                    </div>
                    <div className="comment-post">
                        <div className="comment-policy">
                            <p>We have a <span>be nice</span>  policy.</p>
                            <p>Please be positive and constructive.</p>
                        </div>
                        <button  className="project-button postbtn" onClick={this.handleSubmit}>Post</button>
                    </div>
                </div>
            
        )
    }
}

export default CommentForm;