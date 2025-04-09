import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Dimensions,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { darkBlueColor, whiteColor, yellowColor } from "@/constants/colors";

const FaqContainer = ({ data }: { data: { title: string; desc: string } }) => {
  const [isVisible, setIsVisible] = useState(false);
  const animation = useRef(new Animated.Value(0)).current;

  const toggleVisibility = () => {
    const finalValue = isVisible ? 0 : 1;
    setIsVisible(!isVisible);

    Animated.timing(animation, {
      toValue: finalValue,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const heightInterpolation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 100],
  });

  const opacityInterpolation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleVisibility}>
        <View style={styles.titleContainer}>
          <Text allowFontScaling={false} style={[styles.title]}>
            {data?.title}
          </Text>
          {isVisible ? (
            <Entypo name="chevron-small-up" size={24} color={whiteColor} />
          ) : (
            <Entypo name="chevron-small-down" size={24} color={whiteColor} />
          )}
        </View>
      </TouchableOpacity>
      <Animated.View
        style={[
          styles.paragraphContainer,
          { height: heightInterpolation, opacity: opacityInterpolation },
        ]}
      >
        <Text allowFontScaling={false} style={[styles.paragraph]}>
          {data?.desc}
        </Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: darkBlueColor,
    justifyContent: "center",
    borderRadius: 5,
  },
  title: {
    fontSize: 17,
    fontWeight: "bold",
    marginBottom: 10,
    width: Dimensions.get("window").width - 70,
    color: yellowColor,
  },
  paragraphContainer: {
    overflow: "hidden",
  },
  paragraph: {
    fontSize: 16,
    color: whiteColor,
    lineHeight: 24,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default FaqContainer;
