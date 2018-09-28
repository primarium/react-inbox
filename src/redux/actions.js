export default class Actions {
    static get ClickStarType() { return 1 }
    static get ClickCheckboxType() { return 2 }

    static clickStar(id) {
        return { type: Actions.ClickStarType, payload: id }
    }

    static clickCheckbox(id) {
        return { type: Actions.ClickCheckboxType, payload: id }
    }
}