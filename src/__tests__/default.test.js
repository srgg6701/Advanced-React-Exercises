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

    it('should check if a button exist', () => {
        expect(wrapped.find(Button).length).toEqual(1);
    });
    
    it('should check if a textarea exist', () => {
        expect(wrapped.find(Textarea).length).toEqual(1);
    });
});

describe('Check form working', () => {
  it('should clear form', () => {
    Button.simulate('click');
  })
  
})
