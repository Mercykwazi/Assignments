import { createStore } from 'redux'
import business from '../reducers/index'

const store=createStore(business)
export default store;