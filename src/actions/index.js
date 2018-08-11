import axios from 'axios'
import { SAVE_COMMENT, FETCH_COMMENTS } from 'actions/types'

export function saveComment(comment) {
    return {
        type: SAVE_COMMENT,
        payload: comment
    }
};

export function fetchComments(){
    const response = axios('http://jsonplaceholder.typicode.com/comments');
    return {
        actions: FETCH_COMMENTS,
        payload: response
    }
}