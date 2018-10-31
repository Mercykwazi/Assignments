import { combineReducers } from 'redux'
import business from "./businessReducer";
import location from "./locationsReducer";
import unitType from "./unit-type";
import block from "./blockNameReducer";
import viewBusiness from "./viewBusinessReducer"
import viewBlock from "./viewBlockReducer"

export default combineReducers({
    business, location, unitType, block, viewBusiness,viewBlock
});