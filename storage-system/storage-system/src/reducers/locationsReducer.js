export default function location(state = {
    id: "",
    address1: "",
    address2: "",
    business_id: "",
    created_at: "",
}, action) {
    var nextState = state;
    switch (action.payload) {
        case "TEST":
            nextState = { ...nextState }
            break;
        default:
            nextState = { ...nextState }
            break;
    }
    return { ...nextState };

}