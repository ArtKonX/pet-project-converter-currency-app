import { HistoryConvertationItemData } from "@/interfaces/converter/history-convertation/history-convertation.interface"

export interface InitialState {
    currenciesDataAll: HistoryConvertationItemData[],
}

export interface AddInHistoryPayloadAction {
    currencyData: HistoryConvertationItemData
}

export interface RemoveInHistoryPayloadAction {
    id: string
}