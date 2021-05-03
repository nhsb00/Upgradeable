import React from 'react';
import { Link } from 'react-router-dom';
import CommentIndexContainer from '../comments/comment_index_container';
import StepIndexContainer from '../steps/step_index_container';
import CreateCommentContainer from '../comments/create_comment_container';

class ProjectShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.project;

        // this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
        this.props.fetchProject(this.props.match.params.id);
        this.props.fetchAllSteps(this.props.match.params.id);
    }

    // handleDelete(e) {
    //     e.preventDefault();
    //     this.props.deleteProject(this.props.match.params.id)
    //         .then(() => { this.props.history.push(`/`) });
    // }

    projectDeleteEdit() {
        return (
            <div>
                <Link className="project-button" to={`/projects/${this.props.project.id}/edit`}>Edit</Link>
                {/* <button className="project-button" onClick={this.handleDelete}>Delete</button> */}
            </div>
        )
    }

    render() {
        // const { project, projectId } = this.props;
        
        if (!this.props.project) return null;
        
        const delelteEditButtion = (this.props.project.user_id === this.props.currentUser) ? this.projectDeleteEdit() : null
        
        
        // if (project.user_id === this.state.session.id) {
        //     button = <div>
        //         <Link className="project-button" to={`/projects/${project.id}/edit`}>Edit</Link>
        //         <button className="project-button" onClick={this.handleDelete}>Delete</button>
        //         </div>
        // }
        return ( 
            <div className='projectshow'>
                <div className='projectshow-container'>
                    <div className='projectshow-title'>
                        <h1>{this.props.project.title}</h1>
                        <p>Published by {this.props.project.user.username}</p>
                    </div>
                    <div className='projectshow-image'>
                        <img src={this.props.project.photoUrl} alt=""/>
                    </div>
                    <div className='projectshow-body'>
                        <p>{this.props.project.body}</p>
                    </div>
                    <div className='projectshow-step'>
                        <StepIndexContainer />
                    </div>

                    <div className='prject-edit-btn'>
                        <div>
                            <Link className="project-button" to="/">Back</Link>
                        </div>
                         {delelteEditButtion}
                    </div>

                    <div>
                        <CommentIndexContainer />
                    </div>

                    <div>
                        <CreateCommentContainer />
                    </div>
                </div>
            </div>
        );
    }
}

export default ProjectShow;