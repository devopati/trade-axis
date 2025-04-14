import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button, Modal, Portal, TextInput } from "react-native-paper";

import UseAppHook from "@/hooks/UseAppHook";
import { whiteColor } from "@/constants/colors";

const LoginPopup = ({
  visible,
  setVisible,
}: {
  visible: boolean;
  setVisible: (arg: boolean) => void;
}) => {
  const hideModal = () => setVisible(false);

  const { loginAdminAsync, loading } = UseAppHook();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const loginHandler = async () => {
    const data = {
      email: email.toLowerCase(),
      password,
    };

    try {
      await loginAdminAsync(data);
      hideModal();
    } catch (error) {}
  };

  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={styles.modal}
      >
        <View style={styles.container}>
          <View style={styles.inputcont}>
            <Text style={styles.label}>Your Email</Text>
            <TextInput
              style={styles.input}
              mode="outlined"
              value={email}
              onChangeText={(t) => setEmail(t)}
            />
          </View>
          <View style={styles.inputcont}>
            <Text style={styles.label}>Your Password</Text>
            <TextInput
              style={styles.input}
              mode="outlined"
              value={password}
              onChangeText={(t) => setPassword(t)}
              secureTextEntry
            />
          </View>

          <View>
            <Button
              loading={loading}
              disabled={loading}
              onPress={loginHandler}
              style={{ padding: 2 }}
              mode="contained"
            >
              <Text style={styles.buttonText}>Authenticate</Text>
            </Button>
          </View>
        </View>
      </Modal>
    </Portal>
  );
};

export default LoginPopup;

const styles = StyleSheet.create({
  modal: {
    padding: 20,
    zIndex: 9999,
  },
  container: {
    backgroundColor: "#1D3641",
    padding: 30,
    gap: 20,
    borderRadius: 8,
  },
  input: {
    fontWeight: "bold",
    fontSize: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: whiteColor,
  },
  inputcont: {
    gap: 8,
  },
  buttonText: {
    fontSize: 16,
  },
});
