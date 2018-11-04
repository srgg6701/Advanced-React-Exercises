import React, { Component } from 'react';
import styles from './css.css';
console.log('styles', styles);
export default class CommentList extends Component {
    render() {
        return (
            <React.Fragment>
                <h4>Comment List</h4>
                <div className={styles.container}>
                    Comment List comes here
                </div>
            </React.Fragment>
        )
    }
}
