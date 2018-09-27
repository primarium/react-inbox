import React from 'react';
import { shallow } from 'enzyme'
import initialState from '../initialData'
import Message from '../components/Message';

describe('message tests', () => {
    it('renders without crashing', () => {
        const message = shallow(<Message message={initialState[0]} />)

        expect(message.text()).toContain(initialState[0].subject)
        expect(message.hasClass('message')).toBeTruthy()
    });
})