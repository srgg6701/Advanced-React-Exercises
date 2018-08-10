import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
// imports reducers/index.js
import reducers from 'reducers';
// import reducers from 'reducers/comments'

export default ({ children, initialState }) => {
    // an instance of redux store
    // 1. store the state of the entire application
    // 2. initial state
    const store = createStore(reducers, initialState);
    console.log('get state =>', store.getState());
    return (
        <Provider store={store}>{ children }</Provider>
    );
}