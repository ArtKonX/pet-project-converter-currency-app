import React from 'react';

import { CurrenciesListProps } from '@/interfaces/info-about-currencies/currencies-list/currencies-list.interface';
import CurrencyElem from '../CurrencyElem/CurrencyElem';
import styles from './CurrenciesList.module.scss';

const CurrenciesList = ({ dataCurrencies, baseCurrency }: CurrenciesListProps) => {

    return (
        <ul className={styles['currencies-list']}>
            {dataCurrencies.map(currency => (
                <li key={currency.id}>
                    <CurrencyElem baseCurrency={baseCurrency} currency={currency} isLastElem={currency.id === dataCurrencies.length} />
                </li>
            ))}
        </ul>
    )
}

export default CurrenciesList