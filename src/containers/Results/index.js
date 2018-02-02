import React, { Component } from 'react';
import Results from 'src/components/Results';
import { graphql } from 'react-apollo';
import qs from 'qs';
import idx from 'idx';

import search from './query.gql';

@graphql(search, {
  options: props => {
    const query = qs.parse(props.location.search)['?q'];
    return {
      variables: {
        query,
        type: 'USER',
      },
    };
  },
})
class HomeContainer extends Component {
  render() {
    const users = idx(this.props.data, _ => _.search.nodes);
    const userCount = idx(this.props.data, _ => _.search.userCount);
    const query = qs.parse(this.props.location.search)['?q'];

    return <Results query={query} total={userCount} users={users} />;
  }
}

export default HomeContainer;
