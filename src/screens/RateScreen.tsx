import React, { FC } from "react";
import { Text, View } from "react-native";
import Button from "../components/Button";
import ConvertToCurrencyCard from "../components/ConvertToCurrencyCard";
import Header from "../layout/Header";
import ConvertFromCurrencyCard from "../components/ConvertFromCurrencyCard";
import { useData } from "../providers/DataProvider";
import { styles } from "../styles";
import Loading from "../components/Loading";

const RateScreen: FC = () => {
  const { currentAmount, isLoading } = useData();
  const isButtonDisabled = currentAmount > 1000;

  return (
    <>
      <View style={styles.screen}>
        <Header title="Rates" />
        <View style={{ flex: 1 }}>
          <ConvertFromCurrencyCard />
          <ConvertToCurrencyCard />
        </View>
        <Button title="Next" disabled={isButtonDisabled} />
      </View>
      <Loading isLoading={isLoading} />
    </>
  );
};

export default RateScreen;
