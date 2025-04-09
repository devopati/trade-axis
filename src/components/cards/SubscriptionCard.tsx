import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { darkBlueColor, yellowColor } from "@/constants/colors";
import { Button } from "react-native-paper";

interface SubscriptionCardProps {
  plan: any;
}

const SubscriptionCard: React.FC<SubscriptionCardProps> = ({ plan }) => {
  return (
    <View style={styles.container}>
      <View style={{ gap: 7 }}>
        <Text style={styles.title}>Monthly</Text>
        <Text style={styles.text}>Ksh 6,000.00</Text>
      </View>

      <View>
        <Button
          mode="contained"
          buttonColor={yellowColor}
          style={{ borderRadius: 6, paddingHorizontal: 24, paddingVertical: 4 }}
        >
          <Text
            style={[styles.text, { color: darkBlueColor, fontWeight: "600" }]}
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
    backgroundColor: darkBlueColor,
    paddingVertical: 18,
    paddingHorizontal: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 9,
    paddingLeft: 55,
  },
  title: {
    fontSize: 21,
    color: "#fff",
  },
  text: {
    fontSize: 16,
    color: "#fff",
  },
});
