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
        debugger
        this.props.createStep(this.state, this.props.projectId)
    }

    render() {

        return (
            <div>
                <div>
                    <div>
                        <div>Head</div>
                        <textarea
                            value={this.state.head}
                            placeholder='Enter a step number and head'
                            onChange={this.update('head')}
                        >
                        </textarea>
                    </div>
                    <div>
                        <div>Description</div>
                        <textarea
                            value={this.state.description}
                            placeholder='Enter description of this step'
                            onChange={this.update('description')}
                        ></textarea>
                    </div>
                </div>
                <div>
                    <div></div>
                    <button onClick={this.handleSubmit}>Add Step</button>
                </div>
            </div>
        )
    }
}

export default AddStep;