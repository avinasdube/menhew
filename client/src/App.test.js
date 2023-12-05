import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app component to check if all routes available', () => {
  
  render(
    <App />
  );

  const notice = screen.getByTestId('notice');
  const navBar = screen.getByTestId('navbar');
  const footer = screen.getByTestId('footer');
  const home = screen.getByTestId('home');
  // const categories = screen.getByTestId('categories');
  // const favourites = screen.getByTestId('favourites');
  // const product = screen.getByTestId('product');
  // const signup = screen.getByTestId('signup');
  // const login = screen.getByTestId('login');

  expect(notice).toBeInTheDocument();
  expect(navBar).toBeInTheDocument();
  expect(footer).toBeInTheDocument();
  expect(home).toBeInTheDocument();
  // expect(categories).toBeInTheDocument();
  // expect(favourites).toBeInTheDocument();
  // expect(product).toBeInTheDocument();
  // expect(signup).toBeInTheDocument();
  // expect(login).toBeInTheDocument();
});
