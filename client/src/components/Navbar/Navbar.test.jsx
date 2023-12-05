import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';
import { BrowserRouter, RouterProvider } from 'react-router-dom';

test('renders app component to check if all routes available', () => {

    render(
        <BrowserRouter>
            <Navbar />
        </BrowserRouter>
    );

    const searchImg = screen.getByAltText('search');
    const cartImg = screen.getByAltText('cart');
    const profileImg = screen.getByAltText('profile');

    const logotext = screen.getByText('Menhew')

    expect(searchImg).toBeInTheDocument();
    expect(cartImg).toBeInTheDocument();
    expect(profileImg).toBeInTheDocument();
    expect(logotext).toBeInTheDocument();

});


// import {render, screen} from '@testing-library/react';
// import Navbar from './Navbar';

// test('navbar test', ()=>{
//     render(<Navbar />)

//     const img = screen.getByAltText('cart');
//     expect(img).toBeInTheDocument();
// });