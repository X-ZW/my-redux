// import { createStore } from 'redux';
import { createStore,combineReducers } from '../redux'
import {reducer,reducer2} from '../reducer/index.js'

const store = createStore(combineReducers({
    a: reducer,
    b: reducer2
}))
export default store