import { StyleSheet, Text, View } from "react-native";
import React, { useContext, useState } from "react";
import ViewWrapper from "@/components/wrapper/ViewWrapper";
import { FlatList, RefreshControl } from "react-native-gesture-handler";
import { AppContext } from "@/context/AppContextHook";
import SignalCard from "@/components/cards/SignalCard";
import { SignalType } from "@/types/types";
import SignalPopup from "./components/SignalPopup";

const FreeSignalsScreen = () => {
  const { signals, getAllSignals, loading } = useContext(AppContext);

  const [visible, setVisible] = useState<boolean>(false);
  const [currSignal, setCurrSignal] = useState<SignalType | null>(null);

  const showSignalPop = (signal: SignalType) => {
    setVisible(true);
    setCurrSignal(signal);
  };

  return (
    <ViewWrapper>
      <SignalPopup
        signal={currSignal}
        visible={visible}
        setVisible={setVisible}
      />
      <FlatList
        data={signals as SignalType[]}
        renderItem={({ item }) => (
          <SignalCard signal={item} onPress={() => showSignalPop(item)} />
        )}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        nestedScrollEnabled={true}
        contentContainerStyle={styles.flatlist}
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

export default FreeSignalsScreen;

const styles = StyleSheet.create({
  flatlist: {
    paddingBottom: 100,
    paddingTop: 3,
    paddingHorizontal: 3,
    gap: 3,
  },
});
