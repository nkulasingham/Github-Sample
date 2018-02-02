import React from 'react';

const Profile = ({ styles, avatarUrl, login, name, following, followers, bio }) => (
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
          </p>
        </div>
      </div>
    </div>
    <hr />
    <div>
      <strong> Bio: </strong> {bio}
      <hr />
      <strong> {following && following.totalCount} Following </strong>
      <br />
      <strong> {followers && followers.totalCount} Followers </strong>
    </div>
  </div>
);

export default Profile;
