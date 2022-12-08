import { View, Text } from "react-native";
import React, { FC } from "react";
import { styles } from "../../styles";
import { TCurrency } from "../../types";

const TotalAmount: FC<{ currentCurrency: TCurrency; totalAmount: number }> = ({
  currentCurrency,
  totalAmount,
}) => {
  return (
    <View>
      <Text
        style={[styles.smallText, styles.greenText]}
      >{`Total to pay: ${currentCurrency} ${totalAmount.toFixed(2)}`}</Text>
    </View>
  );
};

export default TotalAmount;
