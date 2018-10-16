export default function unitType(state = { name: "", length: "", width: "", height: "",storageName:"" }, action) {
    var newState = state;
    switch (action.type) {
        case "NAME":
            newState = { ...newState, name: action.value }
            break;
        case "LENGTH":
            newState = { ...newState, length: action.value }
            break;
        case "WIDTH":
            newState = { ...newState, width: action.value }
            break;
        case "HEIGHT":
            newState = { ...newState, height: action.value }
            break;
            case "STORAGE_NAME":
            newState={...newState,storageName:action.value}
            break;
        default:
            newState = { ...newState }
            break;
    }
    return newState;
}