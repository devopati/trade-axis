import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { bgColor, blackColor } from "@/constants/colors";
import { ScrollView } from "react-native-gesture-handler";

interface ScrollWrapperProps {
  children: React.ReactNode;
}

const ScrollWrapper: React.FC<ScrollWrapperProps> = (props) => {
  return (
    <View style={{ flex: 1, backgroundColor: bgColor }}>
      <ScrollView style={styles.scroll}>{props.children}</ScrollView>
    </View>
  );
};

export default ScrollWrapper;

const styles = StyleSheet.create({
  scroll: {
    paddingBottom: 100,
    paddingTop: 20,
    paddingHorizontal: 5,
  },
});
