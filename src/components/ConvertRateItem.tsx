import React from 'react';
import currencies from './mockApi/currencies';
import {useState, useEffect, FC} from 'react';
import {View} from 'react-native';
import CurrencySwitcher from './CurrencySwitcher';
import Amount from './Amount';

const ConvertRateItem: FC = () => {
  const [currentCurrency, setCurrentCurrency] = useState<string>(currencies[0]);
  useEffect(() => {
    setCurrentCurrency(currencies[0]);
  }, []);
  return (
    <View>
      <CurrencySwitcher />
      <Amount value={1000} fee={17} currency={currency} />
    </View>
  );
};

export default ConvertRateItem;
