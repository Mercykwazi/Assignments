import { combineReducers } from 'redux'
import business from "./businessReducer";
import location from "./locationsReducer";

export default combineReducers({
    business,location
});