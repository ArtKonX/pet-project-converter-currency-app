export interface BaseCurrencyPayloadAction {
    baseCurrency: string
}

export interface CurrenciesPriceAndCurrencyPayloadAction {
    price: number,
    currency: string
}

export interface InitialState {
    currenciesPrice: number,
    baseCurrency: string,
    currency: string,
}