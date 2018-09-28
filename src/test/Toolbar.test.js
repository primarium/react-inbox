import React from 'react';
import { shallow } from 'enzyme'
import initialState from '../initialData'
import Toolbar from '../components/Toolbar';
import { getMessageCounts } from '../Utility';

describe('Toolbar tests', () => {
    it('Toolbar has correct classes and children', () => {
        const toolbar = shallow(<Toolbar />)

        expect(toolbar.hasClass('toolbar')).toBeTruthy()
    })

    it('Toolbar displays correctly when some messages are selected and some are not', () => {
        const toolbar = shallow(<Toolbar {...getMessageCounts(initialState)} />)

        expect(toolbar.find('.fa-minus-square-o')).toHaveLength(1)
    })

    it('Toolbar displays correctly when all selected', () => {
        const newState = JSON.parse(JSON.stringify(initialState))
        newState.forEach(element => {
            element.selected = true
        });
        const toolbar = shallow(<Toolbar {...getMessageCounts(newState)} />)

        expect(toolbar.find('.fa-check-square-o')).toHaveLength(1)
    })

    it('Toolbar displays correctly when none are selected', () => {
        const newState = JSON.parse(JSON.stringify(initialState))
        newState.forEach(element => {
            delete element.selected
        });
        const toolbar = shallow(<Toolbar {...getMessageCounts(newState)} />)

        expect(toolbar.find('.fa-square-o')).toHaveLength(1)
    })

    it('calls the onSelectAll prop when the select all button is clicked', () => {
        const mockSelectAll = jest.fn()
        const toolbar = shallow(<Toolbar onSelectAll={mockSelectAll} />)
        const selectAllButton = toolbar.find('#selectAllButton')

        selectAllButton.simulate('click')

        expect(mockSelectAll).toHaveBeenCalledTimes(1)
    })

    it('calls the onMarkAsRead prop when the mark as read button is clicked', () => {
        const mockMarkAsRead = jest.fn()
        const toolbar = shallow(<Toolbar onMarkAsRead={mockMarkAsRead} />)
        const markAsRead = toolbar.find('#markAsReadButton')

        markAsRead.simulate('click')

        expect(mockMarkAsRead).toHaveBeenCalledTimes(1)
    })

    it('calls the onMarkAsUnread prop when the mark as unread button is clicked', () => {
        const mockMarkAsUnread = jest.fn()
        const toolbar = shallow(<Toolbar onMarkAsUnread={mockMarkAsUnread} />)
        const markAsUnread = toolbar.find('#markAsUnreadButton')

        markAsUnread.simulate('click')

        expect(mockMarkAsUnread).toHaveBeenCalledTimes(1)
    })

    it('calls the onDelete prop when the delete button is clicked', () => {
        const mockDelete = jest.fn()
        const toolbar = shallow(<Toolbar onDelete={mockDelete} />)
        const deleteButton = toolbar.find('#deleteButton')

        deleteButton.simulate('click')

        expect(mockDelete).toHaveBeenCalledTimes(1)
    })
})