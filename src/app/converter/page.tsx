'use client';

import FormConverter from "@/components/converter/FormConverter/FormConverter";
import styles from "../page.module.scss";
import { useSelector } from "@/hooks/useTypedSelector";
import { selectConverter } from "@/selectors/selectors";
import HeadingWithContent from "@/components/HeadingWithContent/HeadingWithContent";

import dataAvailableCurrencies from '@/data-app/data-about-currencies/data-available-currencies.json'
import { FormEvent, useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { addCurrenciesPriceAndCurrency, removeCurrenciesPriceAndCurrency } from "@/redux/slices/converterSlice";
import { useGetExchangeRatesQuery } from "@/redux/services/currencyApi";
import Loader from "@/components/ui/Loader/Loader";
import Message from "@/components/ui/Message/Message";
import SpanResult from "@/components/ui/SpanResult/SpanResult";
import formatCurrenciesData from "@/utils/formatCurrenciesData";

interface ConverterDataState {
    numberCurrency: number;
    firstCurrency: string;
    secondCurrency: string;
};

export default function ConverterPage() {
    const converter = useSelector(selectConverter);
    const dispatch = useDispatch();

    const [converterData, setConverterData] = useState<ConverterDataState>({
        numberCurrency: 1,
        firstCurrency: 'USD',
        secondCurrency: 'RUB'
    });

    const { data, isLoading, error } = useGetExchangeRatesQuery(converterData.secondCurrency, {
        refetchOnMountOrArgChange: true
    });

    useEffect(() => {
        dispatch(removeCurrenciesPriceAndCurrency());
    }, []);


    const memoFormatCurrenciesData = useMemo(() => {
        if (data) {
            return formatCurrenciesData({
                data,
                baseCurrency: converter.baseCurrency,
                availableCurrencies: dataAvailableCurrencies,
                isNoBase: false
            })
        }
    }, [data, converterData.secondCurrency, converterData.firstCurrency])

    const handleConvert = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            if (memoFormatCurrenciesData) {
                const findedCurrency = memoFormatCurrenciesData.find(currency =>
                    currency.currency === converterData.firstCurrency);

                if (!findedCurrency) {
                    throw new Error('Валюта не найдена');
                }

                if (findedCurrency.price) {
                    const convertedAmount = findedCurrency.price * Number(converterData.numberCurrency);

                    dispatch(addCurrenciesPriceAndCurrency({
                        price: convertedAmount,
                        currency: converterData.secondCurrency || 'RUB'
                    }));
                }
            }

        } catch (error) {
            console.error('Ошибка конвертации:', error);
        }
    };

    const renderResult = () => {
        if (!converter.currenciesPrice) {
            return (
                <SpanResult
                    text='Вы еще не конвертировали валюту('
                    nameClass='result'
                    isError={true} />
            );
        }

        if (isLoading) {
            return <Loader />;
        }

        return (
            <SpanResult
                text={`Результат: ${converter.currenciesPrice} ${converter.currency}`}
                nameClass='result'
                isError={false} />
        );
    };

    return (
        <div className={styles['converter-page']}>
            <HeadingWithContent
                classNameText='main-content'
                headingText='Конвертер из одной валюты в другую:'>
                <div className={styles["converter"]}>
                    <FormConverter
                        converterData={converterData}
                        setConverterData={setConverterData}
                        onConvert={handleConvert}
                        availableCurrencies={dataAvailableCurrencies}
                    />
                    {renderResult()}
                    {error && <Message text='Ошибка загрузки данных(' />}
                </div>
            </HeadingWithContent>
        </div>
    );
}