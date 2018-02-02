import React, { Component } from 'react';
import User from 'src/components/User';
import { graphql } from 'react-apollo';
import qs from 'qs';
import idx from 'idx';

import search from './query.gql';

@graphql(search, {
  options: props => {
    const login = props.match.params.user;
    return {
      variables: {
        login,
      },
    };
  },
})
class HomeContainer extends Component {
  render() {
    const user = idx(this.props.data, _ => _.user);

    return (user && <User user={user} />) || null;
  }
}

export default HomeContainer;
