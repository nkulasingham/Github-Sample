import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.scss';

const Results = ({ users, total, query }) => {
  const tiles =
    Array.isArray(users) &&
    users.map(val => (
      <div key={val.login} className="column is-4">
        <Link to={`/users/${val.login}`}>
          <div className={`box ${styles.profileLink}`}>
            <div className="media">
              <div className="media-left">
                <figure className="image is-64x64">
                  <img src={val.avatarUrl} alt="User's Avatar" />
                </figure>
              </div>
              <div className="media-content">
                <div className="content">
                  <p>
                    <strong>{val.login}</strong>
                    <br />
                    <span> {val.repositories && val.repositories.totalCount} total repos </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    ));
  return (
    <div className={styles.container}>
      <h1 className={styles.title}> Gitgazers </h1>
      <p className={styles.totalResults}>
        Showing {users && users.length} out of {total} users for the query &quot;{query}&quot;.
      </p>
      <div className={styles.flexContainer}>
        <Link to="/" className={styles.homeButton}>
          Search Again
        </Link>
      </div>
      <div className="columns is-multiline">{tiles} </div>
    </div>
  );
};

export default Results;
