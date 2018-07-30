import React, { Component } from 'react'
import Textarea from './components/Textarea/Textarea'
import Button from './components/Button/Button'
import Comments from './components/Comments/Comments'

export default class App extends Component {
  render() {
    return (
        <React.Fragment>
            <h1>Hello, boy!</h1>
            <p>I am back.</p>
            <Textarea />
            <Button btnClass={'block'} />
            <hr />
            <Comments />
        </React.Fragment>
    )
  }
}
