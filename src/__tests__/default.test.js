import React from 'react'
import { shallow } from 'enzyme'
import { mount } from 'enzyme'
import App from '../app'
import Button from '../components/Button/Button'
import Textarea from '../components/Textarea/Textarea'

describe('Check UI', () => {

    let wrapped, mounted;

    beforeEach(() => {
        wrapped = shallow(<App/>);
        mounted = mount(<App/>);
    })

    it('has a shallow button', () => {
        expect(wrapped.find(Button).length).toEqual(1);
    });
    
    it('has a mount button', () => {
        expect(mounted.find('button').length).toEqual(1);
    });

    it('has a shallow textarea', () => {
        expect(wrapped.find(Textarea).length).toEqual(1);
    });
    
    it('should clean form', () => {
        wrapped.find(Button).simulate('click');
        wrapped.update();
        expect(wrapped.find(Textarea).prop('value')).toEqual('handled');
    })
    
});

/* describe('Check behavior', () => {
    it('should clean form', () => {

    })

}) */
