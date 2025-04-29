import { FormatCurrenciesDataProps } from "@/interfaces/utils/format-currencies-data/format-currencies-data.interface";

export default function formatCurrenciesData({ data, baseCurrency, availableCurrencies, isNoBase }: FormatCurrenciesDataProps) {

    if (!isNoBase) {
        return availableCurrencies.map(elem => elem.currency)
        .map((currency, index) => ({
            id: index + 1,
            currency,
            price: parseFloat((1 / (data.rates[currency] || 1)).toFixed(2))
        }));
    }

    return availableCurrencies.map(elem => elem.currency)
        .filter(currency => currency != baseCurrency)
        .map((currency, index) => ({
            id: index + 1,
            currency,
            price: parseFloat((1 / (data.rates[currency] || 1)).toFixed(2))
        }));
};