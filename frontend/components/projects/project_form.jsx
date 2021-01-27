import React from 'react';
import { withRouter } from 'react-router-dom'
import StepIndexContainer from '../steps/step_index_container';
import AddStepContainer from '../steps/add_step_container';

class ProjectForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.project;

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.updateProject(this.state)
            .then((project) => {this.props.history.push(`/projects/${project.id}`)});
    }

    handleDelete(e) {
        e.preventDefault();
        this.props.deleteProject(this.props.match.params.id)
            .then(() => { this.props.history.push(`/`) });
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }
    
    render() {
        return (
            <div className="project-main">
                <div className="project-title">{ this.props.project.title }</div>
                
                <div className="project-image-holder">
                    <div className="project-image">Image Box</div>    
                </div>

                <div className="project-edit">
                    <button className="project-button" onClick={this.handleDelete}>Delete</button>
                    <button className="project-button" onClick={this.handleSubmit}>Publish</button>
                </div>

                <div className="project-description">
                    <textarea
                        placeholder="description"
                        value={this.state.body}
                        onChange={this.update('body')}></textarea>
                </div>

                <div className="project-step">
                    <div>
                        <StepIndexContainer />
                    </div>
                    <div className="add-step">
                        <AddStepContainer />
                    </div>
                </div>

            </div> 
        )
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
    
}

export default withRouter(ProjectForm);