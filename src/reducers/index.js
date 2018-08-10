import { combineReducers } from 'redux';
import commentsReducer from 'reducers/comments';
import testReducer from 'reducers/precomments';
// return function combination(), which returns Object
export default combineReducers({
    allcomments: commentsReducer, // { allcomments: commentReducer}
    testcomments: testReducer
});

