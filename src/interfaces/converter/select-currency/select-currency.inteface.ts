interface ConverterDataState {
    numberCurrency: number,
    firstCurrency: string,
    secondCurrency: string
}

type ConverterDataKeys = keyof ConverterDataState;

interface NameData {
    name: ConverterDataKeys,
    nameClass: string
}

export interface AvailableCurrencies {
    id: number,
    currency: string,
    price?: number
}

export interface SelectCurrencyProps {
    converterData: ConverterDataState,
    setConverterData: (converterData: ConverterDataState) => void,
    nameData: NameData,
    selectCurrencyText: string,
    dataSelectCurrency: AvailableCurrencies[]
}