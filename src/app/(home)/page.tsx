'use client';

import React from 'react';

import styles from "../page.module.scss";

import dataAvailableCurrencies from '@/data-app/data-about-currencies/data-available-currencies.json';

import { useGetExchangeRatesQuery } from '../../redux/services/currencyApi';

import { useEffect, useMemo, useState } from "react";
import CurrenciesList from "@/components/info-about-currencies/currencies-elements/CurrenciesList/CurrenciesList";
import HeadingWithContent from "@/components/HeadingWithContent/HeadingWithContent";
import { useDispatch, useSelector } from "react-redux";
import { selectConverter } from "@/selectors/selectors";
import BtnsSelectCurrencies from "@/components/info-about-currencies/link-select-currencies/BtnsSelectCurrencies/BtnsSelectCurrencies";
import Loader from "@/components/ui/Loader/Loader";
import Message from "@/components/ui/Message/Message";
import formatCurrenciesData from "@/utils/formatCurrenciesData";
import { addBaseCurrency } from "@/redux/slices/converterSlice";

export default function HomePage() {

    const converter = useSelector(selectConverter);

    const refreshInterval = 15 * 60 * 1000;

    const { data, isLoading, error, refetch } = useGetExchangeRatesQuery(converter.baseCurrency, {
        refetchOnMountOrArgChange: true
    });

    const dispatch = useDispatch();

    const [searchParams, setSearchParams] = useState<URLSearchParams | null>(null);

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        setSearchParams(params);
    }, []);

    const currency = searchParams ? searchParams.get('currency') : '';

    useEffect(() => {
        dispatch(addBaseCurrency({ baseCurrency: currency || 'RUB' }));

        const intervalId = setInterval(() => {
            refetch();
        }, refreshInterval);

        return () => clearInterval(intervalId);
    }, [dispatch, refetch, currency]);

    const memoFormatCurrenciesData = useMemo(() => {
        if (data) {
            return formatCurrenciesData({
                data,
                baseCurrency: converter.baseCurrency,
                availableCurrencies: dataAvailableCurrencies,
                isNoBase: true
            });
        }
    }, [data, converter.baseCurrency])

    const currenciesList = isLoading || !memoFormatCurrenciesData ? <Loader /> : (
        <CurrenciesList
            dataCurrencies={memoFormatCurrenciesData}
            baseCurrency={converter.baseCurrency}
        />
    );

    return (
        <div className={styles['home-page']}>
            <HeadingWithContent classNameText='main-content' headingText='Текущие курсы валют:'>
                <BtnsSelectCurrencies disabled={isLoading} dataAvailableCurrencies={dataAvailableCurrencies} />
                {error && (<Message text='Ошибка загрузки данных(' />)}
                {!error && currenciesList}
            </HeadingWithContent>
        </div>
    );
}