import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';//import falla, no deja toHaveTextContent sin jest-dom pero luego falla render
import Header from '../components/Header';
import Section3 from "../components/Section3"

test('renders images', () => {
  render(<Section3 />);
  const linkElement = screen.getByRole('img');
  expect(linkElement).toBeInTheDocument();
});


test('renders the Header', () => {
  render(<Header />);

  const linkElement = screen.getByText(/botiga/i);
  expect(linkElement).toBeInTheDocument();
});