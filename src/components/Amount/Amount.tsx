import { View, Text, TextInput } from "react-native";
import React, { FC, useCallback } from "react";
import { styles } from "../../styles";
import { useAmount } from "../../hooks/useAmount";
import { colors } from "../../constants";
import { useData } from "../../providers/DataProvider";
import FeeAmount from "./FeeAmount";
import TotalAmount from "./TotalAmount";

const Amount: FC = () => {
  const {
    setCurrentAmount,
    currentAmount = 0,
    currentFee,
    totalAmount,
    currentCurrency,
    feeAmount,
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
          <FeeAmount feeAmount={feeAmount} currentCurrency={currentCurrency} />
          <TotalAmount
            currentCurrency={currentCurrency}
            totalAmount={totalAmount}
          />
        </>
      ) : null}
    </View>
  );
};

export default Amount;
