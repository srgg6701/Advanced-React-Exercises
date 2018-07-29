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
    const text = 'A new comment just came!';
    wrapped.find('textarea').simulate('change', {
        target: { value: text }
    });
    wrapped.update();
    // ACHTUNG! It require to find textarea anytime, storing in the variable doesn't work.
    expect(wrapped.find('textarea').prop('value')).toEqual(text);
});

it ('leaves form empty', () => {
    wrapped.find('textarea').simulate('change', {
        target: { value: 'Some string here' }
    });
    wrapped.update();
    wrapped.find('textarea').simulate('submit');
    wrapped.update();
    expect(wrapped.find('textarea').prop('value')).toBeFalsy();
});