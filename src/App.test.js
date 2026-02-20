// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders CodeAuditor title', () => {
    render(<App />);
    const titleElement = screen.getByText(/CodeAuditor/i);
    expect(titleElement).toBeInTheDocument();
});
