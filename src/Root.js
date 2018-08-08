import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
// imports reducers/index.js
import reducers from 'reducers';
// import reducers from 'reducers/comments'

export default ({ children, initialState }) => {
    return (
        <Provider store={ 
            // an instance of redux store
            // 1. store the state of the entire application
            // 2. initial state
            createStore(reducers, initialState)
        }>{ 
            children
        }
        </Provider>
    );
}