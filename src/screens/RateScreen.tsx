import React, { FC } from "react";
import { View } from "react-native";
import Button from "../components/Button";
import ConvertToCurrencyCard from "../components/ConvertToCurrencyCard";
import Header from "../layout/Header";
import ConvertFromCurrencyCard from "../components/ConvertFromCurrencyCard";
import { styles } from "../styles";

const RateScreen: FC = () => {
  return (
    <>
      <View style={styles.screen}>
        <Header title="Rates" />
        <View style={{ flex: 1 }}>
          <ConvertFromCurrencyCard />
          <ConvertToCurrencyCard />
        </View>
        <Button title="Next" disabled={false} />
      </View>
    </>
  );
};

export default RateScreen;
