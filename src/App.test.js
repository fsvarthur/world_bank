import { render, screen } from '@testing-library/react';
import App from './App';
import Home from './components/Home';

test('renders learn react link', () => {
  render(<Home />);
  const linkElement = screen.getByText(/Countries/i);
  expect(linkElement).toBeInTheDocument();
});
