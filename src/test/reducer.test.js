import reducer from '../redux/reducer'
import initialMessages from '../initialData';
import Actions from '../redux/actions'

describe('reducer tests', () => {
    it('initializes with the correct starting state', () => {
        const expectedState = { messages: initialMessages }
        expect(reducer(undefined, {})).toEqual(expectedState)
    })

    it('when starred star is clicked, updates store with correct star status', () => {
        const initialState = { messages: initialMessages }
        const expectedState = JSON.parse(JSON.stringify(initialState))
        expectedState.messages[0].starred = false

        expect(reducer(initialState, { type: Actions.ClickStarType, payload: 1 })).toEqual(expectedState)
    })

    it('when unstarred star is clicked, updates store with correct star status', () => {
        const initialState = { messages: initialMessages }
        const expectedState = JSON.parse(JSON.stringify(initialState))
        expectedState.messages[3].starred = true

        expect(reducer(initialState, { type: Actions.ClickStarType, payload: 4 })).toEqual(expectedState)
    })

    it('when checkbox is not selected, clicking the checkbox selects the row and updates state with selected', () => {
        const initialState = { messages: initialMessages }
        const expectedState = JSON.parse(JSON.stringify(initialState))
        expectedState.messages[0].selected = true

        expect(reducer(initialState, { type: Actions.ClickCheckboxType, payload: 1 })).toEqual(expectedState)
    })

    it('when checkbox is selected, clicking the checkbox unselects the row and removes the selected property from the message state', () => {
        const initialState = { messages: initialMessages }
        const expectedState = JSON.parse(JSON.stringify(initialState))
        delete expectedState.messages[3].selected

        expect(reducer(initialState, { type: Actions.ClickCheckboxType, payload: 4 })).toEqual(expectedState)
    })
})