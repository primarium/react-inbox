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
        case Actions.ClickDeleteType:
            return clickDelete(state)
        case Actions.ClickApplyLabelType:
            return clickApplyLabel(state, action)
        case Actions.ClickRemoveLabelType:
            return clickRemoveLabel(state, action)
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

const clickDelete = (state) => {
    const newState = JSON.parse(JSON.stringify(state))
    for (let i = newState.messages.length - 1; i >= 0; i--) {
        if (newState.messages[i].selected) {
            newState.messages.splice(i, 1)
        }
    }
    return newState
}

const clickApplyLabel = (state, action) => {
    const newState = JSON.parse(JSON.stringify(state))
    for (const message of newState.messages) {
        if (message.selected && !message.labels.includes(action.payload)) {
            message.labels.push(action.payload)
        }
    }
    return newState
}


const clickRemoveLabel = (state, action) => {
    const newState = JSON.parse(JSON.stringify(state))
    for (const message of newState.messages) {
        if (message.selected) {
            const labelIndex = message.labels.indexOf(action.payload)
            if (labelIndex > -1) {
                message.labels.splice(labelIndex, 1)
            }
        }
    }
    return newState
}
export default reducer;