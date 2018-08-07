import React from 'react'
// import Redux from 'react-redux'
// import defaultReducer from '../reducers/default'
import defaultAction from '../actions/default'

const Buttons = () => {
  const clickToAct = (action) => {
    console.log('Button clicked!', action);
    defaultAction(action);
  }
  return (
    <React.Fragment>
      <button onClick={ clickToAct('DECREMENT') }>Decrease</button>
        &nbsp;
      <button onClick={ clickToAct('INCREMENT') }>Increase</button>
    </React.Fragment>
  )
}

export default Buttons
