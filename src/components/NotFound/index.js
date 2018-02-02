import React from 'react';

import styles from './styles.scss';

const NotFound = props => (
  <div className={styles.container}>
    <h1 className={styles.title}> Gitgazers - 404 </h1>
    <p className={styles.totalResults}>Uh oh, looks like you&apos;ve taken a wrong turn .</p>
    <div className={styles.flexContainer}>
      <button onClick={props.history.goBack} to="/" className={styles.button}>
        Click here to go back
      </button>
    </div>
  </div>
);

export default NotFound;
