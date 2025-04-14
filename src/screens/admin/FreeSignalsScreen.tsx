import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import ViewWrapper from "@/components/wrapper/ViewWrapper";
import { FlatList, RefreshControl } from "react-native-gesture-handler";
import SignalCard from "@/components/cards/SignalCard";
import { SignalType } from "@/types/types";
import SignalPopup from "./components/SignalPopup";
import UseAppHook from "@/hooks/UseAppHook";
import DeleteFab from "./components/DeleteFab";

const FreeSignalsScreen = () => {
  const {
    adminFreeSignals,
    hasMoreFree,
    getAdminSignalsAsync,
    loading,
    processing,
    deleteSignalsAsync,
  } = UseAppHook();

  const [visible, setVisible] = useState<boolean>(false);
  const [currSignal, setCurrSignal] = useState<SignalType | null>(null);

  const [selectedSignals, setSelectedSignals] = useState<SignalType[]>([]);
  const [isSelecting, setIsSelecting] = useState<boolean>(false);

  const showSignalPop = (signal: SignalType) => {
    setVisible(true);
    setCurrSignal(signal);
  };

  const selectSignalHandler = (item: SignalType) => {
    setSelectedSignals((prev) => {
      if (selectedSignals.includes(item)) {
        if (selectedSignals.length === 1) {
          setIsSelecting(false);
        }
        return prev.filter((signal) => signal !== item);
      } else {
        return [...prev, item];
      }
    });
  };

  useEffect(() => {
    getAdminSignalsAsync("free");
  }, []);

  return (
    <ViewWrapper>
      <DeleteFab
        visible={isSelecting}
        loading={processing}
        onPress={async () => {
          await deleteSignalsAsync(
            selectedSignals.map((s) => s._id ?? ""),
            "free"
          );
          setSelectedSignals([]);
          setIsSelecting(false);
        }}
      />
      <SignalPopup
        signal={currSignal}
        visible={visible}
        setVisible={setVisible}
      />
      <FlatList
        data={adminFreeSignals as SignalType[]}
        renderItem={({ item }) => (
          <SignalCard
            signal={item}
            onPress={() => {
              if (isSelecting) {
                selectSignalHandler(item);
              } else {
                item.isClosed === undefined &&
                  item.hitTakeProfit === undefined &&
                  showSignalPop(item);
              }
            }}
            selected={selectedSignals.includes(item)}
            onLongPress={() => {
              setIsSelecting(true);
              selectSignalHandler(item);
            }}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        nestedScrollEnabled={true}
        contentContainerStyle={styles.flatlist}
        refreshControl={
          <RefreshControl
            refreshing={loading}
            onRefresh={() => getAdminSignalsAsync("free")}
          />
        }
      />
    </ViewWrapper>
  );
};

export default FreeSignalsScreen;

const styles = StyleSheet.create({
  flatlist: {
    paddingBottom: 100,
    paddingTop: 3,
    paddingHorizontal: 3,
    gap: 3,
  },
});
