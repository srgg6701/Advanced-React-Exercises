import React, { Component } from 'react'
import Textarea from './components/Textarea/Textarea'
import Button from './components/Button/Button'
import Comments from './components/Comments/Comments'

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            contents: 'Empty'
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {
        this.setState({ contents: event.target.value });
    }

    handleSubmit(event){
        event.preventDefault();
        this.setState({
            contents: 'handled'
        });
    }

    render() {
        return (
            <React.Fragment>
                <h1>Hello, boy!</h1>
                <p>It gets funnier and funnier.</p>
                <h4>I am back.</h4>
                <form onSubmit={this.handleSubmit}>
                    <Textarea value={this.state.contents} onChange={this.handleChange} />
                    <Button btnClass={'block'} />
                    <hr />
                </form>
                <Comments />
            </React.Fragment>
        )
    }
}
