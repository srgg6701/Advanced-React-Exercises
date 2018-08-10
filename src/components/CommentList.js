import React from 'react';
import { connect } from 'react-redux';

class CommentList extends React.Component{
    renderComments(){
        return this.props.listedComments.map(comment => {
            return <li key={comment}>{comment}</li>
        });
    }
    render (){
        return (
            <React.Fragment>
                <ul>
                    { this.renderComments() }
                </ul>
            </React.Fragment>
        )
    }
} 

/* 
    The mapStateToProps function's first argument is the entire Redux store’s state and it returns an object to be passed as props. It is often called a selector. Use reselect to efficiently compose selectors and compute derived data.
*/
function mapStateToProps(state, ownProps){
    console.log('mapStateToProps is run...', { state, ownProps });
    return { 
        listedComments: // a prop name
        state.allcomments // a reducer name, combineReducers.allcomments
    }
}

export default connect(mapStateToProps)(CommentList)