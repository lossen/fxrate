import { Dispatch, SetStateAction } from "react";

export type TCurrency = "USD" | "AED" | "EUR";

export interface ICurrencyItem {
  id: number;
  currency: TCurrency;
}

export interface IFeeItem {
  currencyFrom: string;
  currencyTo: string;
  fxRate: number;
  fees: {
    percentage: number;
    fixed: number;
  };
}
export interface IAmount {
  currentAmount: number;
  setCurrentAmount: Dispatch<SetStateAction<number>>;
}
