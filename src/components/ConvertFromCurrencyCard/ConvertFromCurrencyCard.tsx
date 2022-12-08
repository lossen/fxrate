import React, { FC } from "react";
import Amount from "../Amount/Amount";
import CurrencySwitcher from "../CurrencySwitcher/CurrencySwitcher";
import Card from "../../layout/Card";

const ConvertFromCurrencyCard: FC = () => {
  return (
    <Card>
      <CurrencySwitcher />
      <Amount />
    </Card>
  );
};

export default ConvertFromCurrencyCard;
