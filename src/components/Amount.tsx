import { View, Text, TextInput } from "react-native";
import React, { FC, useCallback } from "react";
import { styles } from "../styles";
import { useAmount } from "../hooks/useAmount";
import { colors } from "../constants";
import { useData } from "../providers/DataProvider";

const Amount: FC = () => {
  const {
    setCurrentAmount,
    currentAmount,
    currentFee,
    totalAmount,
    currentCurrency,
  } = useData();

  const { getValidNumberAmount } = useAmount();

  const handleChangeText = useCallback(
    (text: string) => {
      if (!text) setCurrentAmount(0);
      const amount = getValidNumberAmount(text);
      if (amount) setCurrentAmount(amount);
    },
    [currentAmount]
  );

  const calcFeeAmount = (totalAmount - currentAmount).toFixed();
  return (
    <View style={styles.amountColumn}>
      <TextInput
        style={styles.bigAmountText}
        value={currentAmount.toString()}
        onChangeText={handleChangeText}
        keyboardType="numbers-and-punctuation"
        placeholder="0"
        placeholderTextColor={colors.black}
      ></TextInput>
      {currentFee && currentFee.fees ? (
        <>
          <Text
            style={[styles.smallText, styles.violetText]}
          >{`Fee (incl.VAT): ${currentCurrency} ${calcFeeAmount}`}</Text>
          <Text
            style={[styles.smallText, styles.greenText]}
          >{`Total to pay: ${currentCurrency} ${totalAmount.toFixed(2)}`}</Text>
        </>
      ) : null}
    </View>
  );
};

export default Amount;
