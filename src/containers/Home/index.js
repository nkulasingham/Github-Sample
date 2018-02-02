import React, { Component } from 'react';
import Home from 'src/components/Home';

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
      <Home
        submitForm={this.handleSubmit}
        updateUsername={this.updateUsername}
        username={username} />
    );
  }
}

export default HomeContainer;
