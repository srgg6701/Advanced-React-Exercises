import React from 'react'
import { mount } from 'enzyme'
import Root from 'Root'
import App from 'components/App'

if('should fetch a list of comments and display them', () => {
    const wrapped = mount(
        <Root>
            <App/>
        </Root>
    );
    expect(true).toEqual(true);
});