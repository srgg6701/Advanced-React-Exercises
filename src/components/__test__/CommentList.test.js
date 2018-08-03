import React from 'react';
import { mount } from 'enzyme';
import CommentList from 'components/CommentList';
import Root from 'Root';

let wrapped;

beforeEach(() => {

    const initialState = {
        comments: [ 'Comment 1', 'Comment 2' ]
    };

    wrapped = mount(
    <Root initialState = { initialState }>
        <CommentList />
    </Root>
    );
});

/* afterEach(() => {
    wrapped.unmount();
}) */

it('creates one LI comment', () => {
    expect(wrapped.find('textarea').length).toEqual(1);
});

/* it('has a button', () => {
    expect(wrapped.find('button').length).toEqual(1);
}); */

/* describe('check form behavior', () => {
    let text;
    beforeEach(() => {
        text = 'A new comment just came!';
        wrapped.find('textarea').simulate('change', {
            target: { value: text }
        });
        wrapped.update();        
    });

    it('allows to write', () => {
        // ACHTUNG! It require to find textarea anytime, storing in the variable doesn't work.
        expect(wrapped.find('textarea').prop('value')).toEqual(text);
    });

    it('leaves form empty', () => {
        wrapped.find('textarea').simulate('submit');
        wrapped.update();
        expect(wrapped.find('textarea').prop('value')).toBeFalsy();
    });
}); */
