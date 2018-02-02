import React, { Component } from 'react';
import Results from 'src/components/Results';
import { graphql } from 'react-apollo';
import qs from 'qs';
import idx from 'idx';
import Loader from 'src/components/Loader';

import search from './search.gql';

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
class ResultsContainer extends Component {
  render() {
    const users = idx(this.props.data, _ => _.search.nodes);
    const userCount = idx(this.props.data, _ => _.search.userCount);
    const query = qs.parse(this.props.location.search)['?q'];
    const { loading } = this.props.data;

    return loading ? <Loader /> : <Results query={query} total={userCount} users={users} />;
  }
}

export default ResultsContainer;
