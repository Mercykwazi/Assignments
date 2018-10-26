import { combineReducers } from 'redux'
import business from "./businessReducer";
import location from "./locationsReducer";
import unitType from "./unit-type";
import block from "./blockNameReducer";
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
    business, location, unitType,block,  form: formReducer
});