import initialState from '../initialData'
import Actions from './actions';

const reducer = (state = { messages: initialState }, action) => {
    switch (action.type) {
        case Actions.ClickStarType:
            return clickStar(state, action)
        case Actions.ClickCheckboxType:
            return clickCheckbox(state, action)
        case Actions.ClickSelectAllType:
            return clickSelectAll(state)
        case Actions.ClickMarkAsReadType:
            return clickMarkRead(state, true)
        case Actions.ClickMarkAsUnreadType:
            return clickMarkRead(state, false)
        default:
            return state;
    }
}

const clickStar = (state, action) => {
    const newState = JSON.parse(JSON.stringify(state))
    const message = newState.messages.find(m => m.id === action.payload)
    message.starred = !message.starred
    return newState
}

const clickCheckbox = (state, action) => {
    const newState = JSON.parse(JSON.stringify(state))
    const message = newState.messages.find(m => m.id === action.payload)
    if (message.selected) {
        delete message.selected
    } else {
        message.selected = true
    }
    return newState
}

const clickSelectAll = (state) => {
    const newState = JSON.parse(JSON.stringify(state))
    let allSelected = true
    for (const message of newState.messages) {
        if (!message.selected) {
            allSelected = false
            message.selected = true
        }
    }
    if (allSelected) {
        for (const message of newState.messages) {
            delete message.selected
        }
    }
    return newState
}

const clickMarkRead = (state, read) => {
    const newState = JSON.parse(JSON.stringify(state))
    for (const message of newState.messages) {
        if (message.selected) {
            message.read = read
        }
    }
    return newState
}

export default reducer;