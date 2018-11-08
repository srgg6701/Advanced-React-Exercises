import React from 'react'
import Switch from './'

export default class Toggle extends React.Component {
    state = {
      on: false
    }
    render() {
      return <Switch onClick={ event => {
        this.setState( {
          on: !this.state.on
        } )
        console.log('state:', this.state)
      }} on={this.state.on} />
    }
  }