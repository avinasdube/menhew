import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Footer from './Footer';

test('renders Footer component', () => {
  render(
    <BrowserRouter>
      <Footer />
    </BrowserRouter>
  );

  // CHECK FOR THE PRESENCE OF KEY ELEMENTS
  const footerContainer = screen.getByTestId('footer');
  const menhewLogo = screen.getByText('Menhew');

  // SEARCHING FOR ELEMENTS WITH ARIA ROLE 'link'
  const navLinks = screen.getAllByRole('link', { name: /Home|FAQ|Contact Us|Privacy Policy|Shipping Policy/i });
  const copyrightDetails = screen.getByText(/© Menhew 2023. All Rights Reserved/i);

  // ASSERTIONS
  expect(footerContainer).toBeInTheDocument();
  expect(menhewLogo).toBeInTheDocument();
  expect(navLinks.length).toBe(5); // Assuming there are 5 navigation links
  expect(copyrightDetails).toBeInTheDocument();
});

