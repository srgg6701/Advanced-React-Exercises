import React from 'react'
import { mount } from 'enzyme'
import Root from 'Root'
import moxios from 'moxios'
import App from 'components/App'

let wrapped;

beforeEach(() => {
    moxios.install();
    moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
        status: 200,
        response: [{name: '#Fetch 1'}, {name: '#Fetch 2'}]
    });
    // render the entire app
    wrapped = mount(
        <Root>
            <App />
        </Root>
    );
});

afterEach(() => {
    moxios.uninstall();
});

if ('should fetch a list of comments and display them', () => {
    expect(wrapped.find('ul').length).toBeGreaterThan(0);
});

it('should click on the fetch button, get data from JSON', done => {
    wrapped.find('.btn-fetch-comments').simulate('click');
    moxios.wait(() => {
        wrapped.update();
        expect(wrapped.find('ul li').length).toEqual(2);
        done();
        wrapped.unmount();
    });
});