import { ChangeEvent } from 'react';
import styles from './SelectCurrency.module.scss';
import { SelectCurrencyProps } from '@/interfaces/converter/select-currency/select-currency.inteface';

const SelectCurrency = (
    { converterData,
        nameData,
        setConverterData,
        selectCurrencyText,
        dataSelectCurrency }: SelectCurrencyProps
) => {

    const onSelect = (e: ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;

        if (value) {
            setConverterData({
                ...converterData,
                [name]: value
            });
        }
    }

    return (
        <label className={styles['select-currency-label']}>
            {selectCurrencyText}
            <select
                className={styles['select-currency']}
                value={converterData[nameData.name]}
                onChange={onSelect}
                name={nameData.name}
                id={`${nameData.nameClass}-select`}
            >
                <option value="">-- Выберите валюту --</option>
                {dataSelectCurrency.map(currency => (
                    <option key={currency.id} value={currency.currency}>
                        {currency.currency}
                    </option>
                ))}
            </select>
        </label>
    )
}

export default SelectCurrency