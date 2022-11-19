import { View, Text } from "react-native";
import React, { FC, ReactNode } from "react";
import { styles } from "../styles";

const Card: FC<{ children: ReactNode }> = ({ children }) => {
  return <View style={styles.card}>{children}</View>;
};

export default Card;
