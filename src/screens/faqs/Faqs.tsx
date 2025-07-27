import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ScrollWrapper from "@/components/wrapper/ScrollWrapper";
import { FaqData } from "@/data/faq-data";
import FaqContainer from "@/components/containers/FaqContainer";
import { whiteColor } from "@/constants/colors";
import { SafeAreaView } from "react-native-safe-area-context";

const Faqs = () => {
  return (
    <>
      <SafeAreaView style={{ backgroundColor: "black" }} />
      <ScrollWrapper>
        <Text style={styles.title}>Frequently Asked Questions</Text>
        <View style={{ gap: 5, paddingBottom: 50 }}>
          {FaqData.map((data, index) => {
            return <FaqContainer key={index} data={data} />;
          })}
        </View>
      </ScrollWrapper>
    </>
  );
};

export default Faqs;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: whiteColor,
  },
});
