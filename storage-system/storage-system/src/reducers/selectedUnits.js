export default function selectUnitType(state = {  selectUnit: "" }, action) {
    var newState = state;
    switch (action.type) {
        case "SELECT_UNIT":
            newState = { ...newState, selectUnit: action.value }
        default:
            newState = { ...newState }
            break;
    }
    return newState;
}