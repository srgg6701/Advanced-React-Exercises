import React, { Component } from 'react';
import { connect } from 'react-redux';
// imports actions/index.js objects
// actions.saveComment
// import * as actions from 'actions';
const SAVE_COMMENT = 'save comment';

// is not calld initially
const actions = {
    saveComment(comment) {
        console.log('%cSave Comment is run!', 'color:orangered');
        return {
            type: SAVE_COMMENT,
            payload: comment
        }
    }
}

class CommentBox extends Component {
    constructor(){
        super();
        this.state = {
            comment: ''
        };
        this.handleTextarea = this.handleTextarea.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        // console.log('%ccalling constructor in CommentBox. Actions => ', 'background: lightyellow', actions);
    }
    
    handleTextarea(event) {
        return this.setState({ 'comment' : event.target.value});
    }

    /**
     * It stores comments. The method saveComment comes from Root (Root.js).
     * It is defined in actions/index.js and is imported to here (see imports above)
     * Note that saveComment gets a property of this via *connect*
     */
    handleSubmit(event) {
        event.preventDefault();
        // ACTION creator; store comment 
        console.log('handleSubmit', {props:this.props,state:this.state,actions});
        // calls the action creator in actions/index
        // in the same time, that function is considered as dispatch
        // because it is passed into Provider through connect
        // returns Object (type, payload).
        // so, this.props is equal actions here
        this.props.saveComment(this.state.comment);
        this.setState({ comment: '' });
    }

    componentDidMount(){
        // console.log('this', this);
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
// connect to actions/index.js
// the first argument is used if we have to map store states
// we don't need it here as it just sends comments regardless of the store state
// the second argument dispateches store (?)
// the explanation is here: https://github.com/reduxjs/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options 
export default connect (null, actions)(CommentBox);