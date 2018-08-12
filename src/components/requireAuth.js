import React, { Component } from 'react'
import { connect } from 'react-redux'

export default ChildComponent => {
    // pass other component
    class ComposedComponent extends Component {

        componentDidMount() {
            this.shouldNavigateAway();
        }

        componentDidUpdate() {
            this.shouldNavigateAway();
        }

        shouldNavigateAway() {
            if (!this.props.auth) {
                console.log('%cTime to say goodbye!', 'color: rebeccapurple');
                this.props.history.push('/');
            } else {
                console.log('%cHOME, sweet HOME...', 'color: green');
            }
        }

        render() {
            return <ChildComponent { ...this.props } />
        }
    }
    
    function mapStateToProps(state) {
        return { auth: state.auth }
    }

    return connect (mapStateToProps)(ComposedComponent);
}
