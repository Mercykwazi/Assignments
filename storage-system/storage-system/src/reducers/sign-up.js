

const initialState = {
    authenticated: false,
    //  errors: {}
}




export default function businessAuth(state = initialState, action) {
    var newState = state
    switch (action.type) {
        case "BUSINESS_AUTHENTICATED":
            newState = { ...state, authenticated: action.value, errors: {} };
            break;
        // case "BUSINESS_AUTHENTICATION_ERROR":
        //     newState = { ...state, errors: action.payload };
        //     break;
        default:
            newState = { ...newState }
            break;
    }
    return newState;
};
