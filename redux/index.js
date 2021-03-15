export function createStore(reducer) {
    let state
    let eventListeners = [] // 事件池
    function dispatch(action) {
        state = reducer(state, action)
        eventListeners.forEach((item) => {
            item && item()
        })
    }
    function getState() {
        return state
    }
    function subscribe(fn) {
        eventListeners.push(fn)
        return (fn) => {
            eventListeners.filter(() => item === fn)
        }
    }
    dispatch({})
    return {
        dispatch,
        getState,
        subscribe,
    }
}

export function combineReducers(obj) {
    return function (state ={}, action) {
        Object.keys(obj).forEach((key) => {
            state[key] = obj[key](state[key], action)
        })
        return state
    }
}


export function applyMiddleware(middle) {
    return function (createStore) {
        return function (reducer) {
            let store = createStore(reducer)
            let middleWare = middle(store)
            let middleDispatch = middleWare(store.dispatch)
            return {
                ...store,
                dispatch: middleDispatch
            }
        }
    }
}

// combineReducers({
//     a: reducer,
//     b: reducer2,
// })
