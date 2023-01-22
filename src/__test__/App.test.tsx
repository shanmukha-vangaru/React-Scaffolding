import { render, screen } from '@testing-library/react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import App from '../App';

jest.mock('react-i18next', () => ({
  useTranslation: jest.fn()
}));

const tSpy = jest.fn((str) => str);
const changeLanguageSpy = jest.fn((lng: string) => {
  console.log(lng);
});
const useTranslationSply = useTranslation as jest.Mock;

beforeEach(() => {
  jest.clearAllMocks();

  useTranslationSply.mockReturnValue({
    t: tSpy,
    i18n: {
      changeLanuage: changeLanguageSpy,
      language: 'en'
    }
  });
});

describe('App tests', () => {
  it('should contains the heading', () => {
    render(<App />);
    const heading = screen.getByText('welcome.title');
    expect(heading).toBeInTheDocument();
  });
});
