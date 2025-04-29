interface DataCurrencies {
    rates: { [key: string]: number }
}

interface DataCurrenciesElem {
    id: number,
    currency: string,
    price?: number
}

export interface FormatCurrenciesDataProps {
    data: DataCurrencies,
    baseCurrency: string,
    availableCurrencies: DataCurrenciesElem[],
    isNoBase: boolean
}