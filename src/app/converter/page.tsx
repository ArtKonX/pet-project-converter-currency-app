'use client';

import React from 'react';

import FormConverter from "@/components/converter/FormConverter/FormConverter";
import styles from "../page.module.scss";
import { useSelector } from "@/hooks/useTypedSelector";
import { selectConverter, selectCurrencies, selectOffSet } from "@/selectors/selectors";
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
import { addInHistory, removeInHistory } from '@/redux/slices/currenciesSlice';
import { generateUUID } from '@/utils/generateUUID';
import HistoryConvertationList from '@/components/converter/history-convertation/HistoryConvertationList/HistoryConvertationList';
import BtnOffset from '@/components/converter/history-convertation/BtnOffset/BtnOffset';
import { addHistory, addItemInHistory, addOffSetHistory, removeItemInHistory } from '@/redux/slices/offSetSlice';
import formattedDate from '@/utils/formattedDate';

interface ConverterDataState {
    numberCurrency: number;
    firstCurrency: string;
    secondCurrency: string;
};

export default function ConverterPage() {
    const converter = useSelector(selectConverter);
    const currencies = useSelector(selectCurrencies);
    const offset = useSelector(selectOffSet);

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
        if (currencies.currenciesDataAll.length > 0) {
            dispatch(addHistory({ currenciesDataAll: currencies.currenciesDataAll }));
        }
        dispatch(addOffSetHistory());
    }, [currencies.currenciesDataAll]);

    useEffect(() => {
        dispatch(removeCurrenciesPriceAndCurrency());
    }, [])

    const memoFormatCurrenciesData = useMemo(() => {
        if (data) {
            return formatCurrenciesData({
                data,
                baseCurrency:
                    converter.baseCurrency,
                availableCurrencies: dataAvailableCurrencies,
                isNoBase: false
            })
        }
    },
        [data, converterData.secondCurrency, converterData.firstCurrency]
    )

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
                    const id = generateUUID();
                    const price = findedCurrency.price * Number(converterData.numberCurrency);
                    const date = formattedDate(new Date());

                    const dataForHistory = {
                        id,
                        currencyFirstData: {
                            currencyCount: converterData.numberCurrency,
                            currencyName: converterData.firstCurrency
                        },
                        currencySecondData: {
                            currencyName: converterData.secondCurrency
                        },
                        price,
                        date
                    };

                    dispatch(addCurrenciesPriceAndCurrency({
                        price: price,
                        currency: converterData.secondCurrency || 'RUB'
                    }));
                    dispatch(addInHistory({ currencyData: dataForHistory }));
                    dispatch(addItemInHistory({ itemCurrency: dataForHistory }));
                }
            }
        } catch (error) {
            console.error('Ошибка конвертации:', error);
        }
    };

    const onRemove = (id: string) => {
        dispatch(removeInHistory({ id }));
        dispatch(removeItemInHistory({ id }));
        dispatch(addOffSetHistory());
    }

    const renderHistory = () => (
        offset.loading ? <Loader /> : (
            <div className={styles['btn-offset-block']}>
                <BtnOffset disabled={offset.loading} text='Больше' />
            </div>
        )
    );

    const renderListCurrencies = () => (
        offset.currenciesOffSetData.length === 0 ? (
            <SpanResult
                text='Ваш список конвертаций пуст('
                nameClass='result'
                isError={true} />
        ) : (
            <>
                <HistoryConvertationList
                    onRemove={onRemove}
                    dataHistoryConvertation={offset.currenciesOffSetData} />
                {offset.isMore && renderHistory()}
            </>
        )
    );

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
            <HeadingWithContent
                classNameText='history-content'
                headingText='Все Ваши конвертации:'>
                {renderListCurrencies()}
            </HeadingWithContent>
        </div>
    );
}