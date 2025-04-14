import { StyleSheet, Text, View, ViewStyle } from "react-native";
import React from "react";
import { bgColor, blackColor } from "@/constants/colors";
import { ScrollView } from "react-native-gesture-handler";

interface ScrollWrapperProps {
  children: React.ReactNode;
  style?: ViewStyle;
  refreshControl?: React.ReactElement;
}

const ScrollWrapper: React.FC<ScrollWrapperProps> = (props) => {
  return (
    <View style={{ flex: 1, backgroundColor: bgColor }}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        style={[styles.scroll, props.style]}
        refreshControl={props.refreshControl}
      >
        {props.children}
      </ScrollView>
    </View>
  );
};

export default ScrollWrapper;

const styles = StyleSheet.create({
  scroll: {
    paddingBottom: 150,
    paddingTop: 20,
    paddingHorizontal: 5,
  },
});
