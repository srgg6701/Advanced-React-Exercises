import React, { Suspense } from 'react'
import { Route, Link } from 'react-router-dom'
import setLinksData from './Menu'
import ServiceExported from './Services/exported'
import SimpleConsumer from './Consumer/SimpleConsumer'
import SimpleConsumer2 from './Consumer/SimpleConsumer2'
import SimpleConsumerConnected from './Consumer/SimpleConsumerConnected'
import './App.css'

const BigStory = React.lazy(() => import('./BigStory'));
const Consumer = ServiceExported(SimpleConsumer);
const Consumer2 = ServiceExported(SimpleConsumer2);

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

    getCounted = () => {
        console.log('Yo! They have counted you as well...');
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
                        <BigStory countMe={this.getCounted} />
                    </Suspense>
                }
                <hr/>
                <h4>Services here!</h4>
                <Consumer consumerName="Dude" />
                <Consumer2 consumerLastName="Lebowsky" />
                <h4>SimpleConsumerConnected</h4>
                <SimpleConsumerConnected />
            </React.Fragment>
        )
    }
}