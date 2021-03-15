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

export default reducer