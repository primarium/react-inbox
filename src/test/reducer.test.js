import reducer from '../redux/reducer'
import initialState from '../initialData';

describe('reducer tests', () => {
    it('initializes with the correct starting state', () => {
        expect(reducer(undefined, {})).toEqual(initialState)
    })
})