import React from 'react';
import Tile from 'src/components/Tile';
import { Link } from 'react-router-dom';
import styles from './styles.scss';
import { generate } from 'shortid';

const Results = ({ users, total, query }) => {
  const tiles =
    Array.isArray(users) && users.map(user => <Tile key={generate()} {...user} styles={styles} />);
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
      <hr />
      <div className="columns is-multiline">{tiles} </div>
    </div>
  );
};

export default Results;
