import { createStore } from 'redux'
// import * as Redux from 'redux'
import defaultReducer from './reducers/default'

const store = () => {
    //console.log('ReactRedux => ', Redux);
    const store = createStore(defaultReducer);
    return store;
}

export default store;