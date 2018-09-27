import React from 'react';
import { shallow } from 'enzyme'
import MessageList from '../components/MessageList';
import initialState from '../initialData'
import Message from '../components/Message';

describe('message list tests', () => {
    it('renders without crashing', () => {
        const messageList = shallow(<MessageList messages={initialState} />)

        expect(messageList.find('ul')).toHaveLength(1)
        expect(messageList.find(Message)).toHaveLength(initialState.length)
    });
})