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
        const { projects } = this.props;
        return (
            <div>
                <ul>
                    <br/>
                    <p>Projectindexitem</p>
                    <br/>
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