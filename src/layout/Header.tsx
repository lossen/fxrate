import { View, Text, StyleSheet, ViewStyle, TextStyle } from "react-native";
import React, { FC } from "react";

const Header: FC<{ title: string }> = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create<IHeaderStyle>({
  header: {
    marginBottom: 24,
    flexDirection: "row",
    justifyContent: "center",
  },
  title: {
    //todo constants for colors
    color: "#B69FFB",
    letterSpacing: 0.4,
    fontSize: 16,
    fontWeight: "700",
  },
});

interface IHeaderStyle {
  header: ViewStyle;
  title: TextStyle;
}
