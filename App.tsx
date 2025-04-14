import RootNavigation from "./src/navigation/RootNavigation";
import { StatusBar } from "expo-status-bar";
import { Provider as PaperProvider } from "react-native-paper";
import * as SystemUI from "expo-system-ui";
import AppContextHook from "@/context/AppContextHook";
import NotificationContainer from "@/components/containers/NotificationContainer";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import RevenueCatSdk from "@/components/payment/RevenueCatSdk";
import { KeyboardAvoidingView } from "react-native";

SystemUI.setBackgroundColorAsync("black");

export default function App() {
  return (
    <PaperProvider theme={{ mode: "adaptive" }}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
          <StatusBar style="light" />
          <AppContextHook>
            <NotificationContainer />
            <RevenueCatSdk />
            <RootNavigation />
          </AppContextHook>
        </KeyboardAvoidingView>
      </GestureHandlerRootView>
    </PaperProvider>
  );
}
