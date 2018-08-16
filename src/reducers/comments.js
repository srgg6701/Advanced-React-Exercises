// SAVE_COMMENT: 'save comment', FETCH_COMMENTS: 'fetch_comments'
import { SAVE_COMMENT, FETCH_COMMENTS } from 'actions/types';
// triggered by store.dispatch, stores a new state contents
export default function(state = [], action) {
    switch (action.type) {
        case SAVE_COMMENT:
            // adds action.payload to state (concatenate)
            return [...state, action.payload, {name:'Dude'}];
        case FETCH_COMMENTS:
            const comments = action.payload.data.map(comment => comment.name);
            return [...state, ...comments];
        default:
            return state;
    }
}