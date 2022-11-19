import React, { useCallback } from "react";

export const useAmount = () => {
  const getValidNumberAmount = useCallback((text: string) => {
    const onlyNumericAndComma = text.replace(/[^0-9\.]/g, "");
    const isValidNumber = !isNaN(Number(onlyNumericAndComma));
    if (isValidNumber) {
      return Number(onlyNumericAndComma);
    }
  }, []);

  const getFeeAmount = useCallback(
    (currentAmount: number, percentage: number) => {
      return (currentAmount * percentage) / 100;
    },
    []
  );
  const getTotalAmount = useCallback(
    (currentAmount: number, percentage: number) => {
      return currentAmount + getFeeAmount(currentAmount, percentage);
    },
    []
  );

  return {
    getValidNumberAmount,
    getFeeAmount,
    getTotalAmount,
  };
};
