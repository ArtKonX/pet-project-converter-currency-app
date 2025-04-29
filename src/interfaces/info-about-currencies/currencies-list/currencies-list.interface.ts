interface Currency {
    id: number
    currency: string,
    price?: number
}

export interface CurrenciesListProps {
    dataCurrencies: Currency[],
    baseCurrency: string
}

interface Currency {
    id: number
    currency: string,
    price?: number
}

export interface CurrencyElemProps {
    currency: Currency,
    isLastElem: boolean,
    baseCurrency: string
}