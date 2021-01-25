import React from 'react';
import { Link } from 'react-router-dom';

class ProjectShow extends React.Component {
    componentDidMount() {
        this.props.fetchProject(this.props.match.params.projectId);
    }

    render() {
        const { project } = this.props;
        return (
            <div>
                <h1>{project.title}</h1>
                <p>{project.body}</p>
                <Link to="/">Back to Index</Link>
            </div>
        );
    }
}

export default ProjectShow;