import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { colors } from "./constants";

export const styles = StyleSheet.create<IStyles>({
  smallText: {
    fontSize: 12,
    fontWeight: "500",
    lineHeight: 16,
    marginBottom: 4,
  },
  violetText: {
    color: colors.violet,
  },
  greenText: {
    color: colors.green,
  },

  screen: {
    padding: 16,
    paddingTop: 56,
    paddingBottom: 0,
    backgroundColor: colors.white,
    flex: 1,
    flexDirection: "column",
  },

  button: {
    height: 64,
    backgroundColor: colors.blue,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
  },
  buttonPressed: {
    backgroundColor: colors.lightBlue,
  },
  buttonDisabled: {
    backgroundColor: colors.lightGray,
  },
  buttonText: {
    fontWeight: "700",
    fontSize: 24,
    lineHeight: 28,
    letterSpacing: 0.4,
    color: colors.white,
  },
});

export const buttonStyle = (pressed: boolean, isButtonDisabled: boolean) =>
  isButtonDisabled
    ? { ...styles.button, ...styles.buttonDisabled }
    : pressed
    ? { ...styles.button, ...styles.buttonPressed }
    : styles.button;

interface IStyles {
  smallText: TextStyle;
  violetText: TextStyle;
  greenText: TextStyle;
  screen: ViewStyle;
  button: ViewStyle;
  buttonPressed: ViewStyle;
  buttonDisabled: ViewStyle;
  buttonText: TextStyle;
}
