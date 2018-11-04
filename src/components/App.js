import React from 'react';
import { Route, Link } from "react-router-dom";
import CommentBox from "./CommentBox/";
import CommentList from './CommentList/';

const LINKS = [
    ['box', 'Comment box', CommentBox],
    ['list', 'Comment list', CommentList]
];

function setLinksData(callback) {
    return LINKS.map(linkData => callback(linkData));
}

export default class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <nav>
                    <Link to="/">Home</Link>
                    {setLinksData(linkData => <Link to={linkData[0]}>{linkData[1]}</Link>)}
                </nav>
                <hr />
                <h3>Hello again!</h3>
                {setLinksData(linkData => <Route path={'/'+linkData[0]} component={linkData[2]} />)}
            </React.Fragment>
        )
    }
}