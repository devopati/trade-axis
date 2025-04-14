import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { adminScreenNames } from "@/constants/screen-names";
import AdminHome from "@/screens/admin/AdminHome";
import { SafeAreaView } from "react-native-safe-area-context";
import { blackColor, whiteColor } from "@/constants/colors";
import AddSignal from "@/screens/admin/AddSignal";
import EditSignal from "@/screens/admin/EditSignal";
import SendNotification from "@/screens/admin/SendNotification";
import GenerateReports from "@/screens/admin/GenerateReports";

const Stack = createNativeStackNavigator();

const AdminNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: blackColor,
        },
        headerTitleStyle: {
          color: whiteColor,
        },
      }}
    >
      <Stack.Screen
        name={adminScreenNames.HOME}
        component={AdminHome}
        options={{
          header: () => (
            <SafeAreaView style={{ backgroundColor: blackColor }} />
          ),
        }}
      />
      <Stack.Screen name={adminScreenNames.ADD_SIGNAL} component={AddSignal} />
      <Stack.Screen
        name={adminScreenNames.EDIT_SIGNAL}
        component={EditSignal}
      />
      <Stack.Screen
        name={adminScreenNames.SEND_NOTIFICATION}
        component={SendNotification}
      />
      <Stack.Screen
        name={adminScreenNames.GENERATE_REPORTS}
        component={GenerateReports}
      />
    </Stack.Navigator>
  );
};

export default AdminNavigation;

const styles = StyleSheet.create({});
