import { Text, Pressable } from "react-native";
import React, { FC } from "react";
import { buttonStyle, styles } from "../styles";

const Button: FC<IButton> = ({ disabled, title }) => {
  return (
    <Pressable
      style={({ pressed }) => buttonStyle(pressed, disabled)}
      disabled={disabled}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
};

export default Button;

interface IButton {
  disabled: boolean;
  title: string;
}
