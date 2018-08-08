import React from 'react';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

export default function App () {
    return (
        <React.Fragment>
            <h1>Hello, sailor!</h1>
            <CommentBox />
            <CommentList />
        </React.Fragment>
    );
}