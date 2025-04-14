import { StyleSheet } from "react-native";
import React from "react";
import { FAB } from "react-native-paper";
import { darkRedColor, redColor } from "@/constants/colors";

const DeleteFab = ({
  onPress,
  visible,
  loading,
}: {
  onPress?: () => void;
  visible?: boolean;
  loading?: boolean;
}) => {
  return (
    <FAB
      visible={visible}
      icon={"delete"}
      loading={loading}
      style={styles.fab}
      onPress={onPress}
    />
  );
};

export default DeleteFab;

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    marginHorizontal: 16,
    marginVertical: 86,
    right: 0,
    bottom: 0,
    zIndex: 999,
    backgroundColor: redColor,
  },
});
