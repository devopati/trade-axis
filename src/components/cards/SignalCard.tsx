import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  bgColor,
  darkBlueColor,
  darkgreen,
  darkRedColor,
  greenColor,
  lightBlueColor,
  redColor,
} from "@/constants/colors";
import BlinkingText from "../animated/BlinkingText";
import { SignalType } from "@/types/types";
import { readableTimeFormat } from "@/utils/readable-time-format";
import { Image } from "react-native";

interface SignalCardProps {
  signal: SignalType;
  onPress?: () => void;
  selected?: boolean;
  onLongPress?: () => void;
}

const SignalCard: React.FC<SignalCardProps> = ({
  signal,
  onPress,
  selected,
  onLongPress,
}) => {
  return (
    <Pressable
      style={[
        styles.container,
        selected && { backgroundColor: lightBlueColor },
      ]}
      onPress={onPress}
      onLongPress={onLongPress}
    >
      <View style={styles.left}>
        <View style={styles.top}>
          {/* <MaterialIcons name="candlestick-chart" size={28} color="white" /> */}
          <Image
            source={require("../../../assets/images/logo.png")}
            style={styles.logo}
          />
          <Text style={styles.title}>{signal?.pairName}</Text>
        </View>
        <Text allowFontScaling={false} style={styles.text}>
          Entry:{" "}
          {signal?.buyingPoint1 ? signal?.buyingPoint1 : signal?.sellingPoint1}
        </Text>
        <Text allowFontScaling={false} style={styles.text}>
          TO:{" "}
          {signal?.buyingPoint2 ? signal?.buyingPoint2 : signal?.sellingPoint2}
        </Text>
      </View>

      <View style={styles.left}>
        <Text
          allowFontScaling={false}
          style={[
            styles.title,
            { color: signal?.buyingPoint1 ? lightBlueColor : redColor },
          ]}
        >
          {signal?.buyingPoint1 ? "BUY" : "SELL"}
        </Text>
        <Text style={styles.text}>TP: {signal?.takeProfit1}</Text>
        <Text
          allowFontScaling={false}
          style={[
            styles.text,
            {
              color:
                signal?.hitTakeProfit === true
                  ? darkgreen
                  : signal?.hitTakeProfit === false
                  ? darkRedColor
                  : bgColor,
            },
          ]}
        >
          {/* Outcome:{" "} */}
          {signal?.hitTakeProfit === true
            ? "Take Profit Hit"
            : signal?.isClosed
            ? "Closed"
            : signal.hitTakeProfit === false
            ? "Stop Loss Hit"
            : "___"}
        </Text>
      </View>

      <View style={styles.left}>
        <Text style={[styles.text, { color: bgColor, marginBottom: 4.5 }]}>
          {readableTimeFormat(signal?.postedAt ?? "")}
        </Text>
        <Text style={styles.text}>SL: {signal?.stopLoss}</Text>
        <Text style={styles.text}>
          {signal?.hitTakeProfit !== undefined ||
          signal?.isClosed !== undefined ? (
            "Closed"
          ) : (
            <BlinkingText text="ACTIVE" />
          )}
        </Text>
      </View>
    </Pressable>
  );
};

export default SignalCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#070816",
    padding: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 14,
  },
  text: {
    color: "white",
    fontSize: 15,
    marginTop: 5,
    fontWeight: "500",
  },
  title: {
    color: greenColor,
    fontSize: 17,
    marginTop: 5,
    marginBottom: 4.5,
    textTransform: "uppercase",
    fontWeight: "500",
  },
  top: {
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
  },
  left: {
    gap: 3,
  },
  logo: {
    width: 35,
    height: 35,
  },
});
