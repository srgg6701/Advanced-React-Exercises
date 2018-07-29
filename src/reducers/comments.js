// SAVE_COMMENT: 'save comment'
import { SAVE_COMMENT } from 'actions/types';
console.log('SAVE_COMMENT', SAVE_COMMENT);
export default function(state = [], action) {
    switch (action.type) {
        case SAVE_COMMENT:
            return [...state, action.payload]
        default:
            return state;
    }
}