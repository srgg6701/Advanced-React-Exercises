import { SAVE_COMMENT } from './types'

/* export default {
    saveComment: comment => ({
        type: SAVE_COMMENT,
        payload: comment
    })
}; */

export function saveComment(comment) {
    return {
        type: SAVE_COMMENT,
        payload: comment
    }
};