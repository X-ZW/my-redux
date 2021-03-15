const initState = {
    count: 0,
    color: `rgb(0,0,0)`
}

function reducer(state = initState, action) {
    switch (action.type) {
        case 'increment':
            return {
                ...state,
                count: state.count + action.count
            }
        case 'decrement':
            return {
                ...state,
                count: state.count - action.count
            }
        case 'changeColor':
            return {
                ...state,
                color: action.color
            }
        default:
            return { ...state }
    }
}

function reducer2(state = {test: 1}, action) {
    switch (action.type) {
        case 'add':
            return {
                ...state,
                count: state.count + action.count
            }
        default:
            return { ...state }
    }
}

export { reducer, reducer2 }