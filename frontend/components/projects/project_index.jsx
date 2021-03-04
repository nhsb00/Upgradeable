import React from 'react';
import ProjectIndexItem from './project_index_item';


class ProjectIndex extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.props.fetchAllProjects();
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