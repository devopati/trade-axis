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
import { NavigationPropType, SignalType } from "@/types/types";
import { useNavigation } from "@react-navigation/native";
import { adminScreenNames } from "@/constants/screen-names";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import UseAppHook from "@/hooks/UseAppHook";

const SignalPopup = ({
  visible,
  setVisible,
  signal,
}: {
  visible: boolean;
  setVisible: (arg: boolean) => void;
  signal?: SignalType | null;
}) => {
  const navigation = useNavigation<NavigationPropType>();
  const hideModal = () => setVisible(false);

  const { editSignalAsync } = UseAppHook();

  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={styles.modal}
      >
        <View style={styles.container}>
          <Pressable
            style={styles.btn}
            onPress={() => {
              const data = signal ?? ({} as SignalType);
              data["hitTakeProfit"] = true;
              hideModal();
              editSignalAsync(data);
            }}
          >
            <Text style={styles.text}>Hit Take Profit</Text>
            <Feather name="check-circle" size={19.5} color={darkGreenColor} />
          </Pressable>

          <Pressable
            style={styles.btn}
            onPress={() => {
              const data = signal ?? ({} as SignalType);
              data["hitTakeProfit"] = false;
              hideModal();
              editSignalAsync(data);
            }}
          >
            <Text style={styles.text}>Hit Stop Loss</Text>
            <AntDesign name="closecircleo" size={19.5} color={redColor} />
          </Pressable>

          <Pressable
            style={styles.btn}
            onPress={() => {
              const data = signal ?? ({} as SignalType);
              data["isClosed"] = true;
              hideModal();
              editSignalAsync(data);
            }}
          >
            <Text style={styles.text}>Close Position</Text>
            <AntDesign name="minuscircle" size={19.5} color={darkRedColor} />
          </Pressable>

          <Pressable
            style={styles.btn}
            onPress={() => {
              hideModal();
              navigation.navigate(adminScreenNames.EDIT_SIGNAL, {
                signal,
              });
            }}
          >
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
