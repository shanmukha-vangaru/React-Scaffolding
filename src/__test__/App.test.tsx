import { render, screen } from '@testing-library/react';
import React from 'react';
import App from '../App';

describe('App tests', () => {
  it('should contains the heading', () => {
    render(<App />);
    const heading = screen.getByText('React setup from scratch');
    expect(heading).toBeInTheDocument();
  });
});
