import { connect } from 'react-redux';
import Toolbar from './Toolbar.js';
import { getMessageCounts } from '../Utility.js';
import Actions from '../redux/actions'

const mapStateToProps = (state) => {
    return getMessageCounts(state.messages)
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSelectAll: () => dispatch(Actions.clickSelectAll()),
        onMarkAsRead: () => dispatch(Actions.clickMarkAsRead()),
        onMarkAsUnread: () => dispatch(Actions.clickMarkAsUnread())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);