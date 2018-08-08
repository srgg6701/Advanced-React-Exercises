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

function mapStateToProps(state, ownProps){
    console.log('mapStateToProps is run...', { state, ownProps });
    return { 
        listedComments: // a prop name
        state.allcomments // a reducer name
    }
}

export default connect(mapStateToProps)(CommentList)