import React, { FC } from "react";
import Amount from "./Amount";
import CurrencySwitcher from "./CurrencySwitcher";
import Card from "../layout/Card";

const RateSwitcherItem: FC = () => {
  return (
    <Card>
      <CurrencySwitcher />
      <Amount />
    </Card>
  );
};

export default RateSwitcherItem;
