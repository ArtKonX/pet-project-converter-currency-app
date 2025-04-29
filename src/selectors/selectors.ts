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