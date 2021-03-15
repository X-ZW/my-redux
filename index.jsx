import React from 'react';
import {render} from 'react-dom';
import App from './App.jsx';
import Demo from './Demo.jsx';
// import {Provider, connect} from 'react-redux'
import store from './store'
import {Provider,connect} from './reactRedux/index.jsx'

render(<Provider store={store}>
    <Demo></Demo>
</Provider>, document.getElementById('root'))