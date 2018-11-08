import React, { Component } from 'react'
import { connect } from 'react-redux'
import serviceConnected from '../Services/connected'

class SimpleConsumerConnected extends Component {
    render() {
        console.log('SimpleConsumer props:', this.props);
        return (
            <fieldset>
                <legend>Wrapped component inside HOC</legend>
                <div>
                    Hi, Dude. Yes, I am simple. Bud good one!
                </div>
                <h5>SimpleConsumer2</h5>
                <fieldset>
                    <legend>this.props.children</legend>
                    <fieldset>{this.props.children}</fieldset>
                </fieldset>
            </fieldset>
        )
    }
}
export default connect(null)(serviceConnected(SimpleConsumerConnected, "I am connected, Dude!"));
