export default function location(state = { id: "", address1: "", address2: "", business_id: "", created_at: "", }, action) {
    var nextState = state;
    switch (action.type) {
        case "ADDRESS1":
            console.log('all', action.value);
            nextState = { ...nextState, address1: action.value }
            break;
        case "ADDRESS2":
            console.log('yes', action.value);

            nextState = { ...nextState, address2: action.value }
            break;
        default:
            nextState = { ...nextState }
            break;
    }
    return nextState;
}