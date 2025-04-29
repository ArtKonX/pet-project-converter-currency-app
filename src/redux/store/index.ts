import { configureStore } from '@reduxjs/toolkit';
import currencyApi from '../services/currencyApi';
import converterSlice from '../slices/converterSlice';

const store = configureStore({
    reducer: {
        currencyApi: currencyApi.reducer,
        converter: converterSlice
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(currencyApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;