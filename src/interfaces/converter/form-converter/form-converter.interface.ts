import { FormEvent } from "react"

interface ConverterDataState {
    numberCurrency: number,
    firstCurrency: string,
    secondCurrency: string
}

interface AvailableCurrencies {
    id: number,
    currency: string
}

export interface FormConverterProps {
    converterData: ConverterDataState,
    setConverterData: (converterData: ConverterDataState) => void,
    onConvert: (e: FormEvent<HTMLFormElement>) => void,
    availableCurrencies: AvailableCurrencies[]
}