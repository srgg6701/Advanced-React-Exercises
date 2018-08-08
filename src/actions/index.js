import { SAVE_COMMENT } from 'actions/types';

export function saveComment(comment) {
    console.log('%cSave Comment is run now!', 'color: orangered');
    return {
        type: SAVE_COMMENT,
        payload: comment
    }
};