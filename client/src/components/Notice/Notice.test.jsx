import { render, screen } from '@testing-library/react';
import Notice from './Notice';
import { BrowserRouter } from 'react-router-dom';

test('renders notice component', () => {
    render(
        <BrowserRouter>
            <Notice />
        </BrowserRouter>
    )

    // CHECKING PRESENCE OF KEY ELEMENTS

    const navLink = screen.getAllByRole('link', {name: /here/i})
    console.log(navLink.map(link => link.textContent));
    expect(navLink.length).toBe(1);
})