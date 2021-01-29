import React from 'react';
import { Link } from 'react-router-dom';
import StepIndexContainer from '../steps/step_index_container';

class ProjectShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.project;

        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
        this.props.fetchAllSteps(this.props.match.params.id);
        this.props.fetchProject(this.props.match.params.id);
    }

    handleDelete(e) {
        e.preventDefault();
        this.props.deleteProject(this.props.match.params.id)
            .then(() => { this.props.history.push(`/`) });
    }

    render() {
        const { project, projectId } = this.props;

        if (!project) return null;
        
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
                        <h1>{project.title}</h1>
                        <p>Published by {this.props.username}</p>
                    </div>
                    <div className='projectshow-image'>
                        Image-box
                    </div>
                    <div className='projectshow-body'>
                        <p>{project.body}</p>
                    </div>
                    <div className='projectshow-step'>
                        <StepIndexContainer />
                    </div>

                    <div>
                        <Link className="project-button" to="/">Back</Link>
                        <Link className="project-button" to={`/projects/${project.id}/edit`}>Edit</Link>
                        <button className="project-button" onClick={this.handleDelete}>Delete</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProjectShow;