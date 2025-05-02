import React from 'react';

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ListAboutUs from './ListAboutUs';

describe('ListAboutUs', () => {
    test('отображает количество элементов li при ненулевом len пропа', () => {
        const dataAboutUsList = ['1', '2', '3'];

        render(<ListAboutUs dataAboutUsList={dataAboutUsList} />);

        const listItems = screen.queryAllByRole('listitem');

        expect(listItems).toHaveLength(dataAboutUsList.length);
    });
    test('обрабатывает отсутствие пропа dataAboutUsList', () => {
        render(<ListAboutUs />);
        expect(screen.queryByRole('list')).toBeNull();
    });
    test('нулевое значение длинны массива dataAboutUsList', () => {
        render(<ListAboutUs dataAboutUsList={[]}/>);
        expect(screen.queryByRole('list')).toBeNull();
    });
});