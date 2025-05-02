import { AddHistoryActionPayload, AddItemInHistoryActionPayload, InitialState, RemoveItemInHistoryActionPayload } from "@/interfaces/redux/slices/offset-slice/offset-slice.interface";
import removeDuplicates from "@/utils/removeDuplicates";
import {
    buildCreateSlice,
    asyncThunkCreator,
    PayloadAction
} from "@reduxjs/toolkit";

const initialState = {
    currenciesOffSetData: [],
    currenciesDataAll: [],
    offset: 6,
    isMore: true,
    loading: false
} as InitialState

const createSliceWithThunk = buildCreateSlice({
    creators: { asyncThunk: asyncThunkCreator },
});

export const offSetSlice = createSliceWithThunk({
    name: "offSet",
    initialState,
    selectors: {
        converter: (state) => state
    },
    reducers: (create) => ({
        addHistory: create.reducer((state, action: PayloadAction<AddHistoryActionPayload>) => {

            state.currenciesDataAll = removeDuplicates(action.payload.currenciesDataAll);
        }),
        addItemInHistory: create.reducer((state, action: PayloadAction<AddItemInHistoryActionPayload>) => {

            if (!state.currenciesOffSetData.some(item => item.id === action.payload.itemCurrency.id)) {
                state.currenciesOffSetData.unshift(action.payload.itemCurrency);
            }
        }),
        removeItemInHistory: create.reducer((state, action: PayloadAction<RemoveItemInHistoryActionPayload>) => {
            state.currenciesOffSetData = state.currenciesOffSetData.filter(item => item.id !== action.payload.id);
            state.currenciesDataAll = state.currenciesDataAll.filter(item => item.id !== action.payload.id);

            state.offset += 1;
        }),
        addOffset: create.reducer((state) => {

            state.offset += 6
        }),
        addOffSetHistory: create.reducer((state) => {

            state.loading = true;

            const newItems = state.currenciesDataAll.slice(state.currenciesOffSetData.length, state.offset);

            const uniqueItems = removeDuplicates([...state.currenciesOffSetData, ...newItems]);
            state.currenciesOffSetData = uniqueItems;

            state.isMore = true;
            state.loading = false;

            if (state.currenciesDataAll.length <= (state.offset)) {
                state.isMore = false;
            }

            if (state.currenciesDataAll.length === state.currenciesOffSetData.length ) {
                state.isMore = false;
            }
        }),
        resetOffSetHistory: create.reducer((state) => {
            state.currenciesOffSetData = [];
            state.offset = 0;
        }),
    })
});
export const { addOffset, addItemInHistory, removeItemInHistory, addHistory, addOffSetHistory, resetOffSetHistory } = offSetSlice.actions;
export default offSetSlice.reducer;