import React from 'react';

import { ChangeEvent } from 'react';
import styles from './NumberInputCurrency.module.scss';
import { NumberInputCurrencyProps } from '@/interfaces/converter/number-Input-currency/number-Input-currency.interface';

const NumberInputCurrency = ({ converterData, setConverterData, name, textNumber }: NumberInputCurrencyProps) => {

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        const numValue = Number(value);

        let currentValue = numValue;

        if (numValue > 99) {
            currentValue = 99;
        } else if (numValue < 1) {
            currentValue = 1;
        }

        if (numValue) {
            setConverterData({ ...converterData, [name]: currentValue  })
        }
    }

    return (
        <label className={styles['number-currency-label']}>
            {textNumber}
            <input value={converterData.numberCurrency}
                name={name}
                onChange={onChange}
                className={styles['number-currency']}
                type="number" />
        </label>
    )
}

export default NumberInputCurrency