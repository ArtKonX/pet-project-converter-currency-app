import { configureStore } from '@reduxjs/toolkit';
import currencyApi from '../services/currencyApi';
import converterSlice from '../slices/converterSlice';
import currenciesSlice from '../slices/currenciesSlice';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import offSetSlice from '../slices/offSetSlice';

const persistConfig = {
    key: 'currenciesData',
    storage,
};

const persistedCurrenciesDataReducer =
    persistReducer(persistConfig, currenciesSlice);

const store = configureStore({
    reducer: {
        currencyApi: currencyApi.reducer,
        converter: converterSlice,
        currenciesData: persistedCurrenciesDataReducer,
        offSet: offSetSlice
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['persist/PERSIST'],
                ignoredPaths: ['persist.register']
            }
        }).concat(currencyApi.middleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;