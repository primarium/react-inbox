import { connect } from 'react-redux';
import MessageList from './MessageList.js';

const mapStateToProps = (state) => {
    return {
        messages: state.messages
    }
}

export default connect(mapStateToProps)(MessageList);