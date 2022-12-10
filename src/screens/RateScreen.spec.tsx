import React from "react";
import "react-native";
import renderer from "react-test-renderer";
import RateScreen from "./RateScreen";

describe("RateScreen", () => {
  it("should match snapshot", () => {
    const tree = renderer.create(<RateScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
