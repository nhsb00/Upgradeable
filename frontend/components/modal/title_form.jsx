import React from 'react';

class TitleForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    };

    handleSubmit(e) {
        e.preventDefault();
        let project = Object.assign({}, this.state)
        this.props.createProject(project)
            .then(project => { this.props.history.push(`/projects/${project.id}/edit`)})
            .then(() => this.props.closeModal());
    }

    render() {
        return (
            <div>
                <div>
                    I made a project called:
                </div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" 
                        value={this.props.title}
                        onChange={this.update('title')}
                        />
                    <textarea
                        value={this.props.body}
                        onChange={this.update('body')}
                    />
                    <button>Start Upgradeable</button>
                </form>
            </div>
        );
    }
};

export default TitleForm;