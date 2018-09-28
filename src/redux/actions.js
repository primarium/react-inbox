export default class Actions {
    static get ClickStarType() { return 1 }
    static get ClickCheckboxType() { return 2 }
    static get ClickSelectAllType() { return 3 }
    static get ClickMarkAsReadType() { return 4 }
    static get ClickMarkAsUnreadType() { return 5 }
    static get ClickDeleteType() { return 6 }

    static clickStar(id) {
        return { type: Actions.ClickStarType, payload: id }
    }

    static clickCheckbox(id) {
        return { type: Actions.ClickCheckboxType, payload: id }
    }

    static clickSelectAll() {
        return { type: Actions.ClickSelectAllType }
    }

    static clickMarkAsRead() {
        return { type: Actions.ClickMarkAsReadType }
    }

    static clickMarkAsUnread() {
        return { type: Actions.ClickMarkAsUnreadType }
    }

    static clickDelete() {
        return { type: Actions.ClickDeleteType }
    }
}