import React from 'react';
import { connect } from 'react-redux';

class CommentList extends React.Component{
    renderComments(){
        return this.props.comments.map(comment => {
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
    return { allcomments: state.comments }
}

export default connect(mapStateToProps)(CommentList)