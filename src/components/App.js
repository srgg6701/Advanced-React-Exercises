import React from 'react'
import Buttons from './Buttons'
import store from '../store'

export default class App extends React.Component {

    constructor(props) {
        super(props)
        
        this.state = {
            count: 0
        }

        store.subscribe(() => {
            this.setState({
                count: store.getState()
            });
        });
    }

    render() {

        return (
            <React.Fragment>
                <div>Hello again!</div>
                <hr />
                Look here: {store.getState()}
                <hr />
                <Buttons />
            </React.Fragment>
        )
    }
}