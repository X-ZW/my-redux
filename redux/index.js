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