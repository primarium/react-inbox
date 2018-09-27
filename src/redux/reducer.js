import initialState from '../initialData'

const reducer = (state = { messages: initialState }, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default reducer;