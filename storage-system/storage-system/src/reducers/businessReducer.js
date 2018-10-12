export default function business(state = { id: "", name: "", contact_name: "", contactEmail: "", contactTelephone: "", created_at: "" }, action) {
    var nextState = state;
    switch (action.type) {
        case "NAME":
            nextState = { ...nextState, name: action.value }
            break;
        case "CONTACT_NAME":
            nextState = { ...nextState, contact_name: action.value }
            break;
        case "TELEPHONE_NUMBER":
            console.log("what is the number", action.value);
            nextState = { ...nextState, contactTelephone: action.value }
            break;
            case "EMAIL_ADDRESS":
            console.log("what is the email", action.value);
            nextState = { ...nextState, contactEmail: action.value }
            break;
        default:
            nextState = { ...nextState }
            break;

    }
    return nextState;
}