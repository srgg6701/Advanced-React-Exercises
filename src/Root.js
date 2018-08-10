import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
// imports reducers/index.js
// returns combination()
import reducers from 'reducers';
// import reducers from 'reducers/comments'

export default ({ children, initialState }) => {
    // an instance of redux store
    // 1. store the state of the entire application
    // 2. initial state
    const store = createStore( 
            reducers, // () => { allcomments: commentsReducer() }
            initialState
        );
    console.log('store=>', store);
    return (
        <Provider store={store}>{ children }</Provider>
    );
}