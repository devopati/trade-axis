import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  blackColor,
  darkBlueColor,
  darkgreen,
  whiteColor,
} from "@/constants/colors";
import { ReportType } from "@/types/types";

const ReportContainer = ({
  plan = "",
  report,
}: {
  plan: string;
  report?: ReportType;
}) => {
  return (
    <View style={[styles.container]}>
      <Text style={[styles.planText]}>{plan}</Text>

      <View style={styles.textCont}>
        <Text style={[styles.text]}>Total trades taken:</Text>
        <Text style={[styles.text, { color: whiteColor }]}>
          {report?.totalTradesTaken}
        </Text>
      </View>

      <View style={styles.textCont}>
        <Text style={[styles.text]}>Hit take profit:</Text>
        <Text style={[styles.text, { color: whiteColor }]}>
          {report?.totalHitTakeProfit}
        </Text>
      </View>

      <View style={styles.textCont}>
        <Text style={[styles.text]}>Hit stop loss:</Text>
        <Text style={[styles.text, { color: whiteColor }]}>
          {report?.totalHitStopLoss
            ? Number(report?.totalHitStopLoss) > 9
              ? report?.totalHitStopLoss
              : `0${report?.totalHitStopLoss}`
            : "0"}
        </Text>
      </View>

      <View style={styles.textCont}>
        <Text style={[styles.text]}>Percentage win rate:</Text>
        <Text style={[styles.text, { color: darkgreen }]}>
          {report?.percentageWinRate ? report?.percentageWinRate + "%" : "0%"}
        </Text>
      </View>
    </View>
  );
};

export default ReportContainer;

const styles = StyleSheet.create({
  container: {
    backgroundColor: darkBlueColor,
    borderRadius: 7,
    paddingHorizontal: 18,
    paddingVertical: 28,
    gap: 21,
    paddingBottom: 40,
  },
  planText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: whiteColor,
  },
  textCont: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    fontWeight: "500",
    fontSize: 15,
    color: whiteColor,
  },
});
