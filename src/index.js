import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers'
import App from './app'

ReactDOM.render(
    // pass a list of reducers and an initial state for a redux store
    <Provider store={createStore(reducers, {})}>
        <App />
    </Provider>, 
    document.getElementById('root')
);