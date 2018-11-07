import React, { Component } from 'react'
import { connect } from 'react-redux';

export default ChildComponent => {
    class Service extends Component {
        render() {
            return (
                <ChildComponent {...this.props} />
            )
        }
    }
    return Service;
}
