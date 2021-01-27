import React from 'react';

class ProjectForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.project;

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        debugger
        this.props.fetchProject(this.props.match.params.projectId);
    }

    handleSubmit(e) {
        e.preventDefault();
        debugger
        this.props.updateProject(project)
            .then((project) => {this.props.history.push(`/projects/${project.project.id}`)});
    }

    handleDelete(e) {
        e.preventDefault();
        debugger
        this.props.deleteProject()
            .then(() => { this.props.history.push(`/`) });
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    
    }
    // renderError() {
    //     debugger
    //     return (
    //         <>
    //             {this.props.errors.map((error, i) => (
    //                 <ul className="error" key={i}>{error}</ul>
    //             ))}
    //         </>
    //     )
    // };

    render() {
        return (
            <div className="project-main">
                <div className="project-title">{ this.props.project.title }</div>
                
                <div className="project-image-holder">
                    <div className="project-image">Image Box</div>    
                </div>

                <div className="project-edit">
                    <button className="project-button" onClick={this.handleDelete}>Delete</button>
                    <button className="project-button" onClick={this.handlesubmit}>
                    Publish
                    </button>
                </div>

                <div className="project-description">
                    <textarea
                        placeholder="description"
                        value={this.props.project.body}
                        onChange={this.update('body')}></textarea>
                </div>

                <div className="project-step">
                    <div>Step Container</div>
                        <div className="add-step">Add Step Container</div>
                </div>

            </div>
        )
    }
    
   
}

export default ProjectForm;