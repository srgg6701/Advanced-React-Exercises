import React from 'react'
import { connect } from 'react-redux'
//import actions from '../../actions'
import * as actions from '../../actions'

// ACHTUNG!
// • don't make export here, establish it through connect (look at the end of the file)!
class Textarea extends React.Component {
    constructor(){
        super();
        this.state = {
            comment: '',
            source: 'unknown'
        };
    }
    
    componentWillReceiveProps(nextProps){
        if (this.props.submit !== nextProps.submit && this.props.submit === '') {
            this.props.handlesubmit();
            // console.log('next value', this.props.value);
            this.props.saveComment(this.props.value);
        }
    }

    componentDidMount(){
        // console.log('%cprops', 'color: brown', this.props);
    }

    render(){
        console.log('Textarea props', this.props);
        return (
            <textarea value={this.props.value} onChange={this.props.onChange}
                placeholder="Put your stuff here">
            </textarea>
        );
    }
}
// connect to actions/index.js
// the first argument is used if we have to map store states
// we don't need it here as it just send comments regardless of the store state
// the second argument dispateches store (?)
// the explanation is here: https://github.com/reduxjs/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options 
export default connect(null, actions)(Textarea);