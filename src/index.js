import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
// import store from '../store'
import { createStore } from 'redux'
import defaultReducer from './reducers/default'
import App from './components/App'

console.log({React, ReactDOM, Provider, defaultReducer});

ReactDOM.render(
	<Provider store={createStore(defaultReducer, {})}>
    	<App />
    </Provider>, 
    document.getElementById('root')
); 
// 