import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import ScrollWrapper from "@/components/wrapper/ScrollWrapper";
import { darkBlueColor, darkRedColor, whiteColor } from "@/constants/colors";
import { Button, TextInput } from "react-native-paper";
import DropdownTextInput from "@/components/text-input/DropdownTextInput";
import UseAppHook from "@/hooks/UseAppHook";

const SendNotification = () => {
  const [plan, setPlan] = useState<string>("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const { sendPushNotificationAsync, processing } = UseAppHook();

  const hanleSendNotification = async () => {
    const data = {
      plan,
      title,
      message,
    };
    await sendPushNotificationAsync(data);
  };

  return (
    <ScrollWrapper style={{ backgroundColor: darkBlueColor }}>
      <View style={styles.container}>
        <View style={styles.inputcont}>
          <Text style={styles.label}>Select Plan</Text>
          <DropdownTextInput
            dropDownData={[
              { label: "Free Plan", value: "free" },
              { label: "Premium Plan", value: "premium" },
            ]}
            setValue={setPlan}
            value={plan}
          />
        </View>

        <View style={[styles.inputcont]}>
          <Text style={styles.label}>Notification Title</Text>
          <TextInput
            style={styles.input}
            mode="outlined"
            value={title}
            onChangeText={(t) => setTitle(t)}
          />
        </View>

        <View style={styles.inputcont}>
          <Text style={styles.label}>Notification Message</Text>
          <TextInput
            multiline
            mode="outlined"
            outlineColor={darkRedColor}
            style={[{ height: 100 }, styles.input]}
            value={message}
            onChangeText={(t) => setMessage(t)}
          />
        </View>

        <View>
          <Button
            loading={processing}
            disabled={processing}
            onPress={hanleSendNotification}
            style={{ padding: 2 }}
            mode="contained"
          >
            <Text style={styles.buttonText}>Send Push Notification</Text>
          </Button>
        </View>
      </View>
    </ScrollWrapper>
  );
};

export default SendNotification;

const styles = StyleSheet.create({
  container: {
    gap: 30,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: whiteColor,
  },
  inputcont: {
    gap: 8,
  },
  input: {
    fontWeight: "bold",
    fontSize: 16,
  },
  buttonText: {
    fontSize: 16,
  },
});
