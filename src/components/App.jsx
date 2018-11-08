import React from 'react'
import { Route, Link } from 'react-router-dom'
import setLinksData from './Menu'
import './App.css'

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
            </React.Fragment>
        )
    }
}