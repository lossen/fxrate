import { Animated, View } from "react-native";
import React, { FC, useEffect, useRef } from "react";
import { styles } from "../styles";
import { colors } from "../constants";

const Loading: FC<{ isLoading: boolean }> = ({ isLoading }) => {
  const progress = useRef(new Animated.Value(0.5)).current;
  const scale = useRef(new Animated.Value(1)).current;
  const background = useRef(new Animated.Value(0)).current;
  const SIZE = 50;
  const MAX_SIZE = 2;

  useEffect(() => {
    Animated.loop(
      Animated.parallel([
        Animated.sequence([
          Animated.timing(progress, {
            toValue: 1,
            useNativeDriver: true,
          }),
          Animated.timing(progress, {
            toValue: 0.5,
            useNativeDriver: true,
          }),
        ]),
        Animated.sequence([
          Animated.spring(scale, {
            toValue: MAX_SIZE,
            useNativeDriver: true,
          }),
          Animated.spring(scale, {
            toValue: 1,
            useNativeDriver: true,
          }),
          Animated.sequence([
            Animated.timing(background, {
              toValue: 1,
              useNativeDriver: true,
            }),
          ]),
        ]),
      ])
    ).start();
  }, []);

  return isLoading ? (
    <View style={styles.loading}>
      <Animated.View
        style={{
          //   backgroundColor: background.interpolate({
          //     inputRange: [0, 0.5, 1],
          //     outputRange: [colors.blue, colors.violet, colors.blue],
          //   }),
          backgroundColor: colors.blue,
          height: SIZE,
          width: SIZE,
          borderRadius: progress.interpolate({
            inputRange: [0.5, MAX_SIZE],
            outputRange: [SIZE / 4, SIZE / 2],
          }),
          transform: [
            {
              rotate: progress.interpolate({
                inputRange: [0.5, MAX_SIZE],
                outputRange: ["180deg", "360deg"],
              }),
            },
            { perspective: 1000 },
            {
              scale,
            },
          ],
        }}
      />
    </View>
  ) : null;
};

export default Loading;
