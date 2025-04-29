interface DataAvailableCurrency {
    id: number,
    currency: string
}

export interface BtnsSelectCurrenciesProps {
    disabled: boolean,
    dataAvailableCurrencies: DataAvailableCurrency[]
}


export interface BtnSelectCurrencyProps {
    availableCurrency: string,
    disabled: boolean
}