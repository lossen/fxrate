import React from "react";
import "react-native";

import { renderHook } from "@testing-library/react-native";
import { useAmount } from "./useAmount";

const { result } = renderHook(() => useAmount());

describe("first", () => {
  const fee = result.current.getFeeAmount(1000, 1.1);
  describe("Get fee amount", () => {
    it("should be defined", () => {
      expect(result.current.getFeeAmount).toBeDefined();
    });
    it("should return correct fee amount", () => {
      const { result } = renderHook(() => useAmount());
      expect(fee).toBe(11);
    });
  });

  describe("getTotalAmount", () => {
    it("should be defined ", () => {
      expect(result.current.getTotalAmount).toBeDefined();
    });
    it("should return correct total amount ", () => {
      expect(result.current.getTotalAmount(1000, fee)).toBe(1011);
    });
  });
  describe("getValidNumberAmount", () => {
    it("should be defined ", () => {
      expect(result.current.getValidNumberAmount).toBeDefined();
    });
    it("should return valid number ", () => {
      expect(result.current.getValidNumberAmount("1000")).toBe(1000);
    });
  });
});
