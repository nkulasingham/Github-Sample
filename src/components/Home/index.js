import React from 'react';
import styles from './styles.scss';

const Home = ({ username, submitForm, updateUsername }) => (
  <div className={styles.container}>
    <h1 className={styles.title}> Gitgazers </h1>
    <form className={styles.userSearch} onSubmit={submitForm}>
      <div>
        <input
          type="text"
          placeholder="Search for a user"
          value={username}
          onChange={updateUsername} />
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
);

export default Home;
