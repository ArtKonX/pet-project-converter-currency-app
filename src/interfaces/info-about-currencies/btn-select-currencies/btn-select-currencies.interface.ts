interface DataAvailableCurrency {
    id: number,
    currency: string
}

export interface BtnsSelectCurrenciesProps {
    dataAvailableCurrencies: DataAvailableCurrency[],
    disabled: boolean
}


export interface BtnSelectCurrencyProps {
    availableCurrency: string,
    disabled: boolean
}