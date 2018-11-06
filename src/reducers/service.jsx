import { combineReducers } from 'redux'

function service (state=[], action){
    switch (action.type) {
        /* case value:   
            break; */
        default:
            return state;
    }
}

export default combineReducers({
    service: service
})