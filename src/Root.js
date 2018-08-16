import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
// import reduxPromise from 'redux-promise'
import async from 'middlewares/async'
import stateValidator from './middlewares/stateValidator'
// imports reducers/index.js
import reducers from 'reducers'

export default ({ children, initialState }) => {
    // add redux debugging tool. https://github.com/zalmoxisus/redux-devtools-extension#usage
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    // an instance of redux store
    // 1. store the state of the entire application
    // 2. initial state
    const store = createStore(  // create store  
                reducers, 
                initialState,
                composeEnhancers(applyMiddleware(async, stateValidator))
            );    
    return (
        <Provider store={ store }>{ 
            children
        }
        </Provider>
    );
}