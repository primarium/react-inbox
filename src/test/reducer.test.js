import reducer from '../redux/reducer'
import initialMessages from '../initialData';
import Actions from '../redux/actions'

describe('reducer tests', () => {
    let initialState
    let expectedState
    beforeEach(() => {
        initialState = JSON.parse(JSON.stringify({ messages: initialMessages }))
        expectedState = JSON.parse(JSON.stringify(initialState))
    })

    it('initializes with the correct starting state', () => {
        expect(reducer(undefined, {})).toEqual(expectedState)
    })

    it('when starred star is clicked, updates store with correct star status', () => {
        expectedState.messages[0].starred = false

        expect(reducer(initialState, { type: Actions.ClickStarType, payload: 1 })).toEqual(expectedState)
    })

    it('when unstarred star is clicked, updates store with correct star status', () => {
        expectedState.messages[3].starred = true

        expect(reducer(initialState, { type: Actions.ClickStarType, payload: 4 })).toEqual(expectedState)
    })

    it('when checkbox is not selected, clicking the checkbox selects the row and updates state with selected', () => {
        expectedState.messages[0].selected = true

        expect(reducer(initialState, { type: Actions.ClickCheckboxType, payload: 1 })).toEqual(expectedState)
    })

    it('when checkbox is selected, clicking the checkbox unselects the row and removes the selected property from the message state', () => {
        delete expectedState.messages[3].selected

        expect(reducer(initialState, { type: Actions.ClickCheckboxType, payload: 4 })).toEqual(expectedState)
    })

    it('when no messages are selected, select all selects all messages', () => {
        initialState.messages.forEach(element => {
            delete element.selected
        });
        expectedState.messages.forEach(element => {
            element.selected = true
        });

        expect(reducer(initialState, { type: Actions.ClickSelectAllType })).toEqual(expectedState)
    })

    it('when some messages are selected, select all selects all messages', () => {
        expectedState.messages.forEach(element => {
            element.selected = true
        });

        expect(reducer(initialState, { type: Actions.ClickSelectAllType })).toEqual(expectedState)
    })

    it('when all messages are selected, select all unselects all messages', () => {
        initialState.messages.forEach(element => {
            element.selected = true
        });
        expectedState.messages.forEach(element => {
            delete element.selected
        });

        expect(reducer(initialState, { type: Actions.ClickSelectAllType })).toEqual(expectedState)
    })

    it('when mark as read is clicked, all selected items are marked as read', () => {
        expectedState.messages.forEach(element => {
            if (element.selected) {
                element.read = true
            }
        });

        expect(reducer(initialState, { type: Actions.ClickMarkAsReadType })).toEqual(expectedState)
    })

    it('when mark as unread is clicked, all selected items are marked as unread', () => {
        expectedState.messages.forEach(element => {
            if (element.selected) {
                element.read = false
            }
        });

        expect(reducer(initialState, { type: Actions.ClickMarkAsUnreadType })).toEqual(expectedState)
    })

    it('deletes the selected messages when delete is clicked', () => {
        for (let i = expectedState.messages.length - 1; i >= 0; i--) {
            if (expectedState.messages[i].selected) {
                expectedState.messages.splice(i, 1)
            }
        }

        expect(reducer(initialState, { type: Actions.ClickDeleteType })).toEqual(expectedState)
    })

    it('when a label is applied, all selected items will have the label (once)', () => {
        initialState.messages[1].labels.push('label')
        initialState.messages[4].selected = true
        expectedState.messages[4].selected = true
        expectedState.messages.forEach(element => {
            if (element.selected) {
                element.labels.push('label')
            }
        });

        expect(reducer(initialState, { type: Actions.ClickApplyLabelType, payload: 'label' })).toEqual(expectedState)
    })

    it('when a label is removed, all selected items will no longer have the label', () => {
        initialState.messages.forEach(element => {
            if (element.selected) {
                element.labels.push('label')
            }
        })
        initialState.messages[4].selected = true
        expectedState.messages[4].selected = true

        expect(reducer(initialState, { type: Actions.ClickRemoveLabelType, payload: 'label' })).toEqual(expectedState)
    })
})