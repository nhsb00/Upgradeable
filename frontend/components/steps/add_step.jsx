import React from 'react';

class AddStep extends React.Component {
    constructor(props) {
        super(props)

        this.state = this.props.step;

        this.submitted = true;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => {
            this.submitted = false;
            this.setState({ [field]: e.currentTarget.value });
        } 
    }

    handleSubmit(e) {
        e.preventDefault();
        this.submitted = true;

        if (this.state.id) {
            this.props.updateStep(this.state);
        } else {
            this.props.createStep(this.state, this.props.projectId);
        }
    }
    
    componentWillUnmount() {
        if (this.submitted === false ) {
            if (this.state.id) {
                this.props.updateStep(this.state);
            } else {
                this.props.createStep(this.state, this.props.projectId);
            }
        }
    };

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