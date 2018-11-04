import React, { PureComponent } from 'react';
import styles from './css.css';

export default class CommentBox extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <h4>Comment Box</h4>
        <div className={styles.container}>
          CommentBox comes here
      </div>
      </React.Fragment>
    )
  }
}

