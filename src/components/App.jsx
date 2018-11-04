import React from 'react';
import { Route, Link } from "react-router-dom";
import CommentBox from "./CommentBox";
import CommentList from './CommentList';
import './App.css';

import('./BigStory')
    .then(BigStory => {
        console.log('BigStory', BigStory);
    })
    .catch(err => {
        // Handle failure
    });

const LINKS = [
    ['box', 'Comment box', CommentBox],
    ['list', 'Comment list', CommentList]
];

function setLinksData(callback) {
    return LINKS.map(linkData => callback(linkData));
}

export default class App extends React.Component {
    /* loadComponent = () => {
        import('./BigStory')
            .then(BigStory => {
                console.log('BigStory', BigStory);
            })
            .catch(err => {
                // Handle failure
            });
    } */
    render() {
        return (
            <React.Fragment>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        {setLinksData(linkData => <li key={linkData[0]}><Link to={linkData[0]}>{linkData[1]}</Link></li>)}
                        {/* <li><a href="#" onClick={this.loadComponent}>Big Story</a></li> */}
                    </ul>
                </nav>
                <hr />
                <h3>Hello again!</h3>
                {setLinksData(linkData => <Route key={linkData[0]} path={'/' + linkData[0]} component={linkData[2]} />)}
            </React.Fragment>
        )
    }
}