import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ScrollWrapper from "@/components/wrapper/ScrollWrapper";
import ReportContainer from "@/components/containers/ReportContainer";
import { whiteColor } from "@/constants/colors";

const Reports = () => {
  return (
    <ScrollWrapper>
      <Text style={styles.title}>Previous Week Reports</Text>
      <View style={{ gap: 20 }}>
        <ReportContainer plan="Free Plan" />
        <ReportContainer plan="Premium Plan" />
      </View>
    </ScrollWrapper>
  );
};

export default Reports;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: whiteColor,
  },
});
