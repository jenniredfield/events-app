import React from 'react';
import { render, screen } from '../custom-render';
import Header from '../components/Header';

describe('<Header/>', () => {
    test('renders header logo link', () => {
      render(<Header/>);
      const headerLogoLink = screen.getByTestId('header-logo-link');
      expect(headerLogoLink).toBeInTheDocument();
    });

    test('renders an search input bar with a placeholder', () => {
        const {getByPlaceholderText} = render(<Header/>);
        const inputSearchBar = getByPlaceholderText('Search artist, town or keyword...');
        expect(inputSearchBar).toBeInTheDocument();
      });

    test('renders an search input bar with a placeholder', () => {
        const {getByPlaceholderText} = render(<Header/>);
        const inputSearchBar = getByPlaceholderText('Search artist, town or keyword...');
        expect(inputSearchBar).toBeInTheDocument();
    });
    test('renders a button for the input', () => {
        const {getByTestId} = render(<Header/>);
        const inputButton = getByTestId('header-input-button');
        expect(inputButton).toBeInTheDocument();
    });
});
