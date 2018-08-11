import React, { Component } from 'react';
import { connect } from 'react-redux';
// imports actions/index.js objects
import * as actions from 'actions';

class CommentBox extends Component {
    constructor() {
        super();
        this.state = {
            comment: ''
        };
        this.handleTextarea = this.handleTextarea.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        // console.log({actions, this:this});
    }

    handleTextarea(event) {
        return this.setState({ 'comment': event.target.value });
    }

    /**
     * It stores comments. The method saveComment comes from Root (Root.js).
     * It is defined in actions/index.js and is imported to here (see imports above)
     * Note that saveComment gets a property of this via *connect*
     */
    handleSubmit(event) {
        event.preventDefault();
        // ACTION creator; store comment 
        // console.log('handleSubmit', { props: this.props, state: this.state });
        this.props.saveComment(this.state.comment);
        this.setState({ comment: '' });
    }

    componentDidMount() {
        // console.log('this', this);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h4>Hello. Put comment here</h4>
                    <textarea onChange={this.handleTextarea} value={this.state.comment} />
                    <div>
                        <button>Submit it</button>
                    </div>
                </form>
                <button className="btn-fetch-comments" onClick={this.props.fetchComments}>Fetch comments</button>
            </div>
        )
    }
}
/*  connect to actions/index.js
    ---------------------------
    the first argument is used if we have to map store states, i.e., point which
    data we get back to update this.props.
    We don't need it here as it just sends comments regardless of the store state
    the second argument dispateches store (?)
    the explanation is here: https://github.com/reduxjs/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options */
export default connect(null, actions)(CommentBox);