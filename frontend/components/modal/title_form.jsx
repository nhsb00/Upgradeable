import React from 'react';

class TitleForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.project;

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    };

    handleSubmit(e) {
        e.preventDefault();
        let project = Object.assign({}, this.state)
        this.props.createProject(project)
            .then(project => {
                 this.props.history.push(`/projects/${project.id}/edit`)
                })
            .then(() => this.props.closeModal());
    }

    render() {
        return (
            <div>
            <div className="titleform-image"></div>
                <div className="titleform">
                    <div className="titleform-text">I made a project called:</div>
                    
                        <form className="titleform-form" onSubmit={this.handleSubmit}>
                        <input className="titleform-input"
                                type="text"
                                placeholder='Add title'
                                value={this.state.title}
                                onChange={this.update('title')}
                                />
                            <textarea
                                className='titleform-textarea'
                                placeholder='Add description'
                                value={this.state.body}
                                onChange={this.update('body')}
                            />
                        <button className="titleform-submit">Start Upgradeable</button>
                        </form>
                    
                </div>
            </div>
        );
    }
};

export default TitleForm;