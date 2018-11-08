import React from 'react'
import { Route, Link } from 'react-router-dom'
import setLinksData from './Menu'
import './App.css'

const Parent = () => (<div>Parent here</div>)
const Child = props => (<div>Child here, text: {props.text}</div>)

export default class App extends React.Component {
    
    render() {
        return (
            <React.Fragment>
                <nav>
                    <ul>
                        {setLinksData(linkData => <li key={linkData[0]}><Link to={linkData[0]}>{linkData[1]}</Link></li>)}
                    </ul>
                </nav>
                <hr />
                {setLinksData(linkData => <Route key={linkData[0]} exact={linkData[3]} path={'/' + linkData[0]} component={linkData[2]} />)}
                <Parent>
                    <Child text="Child #1" />
                    <Child text="Child #2" />
                    <Child text="Child #3" />
                </Parent>
            </React.Fragment>
        )
    }
}