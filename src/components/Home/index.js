import React from 'react';
import s from './styles.scss';

const Home = ({ stylesProps, username, submitForm, updateUsername }) => {
  const styles = stylesProps || s;
  return (
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
};

export default Home;
