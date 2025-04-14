import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { adminScreenNames } from "@/constants/screen-names";
import FreeSignalsScreen from "./FreeSignalsScreen";
import PremiumSignals from "./PremiumSignals";
import { blackColor, yellowColor } from "@/constants/colors";
import FabItem from "./components/FabItem";
import MenuPopup from "./components/MenuPopup";

const Tab = createMaterialTopTabNavigator();

const AdminHome = () => {
  const [visible, setVisible] = React.useState(false);

  return (
    <>
      <FabItem visible={visible} onPress={() => setVisible(true)} />
      <MenuPopup visible={visible} setVisible={setVisible} />
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: yellowColor,
          tabBarInactiveTintColor: "#666",
          tabBarIndicatorStyle: {
            backgroundColor: yellowColor,
          },
          tabBarStyle: {
            backgroundColor: blackColor,
          },
        }}
      >
        <Tab.Screen
          name={adminScreenNames.FREE_SIGNALS}
          component={FreeSignalsScreen}
        />
        <Tab.Screen
          name={adminScreenNames.PREMIUM_SIGNALS}
          component={PremiumSignals}
        />
      </Tab.Navigator>
    </>
  );
};

export default AdminHome;

const styles = StyleSheet.create({});
