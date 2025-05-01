interface CurrencyData {
    currencyCount?: number,
    currencyName: string
}

export interface HistoryConvertationItemData {
    id: string,
    currencyFirstData: CurrencyData,
    currencySecondData: CurrencyData,
    price: number,
    date?: string
}

export interface HistoryConvertationItemProps {
    id: string,
    currencyFirstData: CurrencyData,
    currencySecondData: CurrencyData,
    price: number,
    date?: string,
    onRemove: (id: string) => void
}

export interface HistoryConvertationListProps {
    onRemove: (id: string) => void,
    dataHistoryConvertation: HistoryConvertationItemData[]
}