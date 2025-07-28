import { StyleSheet } from "react-native";
import React, { useContext } from "react";
import ViewWrapper from "@/components/wrapper/ViewWrapper";
import { AppContext } from "@/context/AppContextHook";
import { FlatList, RefreshControl } from "react-native-gesture-handler";
import SignalCard from "@/components/cards/SignalCard";
import { SignalType } from "@/types/types";

const HomeScreen = () => {
  const { signals, getAllSignals, loading } = useContext(AppContext);
  return (
    <ViewWrapper>
      <FlatList
        data={signals as SignalType[]}
        renderItem={({ item }) => <SignalCard signal={item} />}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        nestedScrollEnabled={true}
        contentContainerStyle={{
          paddingBottom: 100,
          paddingTop: 3,
          paddingHorizontal: 3,
          gap: 3,
        }}
        refreshControl={
          <RefreshControl
            refreshing={loading}
            onRefresh={() => getAllSignals("free")}
          />
        }
      />
    </ViewWrapper>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
