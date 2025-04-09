import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Modal, Portal } from "react-native-paper";
import Ionicons from "@expo/vector-icons/Ionicons";
import { darkRedColor } from "@/constants/colors";
import Entypo from "@expo/vector-icons/Entypo";

const MenuPopup = ({
  visible,
  setVisible,
}: {
  visible: boolean;
  setVisible: (arg: boolean) => void;
}) => {
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={styles.containerStyle}
      >
        <View style={{ gap: 40 }}>
          <Pressable style={styles.btn}>
            <Ionicons name="add-circle-sharp" size={24} color={darkRedColor} />
            <Text style={styles.text}>Add New Signal</Text>
          </Pressable>

          <Pressable style={styles.btn}>
            <Ionicons name="notifications" size={24} color={darkRedColor} />
            <Text style={styles.text}>Send Notification</Text>
          </Pressable>

          <Pressable style={styles.btn}>
            <Entypo name="bar-graph" size={24} color={darkRedColor} />
            <Text style={styles.text}>Generate Reports</Text>
          </Pressable>
        </View>
      </Modal>
    </Portal>
  );
};

export default MenuPopup;

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: "#1D3641",
    padding: 20,
    zIndex: 999,
    marginHorizontal: 10,
    width: 230,
    position: "absolute",
    bottom: 100,
    right: 5,
    borderRadius: 9,
  },
  btn: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    fontWeight: "500",
    color: "white",
  },
});
