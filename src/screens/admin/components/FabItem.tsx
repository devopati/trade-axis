import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FAB } from "react-native-paper";

const FabItem = ({
  onPress,
  visible,
}: {
  onPress?: () => void;
  visible?: boolean;
}) => {
  return (
    <FAB
      icon={visible ? "close" : "menu"}
      style={styles.fab}
      onPress={onPress}
    />
  );
};

export default FabItem;

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
    zIndex: 999,
  },
});
