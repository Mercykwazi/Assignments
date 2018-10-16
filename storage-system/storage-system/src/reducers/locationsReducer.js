export default function location(state = {  address1: "", address2: "",blockName: "", created_at: "", }, action) {
    var nextState = state;
    switch (action.type) {
        case "ADDRESS1":
            console.log('all', action.value);
            nextState = { ...nextState, address1: action.value }
            break;
        case "ADDRESS2":
            nextState = { ...nextState, address2: action.value }
            break;
            case "BLOCK_NAME":
            nextState={...nextState,blockName:action.value}
        default:
            nextState = { ...nextState }
            break;
    }
    return nextState;
}