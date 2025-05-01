import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TitleAboutUs from './TitleAboutUs';

describe('TitleAboutUs', () => {
    test('отображает переданный текст', () => {
        const text = 'Пример текста';
        render(<TitleAboutUs text={text} />);

        expect(screen.getByText(text)).toBeInTheDocument();
        expect(screen.getByRole('heading', { level: 3 })).toHaveClass('title-about-us');
    });

    test('обрабатывает отсутствие пропа text', () => {
        render(<TitleAboutUs />);
        expect(screen.queryByRole('heading')).toBeNull(); 
    });
});