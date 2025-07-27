import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { blackColor } from "@/constants/colors";

const BottomTabsHeader = ({ title }: { title: string }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default BottomTabsHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: blackColor,
  },
  title: {
    color: "white",
    fontSize: 20,
    padding: 10,
    fontWeight: "500",
    textTransform: "capitalize",
    textAlign: "center",
  },
});
