import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { adminScreenNames } from "@/constants/screen-names";
import AdminHome from "@/screens/admin/AdminHome";
import { SafeAreaView } from "react-native-safe-area-context";
import { blackColor } from "@/constants/colors";

const Stack = createNativeStackNavigator();

const AdminNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => <SafeAreaView style={{ backgroundColor: blackColor }} />,
      }}
    >
      <Stack.Screen name={adminScreenNames.HOME} component={AdminHome} />
    </Stack.Navigator>
  );
};

export default AdminNavigation;

const styles = StyleSheet.create({});
