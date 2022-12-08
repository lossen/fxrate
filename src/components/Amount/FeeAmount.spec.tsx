import React from "react";
import "react-native";
import FeeAmount from "./FeeAmount";
import renderer from "react-test-renderer";

it("shows correct fee amount", () => {
  renderer.create(<FeeAmount feeAmount={11} currentCurrency="USD" />);
});
