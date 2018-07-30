import React from 'react'
import ReactDOM from 'react-dom'
import Textarea from './components/Textarea/Textarea'
import Button from './components/Button/Button'

const Element = () => {
    return (
        <React.Fragment>
            <h1>Hello, boy!</h1>
            <p>I am back.</p>
            <Textarea />
            <Button btnClass={'block'} />
        </React.Fragment>
    );
}

ReactDOM.render(
    <Element />, document.getElementById('root')
);