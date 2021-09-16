import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders website title', () => {
	render(<App />);
	const linkElement = screen.getByText(/Spacestagram/i);
	expect(linkElement).toBeInTheDocument();
});
