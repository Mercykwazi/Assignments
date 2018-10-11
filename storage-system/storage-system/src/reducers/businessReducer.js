export default function business(state = { id: "", name: "", contact_name: "", contact_email: "",contact_telephone: "",created_at: ""}, action) {
    var nextState = state;
    switch (action.type) {
        case "NAME":
            nextState = { ...nextState,name:action.value }
            break;
            case "CONTACT-NAME":
            nextState={...nextState, contactName:action.value}
            break;
            case "TELEPHONE_NUMBER":
            nextState={...nextState,telephone:action.value}
            case "EMAIL_ADDRESS":
            nextState={...nextState,email:action.value}
        default:
            nextState = { ...nextState }
            break;
    }
    return { ...nextState };
}