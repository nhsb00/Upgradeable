import React from 'react';
import { withRouter } from 'react-router-dom'
import StepIndexContainer from '../steps/step_index_container';
import AddStepContainer from '../steps/add_step_container';

class ProjectForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.project;
        this.state.steps = this.props.steps;

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleCreateStep = this.handleCreateStep.bind(this);
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

    handleCreateStep() {
        this.setState({
            steps: this.state.steps.concat([{head:'', body:''}])
        })
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }

    handleStepList() {
        return (
            this.state.steps.map(step => {
                return <AddStepContainer step={step}/>
            })
        )
    }
    render() {
        return (
            <div className="project-main">
                {/* <div className="project-title">{ this.props.project.title }</div> */}
                
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
                        {this.handleStepList()}
                    </div>
                    <div className="add-step">
                        <button className="project-button" onClick={()=>{this.handleCreateStep()}}>Add Step</button>
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