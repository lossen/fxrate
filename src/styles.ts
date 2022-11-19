import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { colors } from "./constants";

export const styles = StyleSheet.create<IStyles>({
  currencyText: {
    color: colors.gray,
    fontSize: 16,
    fontWeight: "700",
    height: 24,
    paddingRight: 10,
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingTop: 24,
    paddingBottom: 24,
    paddingLeft: 16,
    paddingRight: 16,
    marginBottom: 40,
    shadowColor: colors.black,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,

    elevation: 12,
  },
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
  bigAmountText: {
    color: colors.black,
    fontSize: 16,
    fontWeight: "700",
    textAlign: "right",
    height: 24,
  },
  amountColumn: {
    flexDirection: "column",
    alignItems: "flex-end",
  },
  screen: {
    padding: 16,
    paddingTop: 56,
    paddingBottom: 0,
    backgroundColor: colors.white,
    flex: 1,
    flexDirection: "column",
  },
  switcher: {
    flexDirection: "row",
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
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.5)",
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
    zIndex: 10,
    marginTop: 20,
  },
});

export const buttonStyle = (pressed: boolean, isButtonDisabled: boolean) =>
  isButtonDisabled
    ? { ...styles.button, ...styles.buttonDisabled }
    : pressed
    ? { ...styles.button, ...styles.buttonPressed }
    : styles.button;

interface IStyles {
  currencyText: TextStyle;
  card: ViewStyle;
  smallText: TextStyle;
  violetText: TextStyle;
  greenText: TextStyle;
  amountColumn: ViewStyle;
  screen: ViewStyle;
  switcher: ViewStyle;
  bigAmountText: TextStyle;
  button: ViewStyle;
  buttonPressed: ViewStyle;
  buttonDisabled: ViewStyle;
  loading: ViewStyle;
  buttonText: TextStyle;
}
