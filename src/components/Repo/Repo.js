import React, { useState } from 'react';
import { addComma } from '../../util'
import './Repo.css';

const Repo = ({ url, name, description, license, stars }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article className="Repo">
      <h2 className="Repo__name">
        <a href={url} target="_blank" rel="noopener noreferrer">
          {name}
        </a>
      </h2>
      <h3 className="Repo__description">{description}</h3>

      <div className="Repo__moreContent">
        {isOpen && (
          <ul>
            <li>Stars: {addComma(stars)}</li>
            <li>License: {license || 'Not available'}</li>
          </ul>
        )}
      </div>

      <button
        className="Repo__toggleExpand"
        type="button"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? 'See Less' : 'See More'}
      </button>
    </article>
  );
};

export default Repo;
