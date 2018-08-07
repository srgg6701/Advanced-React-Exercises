import React from 'react'
import Buttons from './Buttons'
// import store from '../store'
import { connect } from 'react-redux'

class App extends React.Component {

    constructor(props) {
        super(props)
        
        this.state = {
            count: 0
        }

        /*store.subscribe(() => {
            this.setState({
                count: store.getState()
            });
        });*/
    }

    render() {

        return (
            <React.Fragment>
                <div>Hello again!</div>
                <hr />
                Look here: {this.props.count}
                <hr />
                <Buttons />
            </React.Fragment>
        )
    }
}

function mapStateToProps(state) {
    return { count: state.count }
}

export default connect(mapStateToProps)(App)