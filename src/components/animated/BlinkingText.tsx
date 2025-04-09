import React, { useEffect, useRef } from "react";
import { Animated, View, StyleSheet, TextStyle } from "react-native";

type BlinkingTextProps = {
  text: string;
  blinkInterval?: number;
};

const BlinkingText: React.FC<BlinkingTextProps> = ({
  text,
  blinkInterval = 600,
}) => {
  const opacity = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const animate = () => {
      Animated.timing(opacity, {
        toValue: 0,
        duration: blinkInterval,
        useNativeDriver: true,
      }).start(() => {
        Animated.timing(opacity, {
          toValue: 1,
          duration: blinkInterval / 2,
          useNativeDriver: true,
        }).start(animate);
      });
    };

    animate();

    return () => {
      opacity.stopAnimation();
    };
  }, [blinkInterval, opacity]);

  return (
    <View>
      <Animated.Text style={[styles.blinkText, { opacity }]}>
        {text}
      </Animated.Text>
    </View>
  );
};

export default BlinkingText;

const styles = StyleSheet.create({
  blinkText: {
    fontWeight: "900",
    color: "#39D98A",
    textTransform: "uppercase",
  } as TextStyle,
});
