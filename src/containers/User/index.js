import React, { Component, Fragment } from 'react';
import Helmet from 'react-helmet';

import User from 'src/components/User';
import Loader from 'src/components/Loader';

import { graphql } from 'react-apollo';
import idx from 'idx';

import userQuery from './user.gql';

@graphql(userQuery, {
  options: props => {
    const login = props.match.params.user;
    return {
      variables: {
        login,
      },
    };
  },
})
class UserContainer extends Component {
  state = {
    repositories: [],
    active: 'all',
  };

  changeRepositoryView = type => {
    let repositories = idx(this.props.data, _ => _.user.repositories.nodes);
    let active;
    switch (type) {
      case 'sources': {
        repositories = repositories.filter(repository => repository.isFork !== true);
        active = 'sources';
        break;
      }
      case 'forks': {
        repositories = repositories.filter(repository => repository.isFork === true);
        active = 'forks';
        break;
      }
      default: {
        active = 'all';
        break;
      }
    }
    this.setState({ active, repositories });
  };

  render() {
    const user = idx(this.props.data, _ => _.user);
    let { repositories } = this.state;
    if (repositories.length === 0) {
      repositories = idx(this.props.data, _ => _.user.repositories.nodes);
    }
    const { loading } = this.props.data;
    const { params } = this.props.match;
    return (
      <Fragment>
        <Helmet title={`${params.user}'s Github profile | Gitgazers`} />
        {loading ? (
          <Loader />
        ) : (
          <User
            user={user}
            active={this.state.active}
            changeRepositoryView={this.changeRepositoryView}
            repositories={repositories} />
        )}
      </Fragment>
    );
  }
}

export default UserContainer;
