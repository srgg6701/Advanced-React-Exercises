import React, { Suspense } from 'react'
import { Route, Link } from 'react-router-dom'
import CommentBox from "./CommentBox"
import CommentList from './CommentList'
import './App.css'

const BigStory = React.lazy(() => import('./BigStory'));

const LINKS = [
    ['box', 'Comment box', CommentBox],
    ['list', 'Comment list', CommentList]
];

function setLinksData(callback) {
    return LINKS.map(linkData => callback(linkData));
}

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }
    getLazyContents = () => {
        this.setState({
            story: !this.state.story
        });
    }
    render() {
        return (
            <React.Fragment>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        {setLinksData(linkData => <li key={linkData[0]}><Link to={linkData[0]}>{linkData[1]}</Link></li>)}
                    </ul>
                </nav>
                <hr />
                <h3>Hello again!</h3>
                {setLinksData(linkData => <Route key={linkData[0]} path={'/' + linkData[0]} component={linkData[2]} />)}
                <hr />
                <button onClick={this.getLazyContents}>{ this.state.story ? "Got LAZY!" : "Get lazy..." }</button>
                {this.state.story &&
                    <Suspense fallback={<div>Loading...</div>}>
                        <BigStory />
                    </Suspense>
                }
            </React.Fragment>
        )
    }
}