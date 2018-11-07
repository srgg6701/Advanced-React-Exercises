import React, { Component } from 'react'

export default (ChildComponent, Text) => {
    class Service extends Component {
        
        componentDidMount() {
            console.log('Have I props? => ', this.props);
        }
        render() {
            return (
                <ChildComponent {...this.props}>
                    <h5>Hardcoded ChildComponent content here</h5>
                </ChildComponent>
            )
        }
    }
    return Service;
}
