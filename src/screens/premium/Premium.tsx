import { StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect } from "react";
import ViewWrapper from "@/components/wrapper/ViewWrapper";
import { AppContext } from "@/context/AppContextHook";
import { FlatList, RefreshControl } from "react-native-gesture-handler";
import SignalCard from "@/components/cards/SignalCard";
import SubscriptionCard from "@/components/cards/SubscriptionCard";
import { SignalType } from "@/types/types";

const Premium = () => {
  const {
    premiumSignals,
    getAllSignals,
    activePlans,
    loading,
    availablePlans,
  } = useContext(AppContext);
  useEffect(() => {
    activePlans.length !== 0 && getAllSignals("premium");
  }, []);
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
          data={Array.from({ length: 4 })}
          renderItem={({ item }) => <SubscriptionCard plan={item} />}
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
});
