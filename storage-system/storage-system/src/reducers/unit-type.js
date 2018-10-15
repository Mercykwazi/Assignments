export default function unitType(state = { name: "", length: "", width: "", height: "" }, action) {
    var newState = state;
    switch (action.type) {
        case "NAME":
        console.log('yes',action.value);
        
            newState = { ...newState, name: action.value }
            break;
        case "LENGTH":
            newState = { ...newState, length: action.value }
            break;
            case "WIDTH":
            newState={...newState,width:action.value}
            break;
            case "HEIGHT":
            newState={...newState,height:action.value}
        default:
            newState = { ...newState }
            break;
    }
    return newState;
}