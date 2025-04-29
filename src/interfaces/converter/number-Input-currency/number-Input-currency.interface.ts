interface ConverterDataState {
    numberCurrency: number,
    firstCurrency: string,
    secondCurrency: string
}

export interface NumberInputCurrencyProps {
    converterData: ConverterDataState,
    setConverterData: (converterData: ConverterDataState) => void,
    name: string,
    textNumber: string
}