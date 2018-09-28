import { connect } from 'react-redux';
import Message from './Message.js';
import Actions from '../redux/actions.js';

const mapDispatchToProps = (dispatch) => {
    return {
        onClickStar: (id) => dispatch(Actions.clickStar(id)),
        onClickCheckbox: (id) => dispatch(Actions.clickCheckbox(id)),
    }
}

export default connect(undefined, mapDispatchToProps)(Message);