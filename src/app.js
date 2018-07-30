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
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleButtonClick() {
        this.setState({
            contents: 'handled'
        });
        console.log('Clicked');
    }

    showText() {
        console.log('Which text?');
    }

    handleChange(event) {
        this.setState({ contents: event.target.value });
    }

    render() {
        return (
            <React.Fragment>
                <h1>Hello, boy!</h1>
                <p>It gets funnier and funnier.</p>
                <h4>I am back.</h4>
                <Textarea value={this.state.contents} onChange={this.handleChange} />
                <Button btnClass={'block'} onClick={this.handleButtonClick} />
                <hr />
                <Comments />
            </React.Fragment>
        )
    }
}
{/* <hr />
    <h4>My essay here:</h4>
    <textarea value={this.state.contents} onChange={this.handleChange} />
    <div>State contents: {this.state.contents}</div> */}
