import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { SignalType } from "@/types/types";
import { API, SOCKET_URL } from "@/API/endpoint";
import { getObjectData, storeObjectData } from "@/utils/async-storage";
import { io, Socket } from "socket.io-client";
import { PurchasesPackage } from "react-native-purchases";

interface AppContextType {
  loading: boolean;
  error: string | null;
  signals: SignalType[] | Promise<SignalType[]>;
  premiumSignals: SignalType[] | Promise<SignalType[]>;
  socket: Socket | null;
  activePlans: string[];
  availablePlans: PurchasesPackage[];
  getAllSignals: (plan?: string) => void;
  setActivePlans: (arg: string[]) => void;
  setAvailablePlans: (arg: PurchasesPackage[]) => void;
}

export const AppContext = React.createContext<AppContextType>({
  loading: false,
  error: null,
  signals: [],
  premiumSignals: [],
  socket: null,
  activePlans: [],
  availablePlans: [],
  getAllSignals: (arg) => {},
  setActivePlans: (arg) => {},
  setAvailablePlans: (arg) => {},
});

const AppContextHook = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [signals, setSignals] = React.useState<
    SignalType[] | Promise<SignalType[]>
  >((async (): Promise<SignalType[]> => getObjectData("signals"))() ?? []);
  const [premiumSignals, setPremiumSignals] = React.useState<
    SignalType[] | Promise<SignalType[]>
  >((async (): Promise<SignalType[]> => getObjectData("signals"))() ?? []);

  const [availablePlans, setAvailablePlans] = useState<PurchasesPackage[]>([]);
  const [activePlans, setActivePlans] = useState<string[]>([]);

  const getAllSignals = async (plan?: string) => {
    try {
      setLoading(true);
      const res = await API.get("signals", {
        params: {
          plan,
        },
      }); //change to correct api
      storeObjectData("signals", res.data.signals);
      plan === "free"
        ? setSignals(res.data.signals)
        : setPremiumSignals(res.data.signals);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllSignals("free");
  }, []);
  return (
    <AppContext.Provider
      value={{
        loading,
        error,
        signals,
        premiumSignals,
        socket: io(SOCKET_URL),
        activePlans,
        availablePlans, //set active plans here
        getAllSignals,
        setActivePlans,
        setAvailablePlans,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextHook;

const styles = StyleSheet.create({});
