import React, { Component } from 'react'

export default (ChildComponent, Text) => {
    class Service extends Component {

        componentDidMount() {
            console.log('Have I props? => ', this.props);
        }
        render() {
            return (
                <fieldset>
                    <legend><h3>HOC, exported</h3></legend>
                    <h5>Child component:</h5>
                    <ChildComponent {...this.props}>
                        <p>Hardcoded ChildComponent content comes here... just some (any!) text...</p>
                    </ChildComponent>
                </fieldset>
            )
        }
    }
    return Service;
}
