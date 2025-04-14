import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import ScrollWrapper from "@/components/wrapper/ScrollWrapper";
import DropdownTextInput from "@/components/text-input/DropdownTextInput";
import { Button, TextInput } from "react-native-paper";
import {
  darkBlueColor,
  darkGreenColor,
  darkRedColor,
  whiteColor,
} from "@/constants/colors";
import UseAppHook from "@/hooks/UseAppHook";

const AddSignal = () => {
  const [type, setType] = useState<string>("");
  const [plan, setPlan] = useState<string>("");
  const [pairName, setPairName] = useState<string>("");
  const [buyingPoint1, setBuyingPoint1] = useState<string>("");
  const [buyingPoint2, setBuyingPoint2] = useState<string>("");
  const [sellingPoint1, setSellingPoint1] = useState<string>("");
  const [sellingPoint2, setSellingPoint2] = useState<string>("");
  const [takeProfit1, setTakeProfit1] = useState<string>("");
  const [stopLoss, setStopLoss] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const { processing, postSignalHandlerAsync } = UseAppHook();

  const addSignalHandler = async () => {
    const data = {
      pairName,
      buyingPoint1,
      buyingPoint2,
      sellingPoint1,
      sellingPoint2,
      takeProfit1,
      stopLoss,
      description,
      subscriptionPlan: plan,
    };

    console.log(data);
    await postSignalHandlerAsync(data);
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

        <View style={styles.inputcont}>
          <Text style={styles.label}>Select Signal Type</Text>
          <DropdownTextInput
            dropDownData={[
              { label: "Buy Signal", value: "buy" },
              { label: "Sell Signal", value: "sell" },
            ]}
            setValue={setType}
            value={type}
          />
        </View>

        <View style={styles.inputcont}>
          <Text style={styles.label}>Add Pair Names</Text>
          <TextInput
            style={styles.input}
            mode="outlined"
            value={pairName}
            onChangeText={(t) => setPairName(t)}
          />
        </View>

        {type && (
          <View style={styles.flexinput}>
            <View style={[styles.inputcont, { width: "48.5%" }]}>
              <Text style={styles.label}>
                {type === "sell" ? "Selling Point 1" : "Buying Point 1"}
              </Text>
              <TextInput
                style={styles.input}
                mode="outlined"
                value={type === "sell" ? sellingPoint1 : buyingPoint1}
                onChangeText={(t) =>
                  type === "sell" ? setSellingPoint1(t) : setBuyingPoint1(t)
                }
              />
            </View>
            <View style={[styles.inputcont, { width: "48.5%" }]}>
              <Text style={styles.label}>
                {type === "sell" ? "Selling Point 2" : "Buying Point 2"}
              </Text>
              <TextInput
                style={styles.input}
                mode="outlined"
                value={type === "sell" ? sellingPoint2 : buyingPoint2}
                onChangeText={(t) =>
                  type === "sell" ? setSellingPoint2(t) : setBuyingPoint2(t)
                }
              />
            </View>
          </View>
        )}

        <View style={styles.inputcont}>
          <Text style={styles.label}>Take Profit Points</Text>
          <TextInput
            style={styles.input}
            mode="outlined"
            outlineColor={darkGreenColor}
            value={takeProfit1}
            onChangeText={(t) => setTakeProfit1(t)}
          />
        </View>

        <View style={styles.inputcont}>
          <Text style={styles.label}>Stop Loss Points</Text>
          <TextInput
            style={styles.input}
            mode="outlined"
            outlineColor={darkRedColor}
            value={stopLoss}
            onChangeText={(t) => setStopLoss(t)}
          />
        </View>

        <View style={styles.inputcont}>
          <Text style={styles.label}>Short Description (Optional)</Text>
          <TextInput
            multiline
            mode="outlined"
            outlineColor={darkRedColor}
            style={[{ height: 100 }, styles.input]}
            value={description}
            onChangeText={(t) => setDescription(t)}
          />
        </View>

        <View>
          <Button
            loading={processing}
            disabled={processing}
            onPress={addSignalHandler}
            style={{ padding: 2 }}
            mode="contained"
          >
            <Text style={styles.buttonText}>Post Signal</Text>
          </Button>
        </View>
      </View>
    </ScrollWrapper>
  );
};

export default AddSignal;

const styles = StyleSheet.create({
  container: {
    gap: 20,
    paddingBottom: 40,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: whiteColor,
  },
  inputcont: {
    gap: 8,
  },
  flexinput: {
    flexDirection: "row",
    gap: 12,
  },
  buttonText: {
    fontSize: 16,
  },
  input: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
