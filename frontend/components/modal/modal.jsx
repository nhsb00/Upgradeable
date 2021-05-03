import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import TitleFormContainer from './title_form_container';
import ProjectPhotoContainer from './project_photo_container';

function Modal(props) {
    const { modal, closeModal, project } = props
    if (!modal) {
        return null;
    }
    let component;
    switch (modal) {
        case "start_project":
            component = <TitleFormContainer closeModal={ closeModal }/>;
            break;
        case "add_photo":
            component = <ProjectPhotoContainer 
                closeModal={ closeModal }
                project={ project } />;
            break;
        default:
            return null;
    }

    return (
        <div className="modal-background" onClick={ closeModal }>
            <div className="modal-child" onClick={ e => e.stopPropagation() }>
                { component }
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        modal: state.ui.modal
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal)