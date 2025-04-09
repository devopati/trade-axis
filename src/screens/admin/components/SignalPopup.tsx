import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Modal, Portal } from "react-native-paper";
import {
  darkBlueColor,
  darkGreenColor,
  darkRedColor,
  lightBlueColor,
  redColor,
} from "@/constants/colors";
import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";
import { SignalType } from "@/types/types";

const SignalPopup = ({
  visible,
  setVisible,
  signal,
}: {
  visible: boolean;
  setVisible: (arg: boolean) => void;
  signal?: SignalType | null;
}) => {
  const hideModal = () => setVisible(false);

  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={styles.modal}
      >
        <View style={styles.container}>
          <Pressable style={styles.btn}>
            <Text style={styles.text}>Select Signal</Text>
            <AntDesign name="checkcircle" size={19.5} color="white" />
          </Pressable>

          <Pressable style={styles.btn}>
            <Text style={styles.text}>Hit Take Profit</Text>
            <Feather name="check-circle" size={19.5} color={darkGreenColor} />
          </Pressable>

          <Pressable style={styles.btn}>
            <Text style={styles.text}>Hit Stop Loss</Text>
            <AntDesign name="closecircleo" size={19.5} color={redColor} />
          </Pressable>

          <Pressable style={styles.btn}>
            <Text style={styles.text}>Close Position</Text>
            <AntDesign name="minuscircle" size={19.5} color={darkRedColor} />
          </Pressable>

          <Pressable style={styles.btn}>
            <Text style={styles.text}>Edit Signal</Text>
            <Feather name="edit" size={19.5} color={lightBlueColor} />
          </Pressable>
        </View>
      </Modal>
    </Portal>
  );
};

export default SignalPopup;

const styles = StyleSheet.create({
  modal: {
    padding: 20,
    zIndex: 9999,
  },
  container: {
    backgroundColor: "#1D3641",
    padding: 20,
    gap: 30,
    borderRadius: 8,
  },
  btn: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    fontWeight: "500",
    color: "white",
  },
});
