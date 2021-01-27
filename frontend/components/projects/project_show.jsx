import React from 'react';
import { Link } from 'react-router-dom';

class ProjectShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.project;

        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
        this.props.fetchProject(this.props.match.params.id);
    }

    handleDelete(e) {
        e.preventDefault();
        debugger
        this.props.deleteProject(this.props.match.params.id)
            .then(() => { this.props.history.push(`/`) });
    }

    render() {
        const { project } = this.props;

        if (!project) return null;

        return (
            <div>
                <h1>{project.title}</h1>
                <p>{project.body}</p>
                <Link className="project-button" to="/">Back to Index</Link>
                <Link className="project-button" to={`/projects/${project.id}/edit`}>Edit</Link>
                <button className="project-button" onClick={this.handleDelete}>Delete</button>
                
            </div>
        );
    }
}

export default ProjectShow;