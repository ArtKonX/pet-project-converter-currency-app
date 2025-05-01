import { HistoryConvertationItemData } from "@/interfaces/converter/history-convertation/history-convertation.interface"

export interface InitialState {
    currenciesOffSetData: HistoryConvertationItemData[],
    currenciesDataAll: HistoryConvertationItemData[],
    offset: number,
    isMore: boolean,
    loading: boolean
}

export interface AddHistoryActionPayload {
    currenciesDataAll: HistoryConvertationItemData[]
}

export interface AddItemInHistoryActionPayload {
    itemCurrency: HistoryConvertationItemData
}

export interface RemoveItemInHistoryActionPayload {
    id: string
}