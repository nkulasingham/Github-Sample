import React, { Component, Fragment } from 'react';
import Home from 'src/components/Home';
import Helmet from 'react-helmet';

class HomeContainer extends Component {
  state = {
    username: null,
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.history.push(`/results?q=${this.state.username}`);
  };

  updateUsername = e => {
    this.setState({ username: e.target.value });
  };

  render() {
    const { username } = this.state;
    return (
      <Fragment>
        <Helmet
          title="Home | Gitgazers" />
        <Home
          submitForm={this.handleSubmit}
          updateUsername={this.updateUsername}
          username={username} />
      </Fragment>
    );
  }
}

export default HomeContainer;
