// import { createStore } from 'redux';
import { createStore } from '../redux'
import reducer from '../reducer/index.js'

const store = createStore(reducer)
export default store