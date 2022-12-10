import React, { FC, useCallback, useContext } from "react";
import { Pressable, Text, View } from "react-native";
import { styles } from "../../styles";
import { TCurrency } from "../../types";
import Icon from "react-native-vector-icons/FontAwesome";
import { colors } from "../../constants";
import { DataContext } from "../../providers/DataProvider";

const CurrencySwitcher: FC = () => {
  const { currencies, setCurrentCurrency, currentCurrency } =
    useContext(DataContext);
  if (!currencies) return null;

  const handleChangeCurrency = useCallback(() => {
    //todo popup
    const res =
      currentCurrency === currencies[0].currency
        ? currencies[1].currency
        : currencies[0].currency;
    return setCurrentCurrency(res as TCurrency);
  }, [currentCurrency, currencies.length]);

  return (
    <Pressable onPress={handleChangeCurrency} disabled={currencies.length < 1}>
      <View style={styles.switcher}>
        <Text style={styles.currencyText}>{currentCurrency}</Text>
        <Icon name="chevron-down" size={16} color={colors.black} />
      </View>
    </Pressable>
  );
};

export default CurrencySwitcher;
