import React from 'react'
//import defaultAction from '../actions/default'
import { connect } from 'react-redux'

class Buttons extends React.Component {
  /*clickToAct(event) {
    // defaultAction(event.target.dataset.action);
    type: event.target.datase
  }*/

  render() {
    return (
      <React.Fragment>
        <button data-action='DECREMENT' onClick={clickToAct}>Decrease</button>
          &nbsp;
        <button data-action='INCREMENT' onClick={clickToAct}>Increase</button>
      </React.Fragment>
    )
  }
}

function clickToAct(event) {
    console.log('clickToAct =>', event);
    if (event && event.target) {
      return { type: event.target.dataset.action };
    }
    return {};
}

export default connect(null, clickToAct)(Buttons)
