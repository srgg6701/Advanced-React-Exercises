import React, { Component } from 'react'
import { connect } from 'react-redux'
import Service from '../Services/exported'

class Consumer extends Component {
    constructor(props) {
        super(props);
        console.log('see props', this.props);
    }
    render() {
        return (
            <React.Fragment>
                <h4>Consumer:</h4>
                <h1>{this.props.consumerName || this.props.consumerLastName }</h1>
                {this.props.children}
            </React.Fragment>
        )
    }
}

export default connect(null)(Service(Consumer))
