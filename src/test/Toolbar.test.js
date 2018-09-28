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

    it('calls the onApplyLabel prop when the apply label dropdown is changed', () => {
        const mockApplyLabel = jest.fn()
        const toolbar = shallow(<Toolbar onApplyLabel={mockApplyLabel} />)
        const applyLabelDropdown = toolbar.find('#applyLabelDropdown')

        applyLabelDropdown.simulate('change', { target: { value: 'label' } })

        expect(mockApplyLabel).toHaveBeenCalledTimes(1)
        expect(mockApplyLabel).toHaveBeenCalledWith('label')
    })

    it('calls the onRemoveLabel prop when the remove label dropdown is changed', () => {
        const mockRemoveLabel = jest.fn()
        const toolbar = shallow(<Toolbar onRemoveLabel={mockRemoveLabel} />)
        const removeLabelDropdown = toolbar.find('#removeLabelDropdown')

        removeLabelDropdown.simulate('change', { target: { value: 'label' } })

        expect(mockRemoveLabel).toHaveBeenCalledTimes(1)
        expect(mockRemoveLabel).toHaveBeenCalledWith('label')
    })

    it('Toolbar displays correct unread message count when there are 0 unread messages', () => {
        const newState = JSON.parse(JSON.stringify(initialState))
        newState.forEach(element => {
            element.read = true
        });
        const toolbar = shallow(<Toolbar {...getMessageCounts(newState)} />)

        expect(toolbar.find('#unreadMessages').text()).toEqual('0 unread messages')
    })

    it('Toolbar displays correct unread message count when there are more than 1 unread messages', () => {
        const newState = JSON.parse(JSON.stringify(initialState))
        newState.forEach(element => {
            element.read = false
        });
        const toolbar = shallow(<Toolbar {...getMessageCounts(newState)} />)

        expect(toolbar.find('#unreadMessages').text()).toEqual(`${newState.length} unread messages`)
    })

    it('Toolbar displays correct unread message count when there is 1 unread message', () => {
        const newState = JSON.parse(JSON.stringify(initialState))
        newState.forEach(element => {
            element.read = true
        });
        newState[1].read = false
        const toolbar = shallow(<Toolbar {...getMessageCounts(newState)} />)

        expect(toolbar.find('#unreadMessages').text()).toEqual('1 unread message')
    })


    it('Toolbar actions are disabled if no items are selected', () => {
        const newState = JSON.parse(JSON.stringify(initialState))
        newState.forEach(element => {
            delete element.selected
        });
        const toolbar = shallow(<Toolbar {...getMessageCounts(newState)} />)

        const ids = ['#markAsReadButton', '#markAsUnreadButton', '#applyLabelDropdown', '#removeLabelDropdown', '#deleteButton']
        ids.forEach((element) => {
            expect(toolbar.find(element).props().disabled).toBeTruthy()
        })
    })
    it('Toolbar actions are disabled if no items are selected', () => {
        const newState = JSON.parse(JSON.stringify(initialState))
        newState.forEach(element => {
            delete element.selected
        });
        newState[1].selected = true
        const toolbar = shallow(<Toolbar {...getMessageCounts(newState)} />)

        const ids = ['#markAsReadButton', '#markAsUnreadButton', '#applyLabelDropdown', '#removeLabelDropdown', '#deleteButton']
        ids.forEach((element) => {
            expect(toolbar.find(element).props().disabled).toBeFalsy()
        })
    })
})