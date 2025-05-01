import React from 'react';

import { CurrencyElemProps } from '@/interfaces/info-about-currencies/currencies-list/currencies-list.interface';
import styles from './CurrencyElem.module.scss';

const CurrencyElem = ({ currency, isLastElem, baseCurrency }: CurrencyElemProps) => {

    return (
        <div className={`${styles["currency"]} ${isLastElem && styles["currency_last"]}`}>
            <span>Валюта: {currency.currency} </span>
            <span>Цена: {currency.price} {baseCurrency}</span>
        </div>
    )
}

export default CurrencyElem