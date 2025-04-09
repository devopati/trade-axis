import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { bgColor, blackColor } from "@/constants/colors";

const ViewWrapper = ({ children }: { children: React.ReactNode }) => {
  return <View style={{ flex: 1, backgroundColor: bgColor }}>{children}</View>;
};

export default ViewWrapper;

const styles = StyleSheet.create({});
