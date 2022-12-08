import { View, Text } from "react-native";
import React, { FC, useCallback, useEffect, useState } from "react";
import { styles } from "../../styles";
import { TCurrency } from "../../types";

const FeeAmount: FC<{ feeAmount: number; currentCurrency: TCurrency }> = ({
  feeAmount,
  currentCurrency,
}) => {
  return (
    <View>
      <Text
        style={[styles.smallText, styles.violetText]}
      >{`Fee (incl.VAT): ${currentCurrency} ${feeAmount.toFixed(2)}`}</Text>
    </View>
  );
};

export default FeeAmount;
