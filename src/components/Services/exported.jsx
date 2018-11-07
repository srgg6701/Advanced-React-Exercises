import React, { Component } from 'react'

export default (ChildComponent, Text) => {
    class Service extends Component {
        
        componentDidMount() {
            console.log('Have I props? => ', this.props);
        }
        render() {
            return (
                <ChildComponent {...this.props}>
                    {this.props.children}
                </ChildComponent>
            )
        }
    }
    return Service;
}
