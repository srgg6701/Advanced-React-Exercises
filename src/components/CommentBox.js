import React, { Component } from 'react';
import { connect } from 'react-redux';
// imports actions/index.js objects
import * as actions from 'actions';

class CommentBox extends Component {
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
        // store comes from above, see the chain startinf from Root.
        this.props.saveComment(this.state.comment);
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

export default connect (null, actions)(CommentBox);