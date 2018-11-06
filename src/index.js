import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom'
import reducers from './reducers/service'
import App from './components/App.jsx'

const store = createStore(reducers);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter><App /></BrowserRouter> 
    </Provider>,
    document.getElementById('root')
);