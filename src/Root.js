import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// imports reducers/index.js
import reducers from 'reducers';

export default props => {
    return (
        <Provider store={ createStore(reducers, {}) } >
            { props.children}
        </Provider>
    );
}