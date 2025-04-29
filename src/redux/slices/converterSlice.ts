import { BaseCurrencyPayloadAction, CurrenciesPriceAndCurrencyPayloadAction, InitialState } from "@/interfaces/redux/slices/converter-slice/converter-slice.interface";
import {
    buildCreateSlice,
    asyncThunkCreator,
    PayloadAction
} from "@reduxjs/toolkit";

const initialState = {
    currenciesPrice: 0,
    baseCurrency: 'RUB',
    currency: ''
} as InitialState

const createSliceWithThunk = buildCreateSlice({
    creators: { asyncThunk: asyncThunkCreator },
});

export const converterSlice = createSliceWithThunk({
    name: "converter",
    initialState,
    selectors: {
        converter: (state) => state
    },
    reducers: (create) => ({
        addCurrenciesPriceAndCurrency: create.reducer((state,
            action: PayloadAction<
                CurrenciesPriceAndCurrencyPayloadAction
            >
        ) => {
            state.currenciesPrice = action.payload.price;
            state.currency = action.payload.currency;
        }),
        removeCurrenciesPriceAndCurrency: create.reducer((state) => {
            state.currenciesPrice = 0;
            state.currency = '';
        }),
        addBaseCurrency: create.reducer((state, action:
            PayloadAction<BaseCurrencyPayloadAction>
        ) => {
            state.baseCurrency = action.payload.baseCurrency;
        }),
    })
});

export const { addCurrenciesPriceAndCurrency, removeCurrenciesPriceAndCurrency, addBaseCurrency } = converterSlice.actions;
export default converterSlice.reducer;