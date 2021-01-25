import { connect } from 'react-redux';
import Header from './header';
import { openModal } from '../../actions/modal_actions';

const mapDispatchToProps = dispatch => ({
    openModal: () => dispatch(openModal("start_project"))
});

export default connect(null, mapDispatchToProps)(Header);