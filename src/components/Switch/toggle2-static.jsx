// 1. React.Children.map: https://reactjs.org/docs/react-api.html#reactchildrenmap
// 2. React.cloneElement: https://reactjs.org/docs/react-api.html#cloneelement
import React from 'react'
import Switch from '.'

class Toggle extends React.Component {

  static On = props => props.state && <p>The button is on</p>
  static Off = props => !props.state && <p>The button is off</p>
  static Button = prop => (
    <button onClick={prop.onClick}>Switch state</button>
  )
  render() {
    return React.Children.map(this.props.children, element => (
      React.cloneElement(element,
        element.props.onClick
          ? { onClick: this.props.fn }
          : { state: this.props.state }
      )
    ))
  }
}

export default class extends React.Component {
  state = {
    on: false
  }
  switchState = () => {
    this.setState({
      on: !this.state.on
    })
  }
  render() {
    return (
      <React.Fragment>
        <Switch onClick={this.switchState} on={this.state.on} />
        <hr />
        <Toggle fn={this.switchState} state={this.state.on}>
          <Toggle.On on />
          <Toggle.Off off />
          <Toggle.Button onClick />
        </Toggle>
      </React.Fragment>)
  }
}