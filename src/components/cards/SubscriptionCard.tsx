import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  darkBlueColor,
  darkGreenColor,
  whiteColor,
  yellowColor,
} from "@/constants/colors";
import { Button } from "react-native-paper";
import { PurchasesPackage } from "react-native-purchases";
import { PlanConstants } from "@/constants/plan-contants";

interface SubscriptionCardProps {
  plan: PurchasesPackage;
  onPurchasePlan: () => void;
}

const SubscriptionCard: React.FC<SubscriptionCardProps> = ({
  plan,
  onPurchasePlan,
}) => {
  return (
    <View style={styles.container}>
      <View style={{ gap: 7 }}>
        <Text style={styles.title} allowFontScaling={false}>
          {plan.identifier === PlanConstants.MONTHLY
            ? "MONTHLY"
            : plan.identifier === PlanConstants.THREE_MONTHS
            ? "THREE MONTHS"
            : plan.identifier === PlanConstants.SIX_MONTHS
            ? "SIX MONTHS"
            : "YEARLY"}
        </Text>
        <Text style={styles.text} allowFontScaling={false}>
          {plan.product.priceString}
        </Text>
      </View>

      <View>
        <Button
          mode="contained"
          buttonColor={darkGreenColor}
          onPress={onPurchasePlan}
          style={{ borderRadius: 6, paddingHorizontal: 24, paddingVertical: 4 }}
        >
          <Text
            allowFontScaling={false}
            style={[styles.text, { color: whiteColor, fontWeight: "600" }]}
          >
            Subscribe
          </Text>
        </Button>
      </View>
    </View>
  );
};

export default SubscriptionCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#070816",
    paddingVertical: 18,
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 14,
    paddingLeft: 55,
  },
  title: {
    fontSize: 18,
    color: "#fff",
  },
  text: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
});
