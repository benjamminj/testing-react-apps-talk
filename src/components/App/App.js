import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Repo from '../Repo';
import { fetchRepos } from '../../api/fetchRepos';
import './App.css';

class App extends Component {
  state = {
    topic: '',
    repos: [],
  };

  updateTopic = ev => {
    const topic = ev.target.value;
    this.setState({ topic });
  };

  onSubmitForm = async ev => {
    ev.preventDefault();

    const { fetchRepos } = this.props;
    const { topic } = this.state;

    const repos = await fetchRepos(topic);
    this.setState({ repos });
  };

  render() {
    const { repos } = this.state;

    return (
      <div className="App">
        <form className="Form" onSubmit={this.onSubmitForm}>
          <label className="Form__label" htmlFor="formTopic">
            Topic
          </label>
          <input
            className="Form__input"
            id="formTopic"
            name="topic"
            type="text"
            value={this.state.topic}
            onChange={this.updateTopic}
            required
          />
          <button className="Form__button" type="submit">
            Search!
          </button>
        </form>

        {repos.length > 0 && (
          <ul className="App-repoList">
            {repos.map(repo => (
              <li className="App-repoListItem" key={repo.id}>
                <Repo {...repo} />
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

App.propTypes = {
  fetchRepos: PropTypes.func,
};

App.defaultProps = {
  fetchRepos,
};

export default App;
