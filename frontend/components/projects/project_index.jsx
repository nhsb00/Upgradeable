import React from 'react';
import ProjectIndexItem from './project_index_item';


class ProjectIndex extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        if (this.props.location.pathname.includes("search")) {
            this.props.fetchAllProjects(this.props.match.params.query);
        } else {
            this.props.fetchAllProjects();
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.query !== this.props.match.params.query) {
             this.props.fetchAllProjects(this.props.match.params.query);
        }
    }

    render() {
        const { projects, deleteProject } = this.props;
        return (
            <div>
                <ul className="projectindex">
                    {
                        projects.map(project => (
                            <ProjectIndexItem
                                project={project}
                                key={project.id}
                            />
                        ))
                    }
                </ul>
            </div>
        );

    }
}

export default ProjectIndex;