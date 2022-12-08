import { useCallback, useEffect, useMemo } from "react";
import { fxRates } from "../mockApi/fxRates.json";

export const useFees = () => {
  const getFees = useCallback(() => {
    return new Promise((resolve) =>
      setTimeout(() => {
        resolve(fxRates);
      }, 3000)
    );
  }, []);

  useEffect(() => {
    getFees();
  }, []);

  return useMemo(
    () => ({
      getFees,
    }),
    []
  );
};
