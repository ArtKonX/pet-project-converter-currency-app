import { RootState } from "@/redux/store/index";
import { createSelector } from 'reselect';

export const selectConverter = createSelector(
    (state: RootState) => state.converter,
    (converter) => ({
        ...converter,
        currenciesPrice: converter.currenciesPrice,
        baseCurrency: converter.baseCurrency,
        currency: converter.currency
    })
);

export const selectCurrencies = createSelector(
    (state: RootState) => state.currenciesData,
    (currenciesData) => ({
        ...currenciesData,
        currenciesData: currenciesData.currenciesDataAll
    })
);

export const selectOffSet = createSelector(
    (state: RootState) => state.offSet,
    (offSet) => ({
        ...offSet,
        currenciesOffSetData: offSet.currenciesOffSetData
    })
);