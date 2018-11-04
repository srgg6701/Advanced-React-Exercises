import React from 'react';
import { Route } from "react-router-dom";
import CommentBox from "./CommentBox";
import CommentList from './CommentList';

export default class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div>Hello again!</div>
                <Route path="/box" component={CommentBox} />
                <Route path="/list" component={CommentList} />
            </React.Fragment>
        )
    }
}