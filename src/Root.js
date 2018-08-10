import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
// returns combination()
// import reducers from 'reducers';
import reducer from 'reducers/comments'

export default ({ children, initialState }) => {
    // an instance of redux store
    // 1. store the state of the entire application
    // 2. initial state
    const store = createStore( 
            // reducers, // () => { allcomments: commentsReducer() }
            reducer,
            initialState
        );
    return (
        <Provider store={store}>{ children }</Provider>
    );
}