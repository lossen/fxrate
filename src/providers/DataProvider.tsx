import React, {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { ICurrencyItem, IFeeItem, TCurrency } from "../types";
import { currencies } from "../mockApi/currencies.json";
import { useAmount } from "../hooks/useAmount";
import { useCurrencies } from "../hooks/useCurrencies";
import { useFees } from "../hooks/useFees";

export const DataContext = createContext<IDataContext>({} as IDataContext);
export const useData = () => useContext(DataContext);

export const DataProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentAmount, setCurrentAmount] = useState<number>(0);

  const [currentFee, setCurrentFee] = useState<IFeeItem | null>(null);
  const [feeAmount, setFeeAmount] = useState<number>(0);
  const [currentCurrency, setCurrentCurrency] = useState<TCurrency>("USD");
  const [totalAmount, setTotalAmount] = useState<number>(0);

  const [currenciesList, setCurrenciesList] = useState<ICurrencyItem[]>([]);

  const [fees, setFees] = useState<IFeeItem[]>([]);
  const { getTotalAmount, getFeeAmount } = useAmount();
  const { getCurrencies } = useCurrencies();
  const { getFees } = useFees();

  const getData = useCallback(async () => {
    setIsLoading(true);
    const currenciesData = await getCurrencies();
    setCurrenciesList(currenciesData as ICurrencyItem[]);
    const feesData = await getFees();
    setFees(feesData as IFeeItem[]);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (currenciesList.length > 0 && fees.length > 0) {
      const fee = fees.find((f) => f.currencyFrom === currentCurrency);
      if (fee) setCurrentFee(fee);
    }
  }, [currentCurrency, currenciesList.length, fees.length]);

  useEffect(() => {
    if (currentFee?.fees.percentage && currentAmount) {
      const feeAmount = getFeeAmount(currentAmount, currentFee.fees.percentage);
      const totalAmount = getTotalAmount(currentAmount, feeAmount);
      setFeeAmount(feeAmount);
      setTotalAmount(totalAmount);
    }
  }, [currentAmount, currentFee, currentCurrency, fees.length]);

  const value = useMemo(
    () => ({
      currencies: currenciesList,
      fees,
      currentAmount,
      currentFee,
      totalAmount,
      currentCurrency,
      setCurrentAmount,
      setCurrentFee,
      setTotalAmount,
      setCurrentCurrency,
      isLoading,
      feeAmount,
    }),
    [
      currentAmount,
      currentCurrency,
      currentFee,
      totalAmount,
      fees.length,
      currencies.length,
      isLoading,
    ]
  );
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

interface IDataContext {
  currencies: ICurrencyItem[];
  fees: IFeeItem[];
  currentFee: IFeeItem | null;
  currentAmount: number;
  totalAmount: number;
  currentCurrency: TCurrency;
  setCurrentAmount: Dispatch<SetStateAction<number>>;
  setCurrentFee: Dispatch<SetStateAction<IFeeItem | null>>;
  setTotalAmount: Dispatch<SetStateAction<number>>;
  setCurrentCurrency: Dispatch<SetStateAction<TCurrency>>;
  isLoading: boolean;
  feeAmount: number;
}
