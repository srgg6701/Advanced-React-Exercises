import React, { Component } from 'react'

export default class SimpleConsumer extends Component {
    render() {
        console.log('SimpleConsumer props:', this.props);
        return (
            <fieldset>
                <legend>Wrapped component inside HOC</legend>
                <div>
                    Hi, Dude. Yes, I am simple. Bud good one!
                </div>
                <h5>Children, supposedly, here</h5>
                <p>Consumer name: {this.props.consumerName}</p>
                <hr />
                <fieldset>
                    <legend>this.props.children</legend>
                    <fieldset>{this.props.children}</fieldset>
                </fieldset>
            </fieldset>
        )
    }
}
