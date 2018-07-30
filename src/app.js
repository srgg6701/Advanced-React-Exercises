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

    showText(){
        console.log('Which text?');
    }

    handleChange(event){
        this.setState({contents: event.target.value});
    }

    render() {
        return (
            <React.Fragment>
                <h1>Hello, boy!</h1>
                <p>I am back.</p>
                <Textarea value={this.state.contents}  onChange={this.handleChange} />
                <hr/>
                <h4>Essay:</h4>
                <textarea value={this.state.contents} onChange={this.handleChange} />
                <div>State contents: {this.state.contents}</div>
                <Button btnClass={'block'} onClick={this.handleButtonClick} />
                <hr />
                <Comments />
            </React.Fragment>
        )
    }
}
