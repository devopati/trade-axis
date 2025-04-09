import { StyleSheet } from "react-native";
import React from "react";
import HomeScreen from "@/screens/home/HomeScreen";
import { bottomTabScreenNames } from "@/constants/screen-names";
import Premium from "@/screens/premium/Premium";
import Reports from "@/screens/reports/Reports";
import Faqs from "@/screens/faqs/Faqs";
import Menu from "@/screens/menu/Menu";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Ionicons from "@expo/vector-icons/Ionicons";
import { yellowColor } from "@/constants/colors";
import BottomTabsHeader from "@/components/headers/BottomTabsHeader";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tabs = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        header: () => {
          return <BottomTabsHeader title={route.name} />;
        },
        tabBarIcon: ({ focused, color, size }) => {
          //add icons here for each tab using expo-vector-icons
          if (route.name === bottomTabScreenNames.HOME) {
            return (
              <FontAwesome5 name="dollar-sign" size={size} color={color} />
            );
          }
          if (route.name === bottomTabScreenNames.PREMIUM) {
            return <FontAwesome5 name="star" size={size} color={color} />;
          }
          if (route.name === bottomTabScreenNames.REPORTS) {
            return <FontAwesome5 name="chart-bar" size={size} color={color} />;
          }
          if (route.name === bottomTabScreenNames.FAQs) {
            return (
              <FontAwesome5 name="question-circle" size={size} color={color} />
            );
          }
          if (route.name === bottomTabScreenNames.MENU) {
            return (
              <Ionicons name="menu-outline" size={size + 1} color={color} />
            );
          }
        },
        tabBarStyle: {
          backgroundColor: "#000000",
          height: 60,
          borderTopWidth: 0,
        },
        tabBarLabelStyle: {
          fontSize: 14,
        },
        tabBarActiveTintColor: yellowColor,
      })}
    >
      <Tabs.Screen name={bottomTabScreenNames.HOME} component={HomeScreen} />
      <Tabs.Screen name={bottomTabScreenNames.PREMIUM} component={Premium} />
      <Tabs.Screen name={bottomTabScreenNames.REPORTS} component={Reports} />
      <Tabs.Screen name={bottomTabScreenNames.FAQs} component={Faqs} />
      <Tabs.Screen name={bottomTabScreenNames.MENU} component={Menu} />
    </Tabs.Navigator>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({});
