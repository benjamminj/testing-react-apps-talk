import React, {
  Component,
} from 'react';
import PropTypes from 'prop-types';
import Repo from '../Repo';
import { fetchRepos } from '../../api/fetchRepos';
import './Search.css';

class Search extends Component {
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

    const repos = await fetchRepos(
      topic
    );

    this.setState({ repos });
  };

  render() {
    const { topic, repos } = this.state;

    return (
      <div className="Search">
        <form
          className="Form"
          onSubmit={this.onSubmitForm}
        >
          <label
            className="Form__label"
            htmlFor="formTopic"
          >
            Topic
          </label>
          <input
            className="Form__input"
            id="formTopic"
            name="topic"
            type="text"
            value={topic}
            onChange={this.updateTopic}
            required
          />
          <button
            className="Form__button"
            type="submit"
          >
            Search!
          </button>
        </form>

        {repos.length > 0 && (
          <>
            <h2 className="Search__reposHeading">
              Matching Repos:
            </h2>
            <ul className="Search-repoList">
              {repos.map(repo => (
                <li
                  className="Search-repoListItem"
                  key={repo.id}
                >
                  <Repo {...repo} />
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    );
  }
}

Search.propTypes = {
  fetchRepos: PropTypes.func,
};

Search.defaultProps = {
  fetchRepos,
};

export default Search;
