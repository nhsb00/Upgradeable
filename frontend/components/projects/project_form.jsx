import React from 'react';

class ProjectForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.project;

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createProject(this.state);
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }

    render() {
        const { project } = this.props;
        return (
            <div>
                <div>title</div>
                <br/>
                <h1>{ this.props.project.title }</h1>
                <br />
                <div>image</div>
                <br />
                <div>Project Description</div>
                <br />
                <textarea placeholder="Add description for your project" 
                            value={this.state.body}
                            onChange={this.update('body')}></textarea>
                <br />
                <div>Step</div>
                <br />
                <div>AddStep</div>
                <br />
                <button onClick={this.handleSubmit}>Submit</button>
            </div>
        )
    }
}

export default ProjectForm;