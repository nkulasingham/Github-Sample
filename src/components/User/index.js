import React from 'react';
import { Link } from 'react-router-dom';
import Repository from 'src/components/Repository';
import Profile from 'src/components/Profile';
import styles from './styles.scss';

const User = ({ user, repositories, changeRepositoryView, active }) => {
  const { login } = user;
  const tabs = ['All', 'Sources', 'Forks'];
  return (
    <div className={styles.container}>
      <h1 className={styles.title}> Gitgazers </h1>
      <p className={styles.totalResults}>
        Showing basic information and listing repositories about Github user {login} .
      </p>
      <div className={styles.flexContainer}>
        <Link to="/" className={styles.homeButton}>
          Search Again
        </Link>
      </div>
      <hr />
      <div className="columns is-multiline">
        <div className="column is-4">
          <Profile {...user} styles={styles} />
        </div>

        <div className="column is-8">
          <div className="tabs">
            <ul>
              {tabs.map(tab => (
                <li key={tab}>
                  <span
                    className={`${active === tab.toLowerCase() && styles.isActive} ${styles.tab}`}
                    role="button"
                    tabIndex={0}
                    onKeyPress={() => changeRepositoryView(tab.toLowerCase())}
                    onClick={() => changeRepositoryView(tab.toLowerCase())}>
                    <span>{tab}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
          {(Array.isArray(repositories) &&
            repositories.length > 0 &&
            repositories.map(repository => (
              <Repository key={repository.id} login={login} {...repository} styles={styles} />
            ))) || <p> No repositories found for this user </p>}
        </div>
      </div>
    </div>
  );
};
export default User;
