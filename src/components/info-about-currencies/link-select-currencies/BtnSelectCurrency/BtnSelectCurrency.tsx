'use client'

import { useDispatch } from 'react-redux';
import styles from './BtnSelectCurrency.module.scss';
import { addBaseCurrency } from '@/redux/slices/converterSlice';
import { useSelector } from '@/hooks/useTypedSelector';
import { selectConverter } from '@/selectors/selectors';
import { AppDispatch } from '@/redux/store';
import { BtnSelectCurrencyProps } from '@/interfaces/info-about-currencies/btn-select-currencies/btn-select-currencies.interface';

import { useRouter } from 'next/navigation';

const BtnSelectCurrency = ({ availableCurrency, disabled }: BtnSelectCurrencyProps) => {

    const dispatch = useDispatch<AppDispatch>();

    const router = useRouter()

    const converter = useSelector(selectConverter);

    const handleCurrencyChange = () => {

        dispatch(addBaseCurrency({ baseCurrency: availableCurrency }));
        router.push(`/?currency=${availableCurrency}`)
    }

    return (
        <button disabled={disabled} className={`${styles['btn-select-currency']}
        ${converter.baseCurrency == availableCurrency &&
            `${styles['btn-select-currency_active']}`}`}
            onClick={handleCurrencyChange}>
            {availableCurrency}
        </button>
    )
}

export default BtnSelectCurrency