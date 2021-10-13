import React from 'react';

class projectPhoto extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = this.props.project
        this.handleSavePhoto = this.handleSavePhoto.bind(this);
    }

    handleFile(e) {
        
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({photoFile: file, photoUrl: fileReader.result})
        };
        if (file){
            fileReader.readAsDataURL(file);
        }
    }

    handleSavePhoto(e) {
        e.preventDefault();
        debugger
        const formData = new FormData();
        if (this.state.photoFile) {
            formData.append("project[photo]", this.state.photoFile);
        }
        debugger
        $.ajax({
            url: `/api/projects/${this.state.id}`,
            method: 'PATCH',
            data: formData,
            contentType: false,
            processData: false
        });
        this.props.closeModal()        
    }

    render() {  
        const preview = this.state ? <img src={this.state.photoUrl} /> : null;
        return (
            <div className="photo-container">
                <div className="">
                    <div className="photo-holder">{preview}</div>      
                    <div className="photo-footer">
                        <label>
                            <div className="file-input project-button">Browse
                                <input className="file" type="file" onChange={this.handleFile.bind(this)}/>
                            </div>
                         </label>
                        <button className="project-button" onClick={this.handleSavePhoto}>Upload</button>
                    </div>
    
                </div>
            </div>
        );
    }
};

export default projectPhoto;