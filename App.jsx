import React, {useEffect, useState} from 'react';
import store from './store';
import redux from 'redux'

const App = props => {
    const [rerender, rerenderFn] = useState()
    const state = store.getState();
    const {dispatch, subscribe} = store;
    const increment = () => {
        dispatch({type: 'increment', count: 5})
    }
    useEffect(() => {
        subscribe(() => {
            rerenderFn(store.getState().count)
            console.log(store.getState())
        })
        console.log(redux);
    }, [])
    return (
        <div>
            <h1>{state.count}</h1>
            <button onClick={e=>increment()}>+</button>
            <button>-</button>
        </div>
    )
}

export default App