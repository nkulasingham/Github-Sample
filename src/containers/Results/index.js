import React, { Component, Fragment } from 'react';
import Results from 'src/components/Results';
import { graphql } from 'react-apollo';
import qs from 'qs';
import idx from 'idx';
import Loader from 'src/components/Loader';
import Helmet from 'react-helmet';

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

    return (
      <Fragment>
        <Helmet title={`Search Results for ${query} | Gitgazers`} />
        {loading ? <Loader /> : <Results query={query} total={userCount} users={users} />}
      </Fragment>
    );
  }
}

export default ResultsContainer;
