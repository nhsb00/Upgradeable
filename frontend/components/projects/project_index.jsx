import React from 'react';
import ProjectIndexItem from './project_index_item';


class ProjectIndex extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        debugger
        this.props.fetchAllProjects();
    }

    render() {
        const { projects, deleteProject } = this.props;
        return (
            <div>
                <ul>
                    <br/>
                    <br/>
                    {
                        projects.map(project => (
                            <ProjectIndexItem
                                project={project}
                                deleteProject={deleteProject}
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