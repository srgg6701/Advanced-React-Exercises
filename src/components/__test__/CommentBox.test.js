import React from 'react';
import { mount } from 'enzyme';
import CommentBox from 'components/CommentBox';

let wrapped;

beforeEach(() => {
    wrapped = mount(<CommentBox />);
});

afterEach(() => {
    wrapped.unmount();
})

it('has a textarea', () => {
    expect(wrapped.find('textarea').length).toEqual(1);
});

it('has a button', () => {
    expect(wrapped.find('button').length).toEqual(1);
});

it('allows to write', () => {
    const txtArea = wrapped.find('textarea');
    txtArea.simulate('change', {
        target: { value: 'A new comment just came!' }
    });
});