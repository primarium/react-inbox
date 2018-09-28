import React from 'react';
import { shallow } from 'enzyme'
import initialState from '../initialData'
import Message from '../components/Message';

describe('message tests', () => {
    it('message has correct classes and text', () => {
        const message = shallow(<Message message={initialState[0]} />)

        expect(message.text()).toContain(initialState[0].subject)
        expect(message.hasClass('message')).toBeTruthy() // truthiness is dumb
    });

    it('unread message has correct classes', () => {
        const unreadMessage = shallow(<Message message={initialState[0]} />)

        expect(unreadMessage.hasClass('unread')).toBeTruthy()
    });

    it('read message has correct classes', () => {
        const readMessage = shallow(<Message message={initialState[3]} />)

        expect(readMessage.hasClass('read')).toBeTruthy()
    });

    it('starred message has correct classes', () => {
        const starredMessage = shallow(<Message message={initialState[0]} />)

        expect(starredMessage.find('.fa-star')).toHaveLength(1)
    });

    it('unstarred message has correct classes', () => {
        const unstarredMessage = shallow(<Message message={initialState[3]} />)

        expect(unstarredMessage.find('.fa-star-o')).toHaveLength(1)
    });

    it('unselected message has correct classes and checkbox is not checked', () => {
        const unselectedMessage = shallow(<Message message={initialState[0]} />)

        expect(unselectedMessage.hasClass('selected')).toBeFalsy()
        expect(unselectedMessage.find('input').props().type).toEqual('checkbox')
        expect(unselectedMessage.find('input').props()).not.toHaveProperty('checked')
    });

    it('selected message has correct classes and checkbox is checked', () => {
        const selectedMessage = shallow(<Message message={initialState[3]} />)

        expect(selectedMessage.hasClass('selected')).toBeTruthy()
        expect(selectedMessage.find('input').props().type).toEqual('checkbox')
        expect(selectedMessage.find('input').props()).toHaveProperty('checked', 'checked')
    });

    it('displays the correct labels', () => {
        const message = shallow(<Message message={initialState[0]} />)

        const labels = message.find('.label')
        expect(labels).toHaveLength(initialState[0].labels.length)
        labels.forEach((label, index) => {
            expect(label.text()).toEqual(initialState[0].labels[index])
        })
    })
})