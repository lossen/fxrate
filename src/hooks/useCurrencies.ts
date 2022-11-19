import { ICurrencyItem, IFeeItem } from "./../types";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { currencies } from "../mockApi/currencies.json";
import { fxRates } from "../mockApi/fxRates.json";

export const useCurrencies = () => {
  const [currenciesList, setCurrenciesList] = useState<ICurrencyItem[]>([]);

  const [fees, setFees] = useState<IFeeItem[]>([]);

  const getCurrencies = useCallback(async () => {
    setTimeout(() => {
      setCurrenciesList(currencies as ICurrencyItem[]);
    }, 3000);
  }, [currencies.length]);

  const getFees = useCallback(() => {
    setTimeout(() => {
      setFees(fxRates);
    }, 3000);
  }, [fxRates.length]);

  useEffect(() => {
    getCurrencies();
    getFees();
  }, []);

  return useMemo(
    () => ({
      currencies: currenciesList,
      fees,
    }),
    [currencies.length, fees.length]
  );
};
