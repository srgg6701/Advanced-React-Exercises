import React from 'react'
import { shallow } from 'enzyme'
import App from '../app'
import Button from '../components/Button/Button'
import Textarea from '../components/Textarea/Textarea'

describe('Check UI', () => {

    let wrapped;

    beforeEach(() => {
        wrapped = shallow(<App/>);
    })

    it('Check a button', () => {
        expect(wrapped.find(Button).length).toEqual(1);
    });
    
    it('Check a textarea', () => {
        expect(wrapped.find(Textarea).length).toEqual(1);
    });
});