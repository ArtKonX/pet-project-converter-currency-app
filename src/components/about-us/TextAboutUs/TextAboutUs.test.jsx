import React from 'react';

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TextAboutUs from './TextAboutUs';

describe('TextAboutUs', () => {
    test('отображает переданный текст', () => {
        const text = 'Пример текста';
        render(<TextAboutUs text={text} />);

        expect(screen.getByText(text)).toBeInTheDocument();
        expect(screen.getByRole('paragraph')).toHaveClass('text-about-us');
    });

    test('обрабатывает отсутствие пропа text', () => {
        render(<TextAboutUs />);
        expect(screen.queryByRole('paragraph')).toBeNull();
    });

    test('проверяет наличие модификатора класса при передаче пропа bold в значении true', () => {
        const text = 'Пример текста';
        render(<TextAboutUs text={text} bold={true}/>);
        expect(screen.getByRole('paragraph')).toHaveClass('text-about-us_bold');
    });

    test('проверяет отсутствие наличие модификатора класса при передаче пропа bold в значении false', () => {
        const text = 'Пример текста';
        render(<TextAboutUs text={text} bold={false}/>);
        expect(screen.getByRole('paragraph')).not.toHaveClass('text-about-us_bold');
    });
});