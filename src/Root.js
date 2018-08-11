import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// imports reducers/index.js
import reducers from 'reducers';

export default ({ children, initialState }) => {
    return (
        <Provider store={ 
            // an instance of redux store
            // 1. store the state of the entire application
            // 2. initial state
            createStore(  // create store  
                reducers, 
                initialState,
                // redux debugging tool. https://github.com/zalmoxisus/redux-devtools-extension#usage
                window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
            )
        }>{ 
            children
        }
        </Provider>
    );
}