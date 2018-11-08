import React, { Component } from 'react'
import { connect } from 'react-redux';

export default (ChildComponent, Text) => {
    class Service extends Component {

        componentDidMount() {
            console.log('Have I props? => ', this.props);
        }
        render() {
            return (
                <ChildComponent {...this.props}>
                        { Text }
                </ChildComponent>
            )
        }
    }

    function mapStateToProps(state){
        return ({
            data: state.service
        });
    }

    return connect(mapStateToProps)(Service);
}
