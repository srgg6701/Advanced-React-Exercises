import axios from 'axios'
import { SAVE_COMMENT, FETCH_COMMENTS, CHANGE_AUTH } from 'actions/types'

export function saveComment(comment) {
    return {
        type: SAVE_COMMENT,
        payload: comment
    }
};

export function changeAuth(isLoggedIn){
    return {
        type: CHANGE_AUTH,
        payload: isLoggedIn
    }
};

export function fetchComments(){
    const response = axios('http://jsonplaceholder.typicode.com/comments');
    return {
        type: FETCH_COMMENTS,
        payload: response
    }
};