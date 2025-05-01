import { buildCreateSlice, asyncThunkCreator, PayloadAction } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { AddInHistoryPayloadAction, InitialState, RemoveInHistoryPayloadAction } from "@/interfaces/redux/slices/currencies-slice/currencies-slice.interface";

const initialState = {
    currenciesDataAll: []
} as InitialState;

const createSliceWithThunk = buildCreateSlice({
    creators: { asyncThunk: asyncThunkCreator },
});

const currenciesSlice = createSliceWithThunk({
    name: "currenciesData",
    initialState,
    selectors: {
        basketData: (state) => state,
    },
    reducers: (create) => ({
        addInHistory: create.reducer((state, action: PayloadAction<AddInHistoryPayloadAction>) => {

            const { currencyData } = action.payload;

            state.currenciesDataAll.unshift(currencyData);
            state.currenciesDataAll.unshift(currencyData);
        }),
        removeInHistory: create.reducer((state, action: PayloadAction<RemoveInHistoryPayloadAction>) => {

            const { id } = action.payload;

            state.currenciesDataAll = state.currenciesDataAll.filter(currency => currency.id !== id);
        }),
        resetHistory: create.reducer((state) => {
            state.currenciesDataAll = [];
        })
    }),
});

export default currenciesSlice.reducer;

const persistConfig = {
    key: 'currenciesData',
    storage,
    whitelist: ['currenciesDataAll'],
};

const persistedReducer = persistReducer(persistConfig, currenciesSlice.reducer);

export const { addInHistory, removeInHistory, resetHistory } = currenciesSlice.actions;
export const reducer = persistedReducer;