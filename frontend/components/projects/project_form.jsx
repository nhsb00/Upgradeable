import React from 'react';
import { withRouter } from 'react-router-dom'
import StepIndexContainer from '../steps/step_index_container';
import AddStepContainer from '../steps/add_step_container';
import Modal from '../modal/modal';

class ProjectForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            id: this.props.project.id,
            title: this.props.project.title,
            body: this.props.project.body,
            user_id: this.props.project.user_id,
            photoFile: null,
            photoUrl: null
            }
        this.state.steps = this.props.steps || {};        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleCreateStep = this.handleCreateStep.bind(this);
        this.handleOpenModal = this.handleOpenModal.bind(this);
    }
    


    // componentDidUpdate(prevProps, prevSteps) {
    //     debugger
    //     if (this.state.steps !== prevProps.steps ) {
    //         debugger
    //         this.props.fetchAllSteps(this.props.match.params.id);
    //     }
    // }

    // handleFile(e) {
    //     const file = e.currentTarget.files[0];
    //     const fileReader = new FileReader();
    //     fileReader.onloadend = () => {
    //         this.setState({photoFile: file, photoUrl: fileReader.result})
    //     };
    //     if (file){
    //         fileReader.readAsDataURL(file);
    //     }
    // }

    // handleSavePhoto(e) {
    //     e.preventDefault();
    //     const formData = new FormData();
    //     if (this.state.photoFile) {
    //         formData.append("project[photo]", this.state.photoFile);
    //     }
    //     
    //     $.ajax({
    //         url: `/api/projects/${this.state.id}`,
    //         method: 'PATCH',
    //         data: formData,
    //         contentType: false,
    //         processData: false
    //     });
        
    // }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
          if (this.state.photoFile) {
            formData.append("project[photo]", this.state.photoFile);
        }
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
            steps: Object.values(this.state.steps).concat([{head:'', body:''}])
        })
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }


    handleStepList() {
        const steps = this.state.steps || {};
        return (
           Object.values(steps).map(step => {
                    return <AddStepContainer 
                    step={step}
                    key={step.id}
                    />
            })
        )
    }

    handleOpenModal(e) {
        e.preventDefault();
        // this.props.history.push(`/projects/${this.props.project.id}/edit`);
        this.setState({ modal: true });
        this.props.openModal();
    }

    render() {
        // const preview = this.props.project.photoUrl ? <img src={this.props.project.photoUrl} /> : "+ Click To Add Image";
        return (
            <div className="project-main">

                {this.state.modal == true ? <Modal project={this.props.project}/> : null}
                
                <div className="project-image-holder">
                    <div className="project-image" onClick={this.handleOpenModal}>+ Click To Add Image</div>
                
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
                        { this.state.steps ? this.handleStepList() : null }
                    </div>
                    <div className="add-step">
                        <button className="project-button" onClick={()=>{this.handleCreateStep()}}>Add Step</button>
                    </div>
                </div>

            </div> 
        )
    }
}

export default withRouter(ProjectForm);