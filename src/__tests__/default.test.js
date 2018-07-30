import React from 'react'
import { shallow } from 'enzyme'
import App from '../app'
import Textarea from '../components/Textarea/Textarea'
import Button from '../components/Button/Button'

it('Just check it', () => {
    const wrapped = shallow(<App/>);
    expect(wrapped.find(Button).length).toEqual(1);
});