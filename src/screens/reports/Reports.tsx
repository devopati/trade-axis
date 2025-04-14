import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import ScrollWrapper from "@/components/wrapper/ScrollWrapper";
import ReportContainer from "@/components/containers/ReportContainer";
import { whiteColor } from "@/constants/colors";
import UseAppHook from "@/hooks/UseAppHook";
import { RefreshControl } from "react-native-gesture-handler";

const Reports = () => {
  const { reports, getReportsAsync, loading } = UseAppHook();
  useEffect(() => {
    getReportsAsync();
  }, []);
  return (
    <ScrollWrapper
      refreshControl={
        <RefreshControl
          refreshing={loading}
          onRefresh={() => getReportsAsync()}
        />
      }
    >
      <Text style={styles.title}>Previous Week Reports</Text>
      <View style={{ gap: 20 }}>
        <ReportContainer plan="Free Plan" report={reports?.free} />
        <ReportContainer plan="Premium Plan" report={reports?.premium} />
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
