import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import projectPhoto from './project_photo';
import { closeModal } from '../../actions/modal_actions';

// const mapStateToProps = (state, ownProps) => {
//     debugger
//     return {
//         // project: state.entities.projects[ownProps.match.params.id],
//         projects: Object.values(state.entities.projects)[Object.values(state.entities.projects).length - 1]
//     }
// };

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal()),
    };
};

export default withRouter(connect(null, mapDispatchToProps)(projectPhoto));