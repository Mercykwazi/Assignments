import { combineReducers } from 'redux'
import business from "./businessReducer";
import location from "./locationsReducer";
import unitType from "./unit-type"

export default combineReducers({
    business,location,unitType
});