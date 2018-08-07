// SAVE_COMMENT: 'save comment'
import { SAVE_COMMENT } from 'actions/types';
// triggered by store.dispatch, stores a new state contents
export default function(state = [], action) {
    switch (action.type) {
        case SAVE_COMMENT:
            // adds action.payload to state (concatenate)
            return [...state, action.payload];
        default:
            return state;
    }
}