import { connect } from 'react-redux';
import MessageList from './MessageList.js';

const mapStateToProps = (state) => {
    return {
        messages: state.messages
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         'navMessageEdit': (id) => dispatch(navMessageEdit(id)),
//         'navAddMessage': () => dispatch(navMessageAdd()),
//         'peopleGet': () => dispatch(peopleGet())
//     }
// }

export default connect(mapStateToProps)(MessageList);
