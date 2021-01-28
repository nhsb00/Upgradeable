import React from 'react';

class AddStep extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            head: '',
            description: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createStep(this.state, this.props.projectId)
        this.setState({head: "", description: ""})
    }

    render() {

        return (
            <div className="addstep-box">
                <div className="addstep-input">
                    <div className="addstep-head">
                        <textarea 
                            value={this.state.head}
                            placeholder='Enter a step number and head'
                            onChange={this.update('head')}
                        >
                        </textarea>
                    </div>
                    <div className="addstep-description">
                        <textarea 
                            value={this.state.description}
                            placeholder='Enter description of this step'
                            onChange={this.update('description')}
                        ></textarea>
                    </div>
                </div>
                <div className="addstep-button-holder">
                    <button className="addstep-button" onClick={this.handleSubmit}>Save Step</button>
                </div>
            </div>
        )
    }
}

export default AddStep;