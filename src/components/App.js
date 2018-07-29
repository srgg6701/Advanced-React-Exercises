import React from 'react';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

export default () => {
    return (
        <React.Fragment>
            <h1>Hello again!</h1>
            <CommentBox />
            <CommentList />
        </React.Fragment>
    );
}