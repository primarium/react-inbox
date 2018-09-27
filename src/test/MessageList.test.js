import React from 'react';
import { shallow } from 'enzyme'
import MessageList from '../components/MessageList';

describe('message list tests', () => {
    it('renders without crashing', () => {
        const messageList = shallow(<MessageList />)

        expect(messageList.find('ul')).toHaveLength(1)
    });
})
