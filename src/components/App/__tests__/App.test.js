import React from 'react';
import App from '../App';
import { render, fireEvent, wait } from 'react-testing-library';
import mockRepos from '../__data__/repos';

describe('<App />', () => {
  test('allows input to be changed', () => {
    const { getByLabelText } = render(<App />);
    const input = getByLabelText('Topic');

    fireEvent.change(input, { target: { value: 'TEST' } });
    const updatedInput = getByLabelText('Topic');
    expect(updatedInput.value).toEqual('TEST');
  });

  test('fetches & displays the repos list', async () => {
    const fetchReposMock = jest.fn(async () => mockRepos);

    const { getByLabelText, getByText, container } = render(
      <App fetchRepos={fetchReposMock} />
    );

    const input = getByLabelText('Topic');

    fireEvent.change(input, { target: { value: 'TEST' } });

    fireEvent.click(getByText('Search!'));

    await wait(() => getByText('react'));

    expect(fetchReposMock).toHaveBeenCalledWith('TEST');

    [('react', 'react-native', 'react-router', 'create-react-app')].forEach(
      title => {
        expect(getByText(title)).toBeInTheDocument();
      }
    );
  });
});
