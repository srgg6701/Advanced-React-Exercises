import React, { Component } from 'react'
import Textarea from './components/Textarea/Textarea'
import Button from './components/Button/Button'
import Comments from './components/Comments/Comments'

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            formValue: 'Initial value here'
        };
        this.clearForm = this.clearForm.bind(this);
    }
    
    clearForm(){
        this.setState({
            formValue:'Hello again!'
        });
        
        console.log('formValue', {formValue:this.state.formValue, state: this.state, this:this});
    }

    render() {
        return (
            <React.Fragment>
                <h1>Hello, boy!</h1>
                <p>I am back.</p>
                <Textarea value={this.state.formValue}/>
                <Button btnClass={'block'} onClick={this.clearForm} />
                <hr />
                <Comments />
            </React.Fragment>
        )
    }
}
