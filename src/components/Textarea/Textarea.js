import React from 'react'

export default class Textarea extends React.Component {
    render(){
        return (
            <textarea 
                placeholder="Put your stuff here" 
                value={this.props.textareaValue}>
            </textarea>
        );
    }
}