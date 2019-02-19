import React, {
  Component,
} from 'react';
import { addComma } from '../../util';
import './Repo.css';

class Repo extends Component {
  state = {
    isOpen: false,
  };

  open = () =>
    this.setState({ isOpen: true });

  close = () =>
    this.setState({ isOpen: false });

  render() {
    const {
      url,
      name,
      description,
      license,
      stars,
    } = this.props;
    const { isOpen } = this.state;
    return (
      <article className="Repo">
        <h2 className="Repo__name">
          <a href={url}>{name}</a>
        </h2>
        <h3 className="Repo__description">
          {description}
        </h3>

        <div className="Repo__moreContent">
          {isOpen && (
            <ul>
              <li>
                Stars: {addComma(stars)}
              </li>
              <li>
                License:{' '}
                {license ||
                  'Not available'}
              </li>
            </ul>
          )}
        </div>

        <button
          className="Repo__toggleExpand"
          type="button"
          onClick={
            isOpen
              ? this.close
              : this.open
          }
        >
          {isOpen
            ? 'See Less'
            : 'See More'}
        </button>
      </article>
    );
  }
}

export default Repo;
