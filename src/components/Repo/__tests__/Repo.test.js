import React from 'react';
import Repo from '../Repo';
import { render, fireEvent } from 'react-testing-library';

const props = {
  url: 'https://github.com/benjamminj/testing-react-apps',
  name: 'Testing React Apps',
  description: 'Learn how to test React apps',
  license: 'MIT License',
  stars: 1000,
};

describe('<Repo />', () => {
  test('renders with content', () => {
    const { getByText, queryByText } = render(<Repo {...props} />);

    expect(getByText('Testing React Apps')).toBeInTheDocument();
    expect(getByText('Learn how to test React apps')).toBeInTheDocument();
    expect(queryByText('License: MIT License')).toEqual(null);
  });

  test('expands to show new content', () => {
    const { getByText } = render(<Repo {...props} />);
    const button = getByText('See More');

    fireEvent.click(button);
    
    expect(getByText('License: MIT License')).toBeInTheDocument();
    expect(getByText('Stars: 1,000')).toBeInTheDocument();
  });
});
