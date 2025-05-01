import React from 'react';

import NumberInputCurrency from '../NumberInputCurrency/NumberInputCurrency';
import SelectCurrency from '../SelectCurrency/SelectCurrency';
import styles from './FormConverter.module.scss';
import BtnAction from '../../ui/BtnAction/BtnAction';
import { FormConverterProps } from '@/interfaces/converter/form-converter/form-converter.interface';

const FormConverter = ({ converterData, setConverterData, onConvert, availableCurrencies }: FormConverterProps) => {

    return (
        <form className={styles['form-converter']} onSubmit={onConvert}>
            <NumberInputCurrency
                name='numberCurrency'
                converterData={converterData}
                setConverterData={setConverterData}
                textNumber='Количество:' />
            <SelectCurrency
                nameData={{ name: 'firstCurrency', nameClass: 'first-currency' }}
                converterData={converterData}
                setConverterData={setConverterData}
                selectCurrencyText='Валюта:'
                dataSelectCurrency={availableCurrencies.filter(currency => currency.currency !== converterData.secondCurrency)}
            />
            <span className={styles['form-converter__text']}>IN</span>
            <SelectCurrency
                nameData={{ name: 'secondCurrency', nameClass: 'second-currency' }}
                converterData={converterData}
                setConverterData={setConverterData}
                selectCurrencyText='Валюта:'
                dataSelectCurrency={availableCurrencies.filter(currency => currency.currency !== converterData.firstCurrency)}
            />
            <BtnAction text='OK' nameClass='btn-submit' action='submit'/>
        </form>
    )
}

export default FormConverter