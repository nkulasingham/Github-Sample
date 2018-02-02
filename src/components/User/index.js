import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.scss';

const User = ({ user }) => {
  const { login, avatarUrl, name, bio, followers, following, repositories } = user;
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
      <div className="columns is-multiline">
        <div className="column is-4">
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
                    <span> {name} </span>
                    <br />
                    {/* <span> {val. repositories && val.repositories.totalCount} total repos </span> */}
                  </p>
                </div>
              </div>
            </div>
            <hr />
            <div>
              <strong> Bio: </strong> {bio}
              <hr />
              <strong> {following.totalCount} Following </strong>
              <br />
              <strong> {followers.totalCount} Followers </strong>
              <br />
              <strong> {repositories.totalCount} Repositories </strong>
            </div>
          </div>
        </div>

        <div className="column is-8">
          <div className="tabs">
            <ul>
              <li className="is-active">
                <a>
                  <span className="icon is-small">
                    <i className="fa fa-github" />
                  </span>
                  <span>All</span>
                </a>
              </li>
              <li>
                <a>
                  <span className="icon is-small">
                    <i className="fa fa-code" />
                  </span>
                  <span>Sources</span>
                </a>
              </li>
              <li>
                <a>
                  <span className="icon is-small">
                    <i className="fa fa-code-fork" />
                  </span>
                  <span>Forks</span>
                </a>
              </li>
            </ul>
          </div>
          {repositories.nodes.map(val => (
            <a href={`https://github.com/${login}/${val.name}`}>
              <div className={`box ${styles.githubLink}`}>
                <div className="columns">
                  <div className="column is-9">
                    <strong>{val.name}</strong>
                    <br />
                    <span> {val.description} </span>
                    <br />
                    {val.isFork && (
                      <span className={styles.forkSourceText}>
                        Forked from &nbsp;
                        <a href={val.parent.url}>{val.parent.url}</a>
                      </span>
                    )}
                  </div>
                  <div className={`column is-3 ${styles.iconContainer}`}>
                    <span className={styles.icon}>
                      {val.forkCount}
                      <i className="fa fa-code-fork" />
                    </span>
                    <span className={styles.icon}>
                      {val.stargazers.totalCount}
                      <i className="fa fa-star" />
                    </span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
export default User;
