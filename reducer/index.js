const initState = {
    count: 0
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
        default:
            return {...state}
    }
}

export default reducer