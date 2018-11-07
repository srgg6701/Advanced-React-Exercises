import React, { Component } from 'react'

export default class SimpleConsumer extends Component {
    render() {
        console.log('SimpleConsumer props:', this.props);
        return (
            <React.Fragment>
                <h4>Simple Consumer</h4>
                <div>
                    Hi, Dude. Yes, I am simple. Bud good one!
                </div>
                <h5>Children, supposedly, here</h5>
                <p>Consumer name: { this.props.consumerName }</p>
                <hr/>
                { this.props.children }
            </React.Fragment>
        )
    }
}
