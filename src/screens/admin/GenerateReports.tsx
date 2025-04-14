import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import ScrollWrapper from "@/components/wrapper/ScrollWrapper";
import { darkBlueColor, whiteColor } from "@/constants/colors";
import DropdownTextInput from "@/components/text-input/DropdownTextInput";
import { Button, TextInput } from "react-native-paper";
import UseAppHook from "@/hooks/UseAppHook";

const GenerateReports = () => {
  const [plan, setPlan] = useState<string>("");
  const [totalHitTakeProfit, setTotalHitTakeProfit] = useState(0);
  const [totalHitStopLoss, setTotalHitStopLoss] = useState(0);

  const { updateWeeklyReportAsync, processing } = UseAppHook();

  const onUpdateReport = async () => {
    const report = {
      totalHitTakeProfit,
      totalHitStopLoss,
      planName: plan,
    };
    updateWeeklyReportAsync(report);
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

        <View style={styles.flexinput}>
          <View style={[styles.inputcont, { width: "48.5%" }]}>
            <Text style={styles.label}>Total Hit Take Profit</Text>
            <TextInput
              style={styles.input}
              mode="outlined"
              value={totalHitTakeProfit.toString()}
              onChangeText={(t) => setTotalHitTakeProfit(Number(t))}
            />
          </View>
          <View style={[styles.inputcont, { width: "48.5%" }]}>
            <Text style={styles.label}>Total Hit Stop loss</Text>
            <TextInput
              style={styles.input}
              mode="outlined"
              value={totalHitStopLoss.toString()}
              onChangeText={(t) => setTotalHitStopLoss(Number(t))}
            />
          </View>
        </View>

        <View style={styles.flexinput}>
          <View style={[styles.inputcont, { width: "48.5%" }]}>
            <Text style={styles.label}>Total Trades Taken</Text>
            <TextInput
              style={styles.input}
              mode="outlined"
              value={(totalHitTakeProfit + totalHitStopLoss).toString()}
              editable={false}
              // onChangeText={(t) => setTotalHitTakeProfit(Number(t))}
            />
          </View>
          <View style={[styles.inputcont, { width: "48.5%" }]}>
            <Text style={styles.label}>Percentage Win</Text>
            <TextInput
              style={styles.input}
              mode="outlined"
              value={(
                (totalHitTakeProfit * 100) /
                (totalHitTakeProfit + totalHitStopLoss)
              )
                .toFixed(0)
                .toString()}
              // onChangeText={(t) => setTotalHitStopLoss(Number(t))}
            />
          </View>
        </View>

        <View>
          <Button
            loading={processing}
            disabled={processing}
            onPress={onUpdateReport}
            style={{ padding: 2 }}
            mode="contained"
          >
            <Text style={styles.buttonText}>Update Report</Text>
          </Button>
        </View>
      </View>
    </ScrollWrapper>
  );
};

export default GenerateReports;

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
  flexinput: {
    flexDirection: "row",
    gap: 12,
  },
  buttonText: {
    fontSize: 16,
  },
});
