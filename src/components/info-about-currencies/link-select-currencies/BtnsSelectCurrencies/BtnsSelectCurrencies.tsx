import React from 'react';

import { BtnsSelectCurrenciesProps } from '@/interfaces/info-about-currencies/btn-select-currencies/btn-select-currencies.interface';
import BtnSelectCurrency from '../BtnSelectCurrency/BtnSelectCurrency';
import styles from './BtnsSelectCurrencies.module.scss';

const BtnsSelectCurrencies = ({ dataAvailableCurrencies, disabled }: BtnsSelectCurrenciesProps) => {

    return (
        <ul className={styles['list-btns-select-currencies']}>
            {dataAvailableCurrencies.map(currency => (
                <li key={currency.id}>
                    <BtnSelectCurrency disabled={disabled} availableCurrency={currency.currency} />
                </li>
            ))}
        </ul>
    )
}

export default BtnsSelectCurrencies