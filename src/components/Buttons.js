import React from 'react'
import defaultAction from '../actions/default'

export default class Buttons extends React.Component {
  clickToAct(event) {
    defaultAction(event.target.dataset.action);
  }
  render() {
    return (
      <React.Fragment>
        <button data-action='DECREMENT' onClick={this.clickToAct}>Decrease</button>
          &nbsp;
        <button data-action='INCREMENT' onClick={this.clickToAct}>Increase</button>
      </React.Fragment>
    )
  }
}
