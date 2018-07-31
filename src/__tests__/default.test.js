import React from 'react'
import { shallow } from 'enzyme'
import { mount } from 'enzyme'
import App from '../app'
import Button from '../components/Button/Button'
import Textarea from '../components/Textarea/Textarea'

const handled = 'handled';

describe('Check UI shallow', () => {

    let wrapped;

    beforeEach(() => {
        wrapped = shallow(<App/>);
    });

    it('has a shallow button', () => {
        expect(wrapped.find(Button).length).toEqual(1);
    });
    
    it('has a shallow textarea', () => {
        expect(wrapped.find(Textarea).length).toEqual(1);
    });
    
    it('should clean form', () => {
        wrapped.find(Button).simulate('click');
        wrapped.update();
        expect(wrapped.find(Textarea).prop('value')).toEqual(handled);
    })
    
});

describe('Check UI mount', () => {
    
    let wrapped;

    beforeEach(() => {
        wrapped = mount(<App/>);
    });

    it('has a mount button', () => {
        expect(wrapped.find('button').length).toEqual(1);
    });

    it('has a shallow textarea', () => {
        expect(wrapped.find('textarea').length).toEqual(1);
    });
    
    it('should clean form', () => {
        wrapped.find('button').simulate('click');
        wrapped.update();
        expect(wrapped.find('textarea').prop('value')).toEqual(handled);
    })

})
