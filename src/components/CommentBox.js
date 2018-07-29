import React, { Component } from 'react';

export default class CommentBox extends Component {
    /* constructor(){
        super();
        this.handleTextarea = this.handleTextarea.bind(this);
    } */
    state = {
        comment: ''
    }
    handleTextarea = event => {
        return this.setState({ 'comment' : event.target.value});
    }
    handleSubmit = event => {
        event.preventDefault();
        this.setState({ comment: '' });
        
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h4>Hello. Put comment here</h4>
                <textarea onChange={this.handleTextarea} value={ this.state.comment } />
                <div>
                    <button>Submit it</button>
                </div>
            </form>
        )
    }
}