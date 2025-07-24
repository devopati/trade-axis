import { StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect } from "react";
import ViewWrapper from "@/components/wrapper/ViewWrapper";
import { AppContext } from "@/context/AppContextHook";
import { FlatList, RefreshControl } from "react-native-gesture-handler";
import SignalCard from "@/components/cards/SignalCard";
import SubscriptionCard from "@/components/cards/SubscriptionCard";
import { SignalType } from "@/types/types";
import useRevenueCatSDKHook from "@/hooks/UseRevenueCatSDKHook";
import { blackColor } from "@/constants/colors";

const Premium = () => {
  const {
    premiumSignals,
    getAllSignals,
    activePlans,
    loading,
    availablePlans,
  } = useContext(AppContext);

  const { purchasePlanAsync } = useRevenueCatSDKHook();

  useEffect(() => {
    activePlans.length !== 0 && getAllSignals("premium");
  }, []);

  useEffect(() => {
    activePlans.length !== 0 && getAllSignals("premium");
  }, [activePlans]);

  return (
    <ViewWrapper>
      {activePlans.length !== 0 ? (
        <FlatList
          data={premiumSignals as SignalType[]}
          renderItem={({ item }) => <SignalCard signal={item} />}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          nestedScrollEnabled={true}
          contentContainerStyle={styles.flatlist}
          refreshControl={
            <RefreshControl
              refreshing={loading}
              onRefresh={() =>
                activePlans.length !== 0 && getAllSignals("premium")
              }
            />
          }
        />
      ) : (
        <FlatList
          data={availablePlans.reverse()}
          renderItem={({ item }) => (
            <SubscriptionCard
              plan={item}
              onPurchasePlan={() => purchasePlanAsync(item)}
            />
          )}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          nestedScrollEnabled={true}
          contentContainerStyle={styles.flatlist}
          refreshControl={
            <RefreshControl
              refreshing={false}
              onRefresh={() => getAllSignals()}
            />
          }
          ListFooterComponent={
            <View
              style={{
                paddingHorizontal: 20,
                marginTop: 10,
                backgroundColor: blackColor,
                paddingVertical: 20,
                borderRadius: 14,
              }}
            >
              <Text
                style={[styles.text1, { lineHeight: 25 }]}
                allowFontScaling={false}
              >
                App subscriptions will renew automatically. You can turn this
                off any time. {"\n"}
                If you cancel your subscription, you can still use the
                subscription until the current billing period ends. {"\n\n"}
                If you have any questions or need help, please contact us at:{" "}
              </Text>
              <Text
                selectable
                dataDetectorType={"email"}
                allowFontScaling={false}
                style={[styles.text1, { fontWeight: "600", fontSize: 17 }]}
              >
                tradeaxishub@gmail.com
              </Text>
            </View>
          }
        />
      )}
    </ViewWrapper>
  );
};

export default Premium;

const styles = StyleSheet.create({
  flatlist: {
    paddingBottom: 100,
    paddingTop: 3,
    paddingHorizontal: 3,
    gap: 3,
  },
  text1: {
    fontSize: 16,
    color: "white",
  },
});
