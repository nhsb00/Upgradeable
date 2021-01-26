import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import UserDropdown from './dropdown';
import { openModal } from '../../actions/modal_actions';


const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    openModal: () => dispatch(openModal("start_project"))
});

export default connect(null, mapDispatchToProps)(UserDropdown);