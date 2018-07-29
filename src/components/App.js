import React from 'react';
import CommentBox from './CommentBox';
import CommentList from './CommentList';

export default () => {
    return (
        <React.Fragment>
            <h1>Hello again!</h1>
            <CommentBox />
            <CommentList />
        </React.Fragment>
    );
}