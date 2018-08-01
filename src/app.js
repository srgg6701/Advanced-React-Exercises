import React, { Component } from 'react'
import { Textarea } from './components/Textarea/Textarea'
import Button from './components/Button/Button'
import Comments from './components/Comments/Comments'

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            contents: 'Empty',
            submit: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.communicate = this.communicate.bind(this);
    }
    
    handleChange(event) {
        this.setState({ contents: event.target.value });
    }

    handleSubmit(event){
        event.preventDefault();
        this.setState({
            contents: 'handled',
            submit: true
        });
    }

    communicate(message){
        console.log('message=>', message);
    }

    render() {
        return (
            <React.Fragment>
                <h1>Hello, boy!</h1>
                <p>It gets funnier and funnier.</p>
                <h4>I am back.</h4>
                <form onSubmit={this.handleSubmit}>
                    <Textarea goback={this.communicate} submit={this.state.submit} value={this.state.contents} onChange={this.handleChange} />
                    <Button btnClass={'block'} />
                    <hr />
                </form>
                <Comments newComment={this.state.contents} />
            </React.Fragment>
        )
    }
}
