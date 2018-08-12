import React from 'react';
import { shallow } from 'enzyme';
import Root from 'Root';
import App from 'components/App';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

let wrapped;

beforeEach(() => {
    wrapped = shallow(
        <Root>
            <App />
        </Root>
    );
});

it('shows the comment box', () => {
    expect(wrapped.find(CommentBox).length).toEqual(1);
});
it('shows the comment list', () => {
    expect(wrapped.find(CommentList).length).toEqual(1);
});