import { useCallback, useEffect, useMemo } from "react";
import { currencies } from "../mockApi/currencies.json";

export const useCurrencies = () => {
  const getCurrencies = useCallback(() => {
    return new Promise((resolve) =>
      setTimeout(() => {
        resolve(currencies);
      }, 3000)
    );
  }, []);

  useEffect(() => {
    getCurrencies();
  }, []);

  return useMemo(
    () => ({
      getCurrencies,
    }),
    []
  );
};
