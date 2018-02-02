import React from 'react';
import { Link } from 'react-router-dom';

const Tile = ({ styles, login, repositories, avatarUrl }) => (
  <div key={login} className="column is-4">
    <Link to={`/users/${login}`}>
      <div className={`box ${styles.profileLink}`}>
        <div className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={avatarUrl} alt="User's Avatar" />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{login}</strong>
                <br />
                <span> {repositories && repositories.totalCount} total repos </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  </div>
);

export default Tile;
