import { View, Text } from "react-native";
import React, { FC, useEffect, useState } from "react";
import { styles } from "../styles";
import { TCurrency } from "../types";
import Card from "../layout/Card";
import { useData } from "../providers/DataProvider";

const ConvertToCurrencyCard: FC = () => {
  const { currentCurrency, totalAmount, currentFee } = useData();

  const [convertToCurrency, setConvertToCurrency] = useState<TCurrency>("EUR");
  const [convertToAmount, setConvertToAmount] = useState<number>(0);

  useEffect(() => {
    if (currentFee?.fxRate)
      setConvertToAmount(Number((totalAmount * currentFee.fxRate).toFixed(2)));
  }, [currentCurrency, totalAmount, currentFee]);

  return (
    <Card>
      <View>
        <Text style={styles.currencyText}>{convertToCurrency}</Text>
        {currentFee?.fxRate && (
          <Text
            style={[styles.smallText, styles.violetText]}
          >{`1 ${currentCurrency} =  ${currentFee.fxRate} ${convertToCurrency}`}</Text>
        )}
      </View>
      <View>
        <Text style={styles.bigAmountText}>{convertToAmount}</Text>
      </View>
    </Card>
  );
};

export default ConvertToCurrencyCard;
