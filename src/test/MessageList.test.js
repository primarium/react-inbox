import React from 'react';
import { shallow } from 'enzyme'
import MessageList from '../components/MessageList';
import initialState from '../initialData'
import Message from '../components/Message.container';

describe('message list tests', () => {
    it('renders without crashing', () => {
        const messageList = shallow(<MessageList messages={initialState} />)

        expect(messageList.find(Message)).toHaveLength(initialState.length)
    });
})
