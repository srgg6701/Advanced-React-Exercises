import React, { Component } from 'react'

export default class SimpleConsumer2 extends Component {
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
                    <hr/>
                    <p>Last name: {this.props.consumerLastName}</p>
                </fieldset>
            </fieldset>
        )
    }
}
